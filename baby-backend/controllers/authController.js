const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * LOGIN
 */
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const [users] = await db.query(
            `
            SELECT
                u.*,
                r.name AS role
            FROM users u
            JOIN roles r ON u.role_id = r.id
            WHERE u.email = ?
            `,
            [email],
        );

        if (users.length === 0) {
            return res.status(401).json({
                message: "Email not found",
            });
        }

        const user = users[0];

        let isMatch = false;

        if (user.password && user.password.startsWith("$2")) {
            isMatch = await bcrypt.compare(password, user.password);
        } else {
            isMatch = password === user.password;
        }

        if (!isMatch) {
            return res.status(401).json({
                message: "Wrong password",
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" },
        );

        return res.json({
            token,
            user,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Server error",
            error: err.message,
        });
    }
};

/**
 * REGISTER (AUTO LOGIN FIX)
 */
exports.register = async (req, res) => {
    try {
        const { parent, children, allergy } = req.body;

        // =========================
        // 1. CHECK EMAIL EXISTS
        // =========================
        const [exist] = await db.query("SELECT * FROM users WHERE email = ?", [
            parent.email,
        ]);

        if (exist.length > 0) {
            return res.status(400).json({
                message: "Email already exists",
            });
        }

        // =========================
        // 2. CREATE USER (LOGIN SYSTEM)
        // =========================
        const hashedPassword = await bcrypt.hash(parent.password, 10);

        const [userResult] = await db.query(
            `INSERT INTO users (full_name, email, password, role_id)
             VALUES (?, ?, ?, ?)`,
            [
                parent.firstName + " " + parent.lastName,
                parent.email,
                hashedPassword,
                3, // parent role (theo DB bạn)
            ],
        );

        const userId = userResult.insertId;

        // =========================
        // 3. INSERT CHILDREN → child_profiles
        // =========================
        if (children && children.length > 0) {
            await Promise.all(
                children.map((child) =>
                    db.query(
                        `INSERT INTO child_profiles 
                        (parent_id, name, date_of_birth, weight, height, gender, image_url)
                        VALUES (?, ?, ?, ?, ?, ?, ?)`,
                        [
                            userId,
                            child.name,
                            child.dob,
                            child.weight,
                            child.height,
                            child.gender,
                            child.image_url || null,
                        ],
                    ),
                ),
            );
        }

        // =========================
        // 4. RESPONSE USER (JOIN ROLE)
        // =========================
        const [users] = await db.query(
            `
            SELECT 
                u.id,
                u.full_name,
                u.email,
                r.name AS role
            FROM users u
            JOIN roles r ON u.role_id = r.id
            WHERE u.id = ?
            `,
            [userId],
        );

        const user = users[0];

        // =========================
        // 5. JWT TOKEN
        // =========================
        const token = jwt.sign(
            {
                id: user.id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" },
        );

        return res.status(201).json({
            user,
            token,
        });
    } catch (err) {
        console.log("REGISTER ERROR:", err);
        return res.status(500).json({
            message: "Server error",
            error: err.message,
        });
    }
};

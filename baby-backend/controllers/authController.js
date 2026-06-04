const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const [users] = await db.query(
            `
            SELECT
                u.*,
                r.name AS role
            FROM users u
            JOIN roles r
                ON u.role_id = r.id
            WHERE email = ?
            `,
            [email]
        );

        if (users.length === 0) {
            return res.status(401).json({
                message: "Email not found"
            });
        }

        const user = users[0];

        let isMatch = false;

        if (
            user.password &&
            user.password.startsWith("$2")
        ) {
            isMatch = await bcrypt.compare(
                password,
                user.password
            );
        } else {
            isMatch = password === user.password;
        }

        //for debug
        // console.log("INPUT:", password);
        // console.log("DB:", user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Wrong password"
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.json({
            token,
            user
        });

    } catch (err) {
        res.status(500).json(err);
    }
};
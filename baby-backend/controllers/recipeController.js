const db = require("../db");

exports.getRecipes = async (req, res) => {
    try {

        const [rows] = await db.query(`
            SELECT
                r.*,
                mt.name AS mealType
            FROM recipes r
            LEFT JOIN meal_types mt
                ON r.meal_type_id = mt.id
        `);

        res.json(rows);

    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getRecipeById = async (req, res) => {
    try {

        const id = req.params.id;

        const [recipe] = await db.query(
            `
            SELECT *
            FROM recipes
            WHERE id = ?
            `,
            [id]
        );

        if (recipe.length === 0) {
            return res.status(404).json({
                message: "Recipe not found"
            });
        }

        const [ingredients] = await db.query(
            `
            SELECT
                i.name,
                ri.quantity
            FROM recipe_ingredients ri
            JOIN ingredients i
                ON ri.ingredient_id = i.id
            WHERE ri.recipe_id = ?
            `,
            [id]
        );

        res.json({
            ...recipe[0],
            ingredients
        });

    } catch (err) {
        res.status(500).json(err);
    }
};
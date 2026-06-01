import { recipes } from "@/data/recipes";
import { recipeRatings } from "@/data/ratingData";

export const getRecipeById = (id: string) => {
    const recipe = recipes.find((item) => item.id === id);

    if (!recipe) return null;

    const rating = recipeRatings.find((item) => item.recipeId === id);

    return {
        ...recipe,
        rating: rating?.averageRating ?? 0,
        totalRatings: rating?.totalRatings ?? 0,
    };
};

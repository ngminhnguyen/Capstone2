export const bannerConfig: Record<
    string,
    {
        title: string;
        color: string;
        navbarColor: string;
    }
> = {
    "/parent/dashboard": {
        title: "Hello",
        color: "bg-red-600",
        navbarColor: "bg-red-600",
    },

    "/parent/favorites": {
        title: "Favorites",
        color: "bg-pink-500",
        navbarColor: "bg-pink-500",
    },

    "/parent/meal-planner": {
        title: "Meal Planner",
        color: "bg-orange-500",
        navbarColor: "bg-orange-500",
    },

    "/parent/profile": {
        title: "Hello",
        color: "bg-green-600",
        navbarColor: "bg-green-600",
    },
};

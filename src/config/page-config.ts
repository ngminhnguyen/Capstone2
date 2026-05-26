export const pageConfig: Record<
    string,
    {
        title?: string;
        bannerColor?: string;
        navbarColor: string;
    }
> = {
    "/": {
        navbarColor: "bg-[#b63b5d] text-white",
    },

    "/home": {
        navbarColor: "bg-[#b63b5d] text-white",
    },

    "/recipes": {
        navbarColor:
            "bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white",
    },

    "/articles": {
        navbarColor: "bg-[#EE9B06] text-white",
    },

    "/register": {
        navbarColor: "bg-[#FDECE4] text-[#4E0706]",
    },

    "/parent/dashboard": {
        title: "Hello",
        bannerColor: "bg-red-600",

        navbarColor: "bg-red-600 text-white",
    },

    "/parent/favorites": {
        title: "Favorites",
        bannerColor: "bg-pink-500",

        navbarColor: "bg-pink-500 text-white",
    },

    "/parent/meal-planner": {
        title: "Meal Planner",

        bannerColor: "bg-orange-500",

        navbarColor: "bg-orange-500 text-white",
    },

    "/parent/profile": {
        title: "Hello",

        bannerColor: "bg-red-600",

        navbarColor: "bg-red-600 text-white",
    },
};

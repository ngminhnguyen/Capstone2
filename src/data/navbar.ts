export type NavbarItem = {
    name: string;
    href: string;
};

export const publicNavigation: NavbarItem[] = [
    {
        name: "Home",
        href: "/home",
    },
    {
        name: "Recipes",
        href: "/recipes",
    },
    {
        name: "Expert's Articles",
        href: "/articles",
    },
];

export const parentNavigation: NavbarItem[] = [
    {
        name: "Dashboard",
        href: "/parent/dashboard",
    },
    {
        name: "Favorites",
        href: "/parent/favorites",
    },
    {
        name: "Growth Tracking",
        href: "/parent/growth-tracking",
    },
    {
        name: "Meal Planner",
        href: "/parent/meal-planner",
    },
];

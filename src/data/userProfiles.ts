export type BabyProfile = {
    id: string;

    name: string;

    avatar: string;

    dateOfBirth: string;

    weight: string;

    height: string;

    growthStatus: string;
};

export type UserProfile = {
    id: string;

    fullName: string;

    email: string;

    avatar: string;

    joinedAt: string;

    babies: BabyProfile[];
};

export const userProfile: UserProfile = {
    id: "user-1",

    fullName: "Cherry Honey Parent",

    email: "user.@gmail.com",

    avatar: "/images/avatar.png",

    joinedAt: "2025-01-10",

    babies: [
        {
            id: "baby-1",

            name: "Cherry Honey",

            avatar: "/images/parent/baby1.webp",

            dateOfBirth: "12/2/2025",

            weight: "7.2 kg",

            height: "65 cm",

            growthStatus: "Average growth for age",
        },

        {
            id: "baby-2",

            name: "Luna Honey",

            avatar: "/images/parent/baby2.webp",

            dateOfBirth: "28/3/2025",

            weight: "8.0 kg",

            height: "68 cm",

            growthStatus: "Healthy growth",
        },

        {
            id: "baby-3",

            name: "Milo Honey",

            avatar: "/images/parent/baby3.webp",

            dateOfBirth: "10/1/2025",

            weight: "6.8 kg",

            height: "63 cm",

            growthStatus: "Needs nutrition support",
        },
    ],
};

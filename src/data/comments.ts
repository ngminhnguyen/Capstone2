// DATA COMMENTS
export const comments = [
    {
        id: 1,

        // 👇 comment thuộc recipe id = 1
        recipeId: "1",

        user: {
            name: "Emma Johnson",
            avatar: "/images/user.png",
        },

        time: "58 minutes ago",

        content:
            "I’m a bit confused about how to introduce finger foods safely. Any tips?",

        likes: 25,
        dislikes: 3,

        replies: [
            {
                id: 11,

                user: {
                    name: "Baby",
                    avatar: "/images/logo.png",
                    verified: true,
                },

                time: "8 minutes ago",

                content:
                    "Start with soft foods like banana or avocado and always supervise your little one during meals.",

                likes: 2,
            },
        ],
    },

    {
        id: 2,

        // 👇 recipe id = 2
        recipeId: "2",

        user: {
            name: "Sophia Miller",
            avatar: "/images/user.png",
        },

        time: "5 hours ago",

        content:
            "The weaning recipes here are super helpful! My baby loved the broccoli puree.",

        likes: 14,
        dislikes: 1,

        replies: [],
    },

    {
        id: 3,

        // 👇 recipe id = 1
        recipeId: "1",

        user: {
            name: "Olivia Brown",
            avatar: "/images/user.png",
        },

        time: "1 day ago",

        content:
            "Does anyone have ideas for dairy-free breakfast options for 8 months?",

        likes: 8,
        dislikes: 0,

        replies: [
            {
                id: 31,

                user: {
                    name: "Skill Sprout",
                    avatar: "/images/logo.png",
                    verified: true,
                },

                time: "20 minutes ago",

                content:
                    "You can try banana oat pancakes or avocado toast fingers!",

                likes: 1,
            },
        ],
    },
];

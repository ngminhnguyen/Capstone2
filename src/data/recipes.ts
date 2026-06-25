export const recipes = [
    {
        id: "1",
        title: "Bright Starts Brekkie Bowl",
        subtitle: "Veggie-packed creamy breakfast bowl",
        desc: "Perfect for hot summer days, this cool + creamy brekkie bowl helps your little one enjoy more vegetables in a fun way.",

        img: "/images/recipe1.webp",
        author: {
            name: "Minh Nguyen",
            avatar: "/images/avatar.png",
        },

        mealTime: "Breakfast",
        ageMonths: 7,
        serves: 1,
        prepTime: 5,
        cookTime: 0,

        tags: {
            diet: ["Vegetarian", "Egg-Free"],
            type: "Puree",
            occasion: "Breakfast",
        },

        colors: {
            badge: "bg-purple-500",
            theme: "from-purple-700 to-fuchsia-500",
        },

        allergyInfo: [
            { name: "Vegetarian", img: "/images/alleryVegetagreant.webp" },
            { name: "Egg Free", img: "/images/alleryEgg.webp" },
            { name: "Nut Free", img: "/images/alleryNut.webp" },
            { name: "Soy Free", img: "/images/allerySoya.webp" },
        ],

        ingredients: [
            "1 banana",
            "1 cup strawberries",
            "1/2 cup yogurt",
            "Ice cubes",
        ],

        steps: [
            "Cut fruits into small pieces.",
            "Add all ingredients into a blender.",
            "Blend until smooth and creamy.",
            "Serve chilled in a bowl or cup.",
        ],
    },

    {
        id: "2",
        title: "Yummy Yogurt Trio Pots",
        subtitle: "3 fun yogurt combinations for toddlers",
        desc: "Yogurt is one of our go-to ingredients for quick, healthy snacks packed with calcium and probiotics.",

        img: "/images/recipe2.webp",
        author: {
            name: "Minh Nguyen",
            avatar: "/images/avatar.png",
        },

        mealTime: "Snack",
        ageMonths: 7,
        serves: 1,
        prepTime: 5,
        cookTime: 0,

        tags: {
            diet: ["Vegetarian", "Gluten-Free"],
            type: "Snack",
            occasion: "Snack",
        },

        colors: {
            badge: "bg-yellow-500",
            theme: "from-yellow-400 to-orange-400",
        },

        ingredients: [
            "1 cup yogurt",
            "Blueberries",
            "Banana slices",
            "Honey (optional)",
        ],

        steps: [
            "Divide yogurt into small bowls.",
            "Add different toppings to each bowl.",
            "Mix gently if needed.",
            "Serve immediately.",
        ],
    },

    {
        id: "3",
        title: "Rise + Shine Scrambled Eggs",
        subtitle: "Soft scrambled eggs for babies",
        desc: "These soft scrambled eggs are quick, nutritious and perfect for baby-led weaning breakfast.",

        img: "/images/recipe3.webp",
        author: {
            name: "Minh Nguyen",
            avatar: "/images/avatar.png",
        },

        mealTime: "Breakfast",
        ageMonths: 7,
        serves: 1,
        prepTime: 5,
        cookTime: 3,

        tags: {
            diet: ["High-Protein"],
            type: "Soft Food",
            occasion: "Breakfast",
        },

        colors: {
            badge: "bg-pink-500",
            theme: "from-pink-400 to-rose-500",
        },

        ingredients: ["2 eggs", "Butter", "Milk", "Cheese"],

        steps: [
            "Whisk eggs with a little milk.",
            "Heat butter in a pan on low heat.",
            "Cook slowly while stirring gently.",
            "Add cheese at the end.",
        ],
    },

    {
        id: "4",
        title: "Broc N Roll Cheesy Pasta",
        subtitle: "Quick broccoli cheesy pasta",
        desc: "A 15-minute comforting pasta packed with broccoli and cheese for toddlers.",

        img: "/images/recipe4.webp",
        author: {
            name: "Minh Nguyen",
            avatar: "/images/avatar.png",
        },

        mealTime: "Dinner",
        ageMonths: 8,
        serves: 1,
        prepTime: 5,
        cookTime: 10,

        tags: {
            diet: ["Vegetarian"],
            type: "Main Meal",
            occasion: "Dinner",
        },

        colors: {
            badge: "bg-green-500",
            theme: "from-green-400 to-emerald-500",
        },

        ingredients: ["Pasta", "Broccoli", "Cheese", "Chives"],

        steps: [
            "Boil pasta until soft.",
            "Steam broccoli until tender.",
            "Mix pasta with melted cheese.",
            "Add broccoli and serve.",
        ],
    },

    {
        id: "5",
        title: "My First Chicken Curry",
        subtitle: "Mild baby-friendly chicken curry",
        desc: "A gentle introduction to curry flavors for your little one.",

        img: "/images/recipe5.webp",
        author: {
            name: "Minh Nguyen",
            avatar: "/images/avatar.png",
        },

        mealTime: "Lunch",
        ageMonths: 9,
        serves: 1,
        prepTime: 10,
        cookTime: 15,

        tags: {
            diet: ["Protein Rich"],
            type: "Main Meal",
            occasion: "Lunch",
        },

        colors: {
            badge: "bg-orange-500",
            theme: "from-orange-400 to-amber-500",
        },

        ingredients: [
            "Chicken breast",
            "Coconut milk",
            "Mild curry powder",
            "Rice",
        ],

        steps: [
            "Cook chicken thoroughly.",
            "Add coconut milk and mild spices.",
            "Simmer gently until soft.",
            "Serve with rice.",
        ],
    },
];
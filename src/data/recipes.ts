import { all } from "axios";

export const recipes = [
    {
        id: "1",
        title: "bright starts brekkie bowl",
        titleInside: "We&apos;ve given smoothies a veggie shake-up!",
        desc: "Perfect for hot summer days, this cool + creamy brekkie bowl is a great way to get your little one to eat more veg.",
        img: "/images/recipe1.webp",
        mealTime: "Luch",
        color: "bg-purple-500",
        colorMonth: "bg-green-500",
        age: "7",
        serves: "1",
        prepTime: "5",
        cookTime: "0",
        author: "Nguyen Minh Nguyen",

        stickerImg1: "/images/stickerBananaMeal1.png",
        stickerImg2: "/images/stickerBananaMeal2.png",

        allergyIngredients: [
            {
                img: "/images/alleryVegetagreant.webp",
                name: "Vegetagreant",
            },
            {
                img: "/images/alleryEgg.webp",
                name: "Egg Free",
            },
            {
                img: "/images/alleryNut.webp",
                name: "Nut Free",
            },
            {
                img: "/images/allerySoya.webp",
                name: "Soya Free",
            },
        ],
        heroColor: "from-purple-700 to-fuchsia-500",

        ingredients: [
            "1 banana",
            "1 cup strawberries",
            "1/2 cup yogurt",
            "Ice cubes",
        ],

        steps: [
            "Cut the fruits into small pieces.",
            "Blend all ingredients together.",
            "Pour into popsicle molds.",
            "Freeze for 4 hours before serving.",
        ],
    },

    {
        id: "2",
        title: "three ways with yummy yogurt pots",
        desc: "Yogurt is one of our go-to...",
        img: "/images/recipe2.webp",
        mealTime: "Snack",
        color: "bg-yellow-500",
        colorMonth: "bg-green-500",
        age: "7",
        serves: "1",
        prepTime: "5",
        cookTime: "0",
        author: "Nguyen Minh Nguyen",

        stickerImg1: "/images/stickerBananaMeal1.png",
        stickerImg2: "/images/stickerBananaMeal2.png",

        ingredients: ["1 cup yogurt", "Blueberries", "Banana slices", "Honey"],

        steps: [
            "Prepare yogurt in small bowls.",
            "Add different toppings.",
            "Mix gently.",
            "Serve immediately.",
        ],
    },

    {
        id: "3",
        title: "rise + shine scrambly eggs",
        desc: "These speedy scrambly eggs...",
        img: "/images/recipe3.webp",
        mealTime: "Breakfast",
        color: "bg-pink-500",
        colorMonth: "bg-green-500",
        age: "7",
        serves: "1",
        prepTime: "5",
        cookTime: "0",
        author: "Nguyen Minh Nguyen",

        stickerImg1: "/images/stickerBananaMeal1.png",
        stickerImg2: "/images/stickerBananaMeal2.png",

        ingredients: ["2 eggs", "Butter", "Milk", "Cheese"],

        steps: [
            "Whisk eggs and milk.",
            "Heat butter in a pan.",
            "Cook eggs slowly while stirring.",
            "Add cheese before serving.",
        ],
    },

    {
        id: "4",
        title: "broc n roll cheesy chive pasta",
        desc: "Ready in just 15 minutes...",
        img: "/images/recipe4.webp",
        mealTime: "Dinner",
        color: "bg-pink-500",
        colorMonth: "bg-green-500",
        age: "7",
        serves: "1",
        prepTime: "5",
        cookTime: "0",
        author: "Nguyen Minh Nguyen",

        stickerImg1: "/images/stickerBananaMeal1.png",
        stickerImg2: "/images/stickerBananaMeal2.png",

        ingredients: ["Pasta", "Broccoli", "Cheese", "Fresh chives"],

        steps: [
            "Cook pasta until soft.",
            "Steam broccoli.",
            "Mix pasta with cheese.",
            "Top with chopped chives.",
        ],
    },

    {
        id: "5",
        title: "my first chicken curry",
        desc: "This recipe is a great way...",
        img: "/images/recipe5.webp",
        mealTime: "Snack",
        color: "bg-pink-500",
        colorMonth: "bg-green-500",
        age: "7",
        serves: "1",
        prepTime: "5",
        cookTime: "0",
        author: "Nguyen Minh Nguyen",

        stickerImg1: "/images/stickerBananaMeal1.png",
        stickerImg2: "/images/stickerBananaMeal2.png",

        ingredients: [
            "Chicken breast",
            "Coconut milk",
            "Mild curry powder",
            "Rice",
        ],

        steps: [
            "Cook chicken thoroughly.",
            "Add coconut milk and curry powder.",
            "Simmer gently.",
            "Serve with soft rice.",
        ],
    },
    {
        id: "6",
        title: "my first chicken curry",
        desc: "This recipe is a great way...",
        img: "/images/recipe6.webp",
        mealTime: "Luch",
        color: "bg-orange-500",
        colorMonth: "bg-green-500",
        age: "7",
        serves: "1",
        prepTime: "5",
        cookTime: "0",
        author: "Nguyen Minh Nguyen",

        stickerImg1: "/images/stickerBananaMeal1.png",
        stickerImg2: "/images/stickerBananaMeal2.png",

        ingredients: [
            "Chicken breast",
            "Coconut milk",
            "Mild curry powder",
            "Rice",
        ],

        steps: [
            "Cook chicken thoroughly.",
            "Add coconut milk and curry powder.",
            "Simmer gently.",
            "Serve with soft rice.",
        ],
    },
];

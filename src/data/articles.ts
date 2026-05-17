export type Article = {
    id: string;
    title: string;
    shortDescription: string;
    content: string;

    coverImage: string;

    category: string;
    ageGroup: string;
    readingTime: string;

    tags: string[];

    author: string;

    createdAt: string;

    status: "Draft" | "Published";
};

export const articles: Article[] = [
    {
        id: "1",

        title: "Healthy Eating for Babies (6–12 Months)",

        shortDescription:
            "Learn how to build healthy eating habits for babies during their important growth stages.",

        content:
            "Healthy eating during infancy supports brain development, stronger immunity, and healthy growth. Parents should focus on introducing nutrient-rich foods step by step while observing allergies and preferences.",

        coverImage: "/images/article1.jpg",

        category: "Baby Nutrition",

        ageGroup: "5 - 6 Months",

        readingTime: "5 min read",

        tags: ["nutrition", "baby food", "feeding tips"],

        author: "Nguyen Minh Nguyen",

        createdAt: "May 18, 2026",

        status: "Published",
    },

    {
        id: "2",

        title: "Foods to Avoid for Babies Under 1 Year",

        shortDescription:
            "Understand which foods may be unsafe for babies and why.",

        content:
            "Some foods such as honey, whole nuts, and high-sodium meals should be avoided for babies under 12 months due to choking risks and immature digestive systems.",

        coverImage: "/images/article2.jpg",

        category: "Food Safety",

        ageGroup: "7 - 8 Months",

        readingTime: "8 min read",

        tags: ["baby safety", "allergy", "healthy eating"],

        author: "Nguyen Minh Nguyen",

        createdAt: "May 19, 2026",

        status: "Draft",
    },
];

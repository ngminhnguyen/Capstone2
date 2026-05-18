export type ContentBlock =
    | {
          type: "heading";
          level: 1 | 2 | 3;
          text: string;
      }
    | {
          type: "paragraph";
          text: string;
      }
    | {
          type: "bullet-list";
          items: string[];
      }
    | {
          type: "image";
          src: string;
          alt: string;
      };

export type Article = {
    id: string;

    title: string;
    shortDescription: string;

    content: ContentBlock[];

    coverImage: string;

    category: string;
    ageGroup: string;
    readingTime: string;

    tags: string[];

    author: string;

    createdAt: string;

    views: number;

    status: "Draft" | "Published";
};

export const articles: Article[] = [
    {
        id: "1",

        title: "Week 1 Weaning Planner",

        shortDescription:
            "Follow our easy peasy weaning planner to help you through the first week of weaning.",

        content: [
            {
                type: "heading",
                level: 2,
                text: "Week 1 - Introducing a Variety of Yummy Veggies",
            },

            {
                type: "paragraph",
                text: "Week 1 is all about introducing a variety of yummy veggies.",
            },

            {
                type: "bullet-list",
                items: [
                    "Offer food when little ones are not too tired or hungry, such as after lunchtime milk feed.",
                    "Start with a few spoonfuls of thin smooth puree mixed with your baby's usual milk.",
                    "You can also offer soft-cooked finger-sized vegetables such as carrot, broccoli, cauliflower, or squash.",
                    "Follow your baby's pace and do not worry if they do not like it at first.",
                    "Try again later because babies may need several tries before accepting a new food.",
                    "Slowly increase the amount of food depending on your baby's appetite.",
                ],
            },

            {
                type: "image",
                src: "/images/weaningPlanning1.webp",
                alt: "Week 1 Weaning Planner",
            },
        ],

        coverImage: "/images/weaningPlanning1.webp",

        category: "Baby Nutrition",

        ageGroup: "5 - 6 Months",

        readingTime: "5 min",

        tags: ["nutrition", "baby food", "feeding tips"],

        author: "Nguyen Minh Nguyen",

        createdAt: "May 18, 2026",
        views: 100,

        status: "Published",
    },

    {
        id: "2",

        title: "Foods to Avoid for Babies Under 1 Year",

        shortDescription:
            "Understand which foods may be unsafe for babies and why.",

        content: [
            {
                type: "heading",
                level: 2,
                text: "Foods to Avoid for Babies Under 12 Months",
            },

            {
                type: "paragraph",
                text: "Some foods can be unsafe for babies because of choking risks, digestive immaturity, or harmful bacteria.",
            },

            {
                type: "bullet-list",
                items: [
                    "Avoid honey because it may contain bacteria harmful to infants.",
                    "Do not give whole nuts due to choking hazards.",
                    "Avoid foods high in salt or sugar.",
                    "Unpasteurized dairy products should not be offered.",
                    "Limit processed foods with additives and preservatives.",
                ],
            },

            {
                type: "image",
                src: "/images/weaningPlanning2.webp",
                alt: "Foods to Avoid for Babies",
            },
        ],

        coverImage: "/images/weaningPlanning2.webp",

        category: "Food Safety",

        ageGroup: "7 - 8 Months",

        readingTime: "8 min",

        tags: ["baby safety", "allergy", "healthy eating"],

        author: "Nguyen Minh Nguyen",

        createdAt: "May 19, 2026",

        views: 200,

        status: "Draft",
    },
];

export const wordList = {
    animals: ['lion',
        'elephant',
        'giraffe',
        'tiger',
        'zebra',
        'monkey',
        'penguin',
        'kangaroo',
        'hippopotamus',
        'crocodile'],
    geography: ["Mountain",
        "River",
        "Desert",
        "Forest",
        "Ocean",
        "Island",
        "Valley",
        "Canyon",
        "Peninsula",
        "Plateau",],
    hobbies: ["Reading",
        "Painting",
        "Cooking",
        "Gardening",
        "Photography",
        "Singing",
        "Cycling",
        "Drawing",
        "Traveling",
        "Writing",],
    clothes: ["Shirt",
        "Jeans",
        "Dress",
        "Sweater",
        "Jacket",
        "Hat",
        "Shoes",
        "Skirt",
        "Gloves",
        "Socks",
    ],
    sport: ["Football",
        "Basketball",
        "Tennis",
        "Swimming",
        "Cycling",
        "Running",
        "Golf",
        "Soccer",
        "Volleyball",
        "Boxing",],
    get all() {
        return [...this.animals, ...this.geography, ...this.hobbies, ...this.clothes, ...this.sport];
    }
};
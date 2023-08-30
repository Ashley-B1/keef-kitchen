const keefProducts = [
  {
    id: 1,
    categoryId: 1,
    name: "Candy Bags",
    price: 10,
    options: [
      {
        id: 1,
        name: "variety",
      },
      {
        id: 2,
        name: "sour patch kids",
      },
      {
        id: 3,
        name: "sour apple rings",
      },
      {
        id: 4,
        name: "watermelon rings",
      },
    ],
    img: "/images/candy/sour-patch1.jpeg",
  },
  {
    id: 2,
    categoryId: 1,
    name: "Nerds Ropes",
    options: [
      {
        id: 1,
        name: "single",
        price: 15,
      },
      {
        id: 2,
        name: "multiple",
        price: 10,
      },
    ],
    img: "/images/candy/nerds-candy.jpeg",
  },
  {
    id: 3,
    categoryId: 2,
    name: "Wings (6 piece)",
    price: 15,
    options: [
      {
        id: 1,
        name: "buffalo",
      },
      {
        id: 2,
        name: "bbq",
      },
      {
        id: 3,
        name: "garlic parmesan",
      },
    ],
    img: "/images/savory/hot-wangz-2.jpeg",
  },
  {
    id: 4,
    categoryId: 2,
    name: "Chip Bag",
    price: 10,
    options: [
      {
        id: 1,
        name: "hot cheetos",
      },
      {
        id: 2,
        name: "funyuns",
      },
      {
        id: 3,
        name: "doritos",
      },
      {
        id: 4,
        name: "lays",
      },
    ],
    img: "https://www.mondaq.com/images/article_images/1339792d.jpg",
  },
  {
    id: 5,
    categoryId: 3,
    name: "Majestic",
    price: 25,
    options: [
      {
        id: 1,
        name: "3 cookies",
        flavors: ["chocolate chip", "strawberry", "oreo"],
      },
      {
        id: 2,
        name: "cupcake",
        flavors: ["vanilla", "strawberry", "red velvet"],
      },
    ],
    img: "/images/baked-goods/combo-box.jpeg",
  },
  {
    id: 6,
    categoryId: 3,
    name: "Powerhouse",
    price: 25,
    options: [
      {
        id: 1,
        name: "3 cupcakes",
        flavors: ["vanilla", "strawberry", "red velvet"],
      },
    ],
    img: "/images/baked-goods/cupcakes.jpeg",
  },
  {
    id: 7,
    categoryId: 3,
    name: "Surprise Pack",
    price: 50,
    options: [
      {
        id: 1,
        name: "Dealer's Choice -- Some classics picked out by the owner",
      },
    ],
    img: "/images/baked-goods/strawberry-cake.jpeg",
  },
  {
    id: 8,
    categoryId: 3,
    name: "Party Pack",
    price: 100,
    options: [
      {
        id: 1,
        name: "Dozen Cookies",
        flavors: ["chocolate chip", "strawberry", "oreo"],
        choices: [
          {
            id: 1,
            name: "brownie pan",
            flavors: ["fudge", "strawberry"],
          },
          {
            id: 2,
            name: "cereal bar pan",
            flavors: [
              "rice crispy",
              "fruity pebbles",
              "cocoa pebbles",
              "cinnamon toast crunch",
            ],
          },
          {
            id: 3,
            name: "dozen cookies",
            flavors: ["chocolate chip", "strawberry", "oreo"],
          },
        ],
      },
    ],
    img: "/images/baked-goods/cupcakes.jpeg",
  },
  {
    id: 9,
    categoryId: 4,
    name: "cookies",
    options: [
      {
        id: 1,
        name: "single",
        price: 8,
        flavors: ["chocolate chip", "strawberry", "oreo"],
      },
      {
        id: 2,
        name: "triple",
        price: 15,
        flavors: ["chocolate chip", "strawberry", "oreo"],
      },
    ],
    img: "/images/baked-goods/cookie-box.jpeg"
  },
  {
    id: 10,
    categoryId: 4,
    name: "brownies",
    options: [
      {
        id: 1,
        name: "single",
        price: 5,
        flavors: ["fudge", "strawberry"],
      },
      {
        id: 2,
        name: "whole large pan",
        price: 40,
        flavors: ["fudge", "strawberry"],
      },
      {
        id: 3,
        name: "whole small pan",
        price: 25,
        flavors: ["fudge", "strawberry"],
      },
    ],
    img: "/images/baked-goods/brownie-box.jpeg"
  },
  {
    id: 11,
    categoryId: 4,
    name: "cupcakes",
    options: [
      {
        id: 1,
        name: "single",
        price: 8,
        flavors: ["vanilla", "strawberry", "red velvet"],
      },
      {
        id: 2,
        name: "dozen",
        price: 75,
        flavors: ["vanilla", "strawberry", "red velvet"],
      },
    ],
    img: "/images/baked-goods/cupcakes.jpeg"
  },
  {
    id: 12,
    categoryId: 4,
    name: "mini bundt cakes",
    options: [
      {
        id: 1,
        name: "single",
        price: 5,
        flavors: ["vanilla", "strawberry", "red velvet"],
      },
    ],
    img: "/images/baked-goods/bundt-cakes.jpeg"
  },
  {
    id: 13,
    categoryId: 4,
    name: "cereal bars",
    options: [
      {
        id: 1,
        name: "single",
        price: 8,
        flavors: [
          "rice crispy",
          "fruity pebbles",
          "cocoa pebbles",
          "cinnamon toast crunch",
        ],
      },
      {
        id: 2,
        name: "whole small pan",
        price: 25,
        flavors: [
          "rice crispy",
          "fruity pebbles",
          "cocoa pebbles",
          "cinnamon toast crunch",
        ],
      },
      {
        id: 3,
        name: "whole large pan",
        price: 40,
        flavors: [
          "rice crispy",
          "fruity pebbles",
          "cocoa pebbles",
          "cinnamon toast crunch",
        ],
      },
    ],
    img: "/images/baked-goods/fruty-crispy.jpeg"
  },
  {
    id: 14,
    categoryId: 4,
    name: "cheesecake",
    options: [
      {
        id: 1,
        name: "mini",
        price: 10,
        flavors: ["NY style", "strawberry", "oreo"],
      },
      {
        id: 2,
        name: "whole",
        price: 40,
        flavors: ["NY style", "strawberry", "oreo"],
      },
    ],
    img: "/images/baked-goods/cheesecake.jpeg"
  },
  {
    id: 15,
    categoryId: 4,
    name: "donuts",
    price: 6,
    options: [
      {
        id: 1,
        name: "single",
        flavors: ["vanilla", "strawberry", "red velvet"],
      }
    ],
    img: "/images/baked-goods/donut.jpeg"
  }
];


export { keefProducts };
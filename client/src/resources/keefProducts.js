const keefProducts = [
  {
    id: "price_1NnpzoA3GTTdgxGLOPZtitJL",
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
    id: "prod_Ob24vpanVRdLmH",
    categoryId: 1,
    name: "Nerds Ropes",
    options: [
      {
        id: "price_1Nnq0KA3GTTdgxGLQ8u1Jlbe",
        name: "single",
        price: 15,
      },
      {
        id: "price_1Nnq0KA3GTTdgxGLCsvVc2w5",
        name: "multiple",
        price: 10,
      },
    ],
    img: "/images/candy/nerds-candy.jpeg",
  },
  {
    id: "price_1Nnq0dA3GTTdgxGLIXNTbh66",
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
    id: "price_1Nnq0xA3GTTdgxGL5MRO7SzE",
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
    id: "price_1Nnq1PA3GTTdgxGLhwNzLxxX",
    categoryId: 3,
    name: "Majestic",
    price: 25,
    options: [
      {
        id: 1,
        name: "3 cookies",
        flavors: ["chocolate chip", "strawberry", "oreo"],
        choices: [
          {
            id: 1,
            name: "cupcake",
            flavors: ["vanilla", "strawberry", "red velvet"],
          },

        ],
      },
    ],
    img: "/images/baked-goods/combo-box.jpeg",
  },
  {
    id: "price_1Nnq1cA3GTTdgxGLgLcfBsyK",
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
    id: "price_1Nnq1sA3GTTdgxGLzyql8lk3",
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
    id: "price_1Nnq2CA3GTTdgxGLDVqB5xBS",
    categoryId: 3,
    name: "Party Pack",
    price: 100,
    options: [
      {
        id: 1,
        name: "Dozen Cupcakes",
        flavors: ["vanilla", "strawberry", "red velvet"],
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
    id: "price_1Nnq2XA3GTTdgxGLwHByCpUl",
    categoryId: 3,
    name: "Mini Pack",
    price: 40,
    options: [
      {
        id: 1,
        name: "Mini Brownies",
        flavors: ["strawberry", "fudge"],
        choices: [
          {
            id: 1,
            name: "mini cereal bar",
            flavors: [
              "rice crispy",
              "fruity pebbles",
              "cocoa pebbles",
              "cinnamon toast crunch",
            ],
          },
          {
            id: 1,
            name: "mini cookies",
            flavors: ["chocolate chip", "strawberry", "oreo"],
          },
        ],
      },
    ],
    img: "/images/baked-goods/mini-cookies.jpeg",
  },
  {
    id: "prod_Ob27fWNe1zxZyK",
    categoryId: 4,
    name: "Cookies",
    options: [
      {
        id: "price_1Nnq3bA3GTTdgxGLndlOVoUZ",
        name: "single",
        price: 8,
        flavors: ["chocolate chip", "strawberry", "oreo"],
      },
      {
        id: "price_1Nnq3bA3GTTdgxGLaaWiByRX",
        name: "triple",
        price: 15,
        flavors: ["chocolate chip", "strawberry", "oreo"],
      },
    ],
    img: "/images/baked-goods/cookie-box.jpeg"
  },
  {
    id: "prod_Ob2E2dHGlnsPNc",
    categoryId: 4,
    name: "brownies",
    options: [
      {
        id: "price_1Nnq9eA3GTTdgxGLHfsh39io",
        name: "single",
        price: 5,
        flavors: ["fudge", "strawberry"],
      },
      {
        id: "price_1Nnq9eA3GTTdgxGLvvOMrwS2",
        name: "whole large pan",
        price: 40,
        flavors: ["fudge", "strawberry"],
      },
      {
        id: "price_1Nnq9eA3GTTdgxGLHr1QTxUN",
        name: "whole small pan",
        price: 25,
        flavors: ["fudge", "strawberry"],
      },
    ],
    img: "/images/baked-goods/brownie-box.jpeg"
  },
  {
    id: "prod_Ob2FMRXiANgCwJ",
    categoryId: 4,
    name: "cupcakes",
    options: [
      {
        id: "price_1NnqAeA3GTTdgxGLE1wVduYr",
        name: "single",
        price: 8,
        flavors: ["vanilla", "strawberry", "red velvet"],
      },
      {
        id: "price_1NnqAeA3GTTdgxGLbKOnJNnv",
        name: "dozen",
        price: 75,
        flavors: ["vanilla", "strawberry", "red velvet"],
      },
    ],
    img: "/images/baked-goods/cupcakes.jpeg"
  },
  {
    id: "price_1NnqArA3GTTdgxGLgtzc6dqw",
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
    id: "prod_Ob2GYr1Ghjv4CP",
    categoryId: 4,
    name: "cereal bars",
    options: [
      {
        id: "price_1NnqBVA3GTTdgxGLuU3FOOIE",
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
        id: "price_1NnqBVA3GTTdgxGLPTBG8Pt8",
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
        id: "price_1NnqBVA3GTTdgxGLjrz170yW",
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
    id: "prod_Ob2GwlhExRqrWq",
    categoryId: 4,
    name: "cheesecake",
    options: [
      {
        id: "price_1NnqC2A3GTTdgxGLZGKzBG2P",
        name: "mini",
        price: 10,
        flavors: ["NY style", "strawberry", "oreo"],
      },
      {
        id: "price_1NnqC2A3GTTdgxGLnGRuA4mI",
        name: "whole",
        price: 40,
        flavors: ["NY style", "strawberry", "oreo"],
      },
    ],
    img: "/images/baked-goods/cheesecake.jpeg"
  },
  {
    id: "price_1NnqCKA3GTTdgxGLtcpWtzzz",
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

const getProductData = id => {
  let selectedProduct;

  for (let i = 0; i < keefProducts.length; i++) {
    let product = keefProducts[i];

    if (product.id === id) {
      selectedProduct = product;
      return selectedProduct
    }
  }

  return "Product not located";
};


export { keefProducts, getProductData };
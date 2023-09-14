const keefProducts = [
  {
    id: "price_1NpdNvA3GTTdgxGLzjBAD8fw",
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
    id: "prod_OctARCwoR7KNv4",
    categoryId: 1,
    name: "Nerds Ropes",
    options: [
      {
        id: "price_1NpdNnA3GTTdgxGLRkFOsIHc",
        name: "single",
        price: 15,
      },
      {
        id: "price_1NpdNnA3GTTdgxGLqu8gPkKv",
        name: "multiple",
        price: 10,
      },
    ],
    img: "/images/candy/nerds-candy.jpeg",
  },
  {
    id: "price_1NpdNjA3GTTdgxGLNDg9cuVa",
    categoryId: 2,
    name: "Wings (6 piece)",
    disclaimer: "Delivery only",
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
    id: "price_1NpdNdA3GTTdgxGL00wafvpE",
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
    id: "price_1NpdNXA3GTTdgxGLTm4v0p5E",
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
    id: "price_1NpdNRA3GTTdgxGLXqUmXDTi",
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
    id: "price_1NpdNKA3GTTdgxGLLAgmBcL2",
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
    id: "price_1NpdN7A3GTTdgxGLXxFBxciv",
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
    id: "price_1NpdN2A3GTTdgxGLUu2LMMKW",
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
    id: "prod_Oct9tdKevkIqr0",
    categoryId: 4,
    name: "Cookies",
    options: [
      {
        id: "price_1NpdMwA3GTTdgxGL9LUzWORi",
        name: "single",
        price: 8,
        flavors: ["chocolate chip", "strawberry", "oreo"],
      },
      {
        id: "price_1NpdMwA3GTTdgxGLflxUztzs",
        name: "triple",
        price: 15,
        flavors: ["chocolate chip", "strawberry", "oreo"],
      },
    ],
    img: "/images/baked-goods/cookie-box.jpeg"
  },
  {
    id: "prod_Oct9mFiqlJwxkv",
    categoryId: 4,
    name: "brownies",
    options: [
      {
        id: "price_1NpdMsA3GTTdgxGLRLMV7Pb9",
        name: "single",
        price: 5,
        flavors: ["fudge", "strawberry"],
      },
      {
        id: "price_1NpdMsA3GTTdgxGLL8xu3LO2",
        name: "whole large pan",
        price: 40,
        flavors: ["fudge", "strawberry"],
      },
      {
        id: "price_1NpdMsA3GTTdgxGLmKw3FUlN",
        name: "whole small pan",
        price: 25,
        flavors: ["fudge", "strawberry"],
      },
    ],
    img: "/images/baked-goods/brownie-box.jpeg"
  },
  {
    id: "prod_Oct9iWhJpqMFR0",
    categoryId: 4,
    name: "cupcakes",
    options: [
      {
        id: "price_1NpdMmA3GTTdgxGLBoRBdKLJ",
        name: "single",
        price: 8,
        flavors: ["vanilla", "strawberry", "red velvet"],
      },
      {
        id: "price_1NpdMmA3GTTdgxGLYLGwtb7H",
        name: "dozen",
        price: 75,
        flavors: ["vanilla", "strawberry", "red velvet"],
      },
    ],
    img: "/images/baked-goods/cupcakes.jpeg"
  },
  {
    id: "price_1NpdMhA3GTTdgxGLfBy8nvv9",
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
    id: "prod_Oct8pHIVTaKz6V",
    categoryId: 4,
    name: "cereal bars",
    options: [
      {
        id: "price_1NpdMGA3GTTdgxGLN8m3dNgn",
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
        id: "price_1NpdMGA3GTTdgxGLHSLbNzDH",
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
        id: "price_1NpdMGA3GTTdgxGLbU2wHZoa",
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
    id: "prod_Oct8qyRiIiiOfb",
    categoryId: 4,
    name: "cheesecake",
    disclaimer: "Delivery only",
    options: [
      {
        id: "price_1NpdMAA3GTTdgxGLAWvh0Qc0",
        name: "mini",
        price: 10,
        flavors: ["NY style", "strawberry", "oreo"],
      },
      {
        id: "price_1NpdMAA3GTTdgxGL2CtmjUl3",
        name: "whole",
        price: 40,
        flavors: ["NY style", "strawberry", "oreo"],
      },
    ],
    img: "/images/baked-goods/cheesecake.jpeg"
  },
  {
    id: "price_1NpdKKA3GTTdgxGLQzdgHd3U",
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
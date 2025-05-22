const images = require.context("../assets/images/", false, /\.(jpe?g|png)$/);

const residentBuilding = [
  {
    id: 1,
    name: "House «Barn-1»",
    category: "Сountry houses",
    cost: 45000,
    aboutCost: "The cost of the construction depends on the configuration",
    photos: [
      { id: 1, src: images("./Barn1-1.jpg"), alt: "Barn1-1" },
      { id: 2, src: images("./Barn1 - Plan.jpg"), alt: "Barn1-2" },
      { id: 3, src: images("./Barn1-2.jpg"), alt: "Barn1-2" },
      { id: 4, src: images("./Barn1_3 - Photo.jpg"), alt: "Barn1-2" },
    ],
    // color:
    //   "To choose a suitable color, you can refer to the following options: blue, red, white, green, yellow, orange, purple, brown, and pink.",
    size: "9,6x8m",
    builtUpArea: "56m2",
    NumberOfFloors: "2 floors",
    Color: "To choose",
    ExpirationDate: "Up to 40 working days",
  },
];

export default residentBuilding;

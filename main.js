// EXERCISE 1
const array = [1, 2, 3, 4, 5];

console.log(array);

console.log("SUM:", array[0] + array[1] + array[2] + array[3] + array[4]);

console.log(
  "AVERAGE:",
  (array[0] + array[1] + array[2] + array[3] + array[4]) / array.length
);

// EXERCISE 2
const produduct = {
  productName: "Iphone 17 Pro Max",
  memory: "1TB",
  isAvalableAt: ["address1", "address2", "address3"],
  price: 1200,
  quantity: 5,
};

const infoString = `${produduct.productName} with ${produduct.memory} memory is available at ${produduct.isAvalableAt[0]}.`;

console.log(infoString);

// EXERCISE 3
const books = [
  {
    title: "ჰარი პოტერი და ფილოსოფიური ქვა",
    author: "ჯოან როულინგი",
    yearPublished: 1997,
  },
  {
    title: "ალქიმიკოსი",
    author: "პაულო კოელიო",
    yearPublished: 1988,
  },
  {
    title: "პატარა პრინცი",
    author: "ანტუან დე სენტ-ეგზიუპერი",
    yearPublished: 1943,
  },
];

console.log(books);

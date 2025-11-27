const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "samir", lastName: "b", age: 26 },
];

const getFullNamesArr = users.map((fn) => fn.firstName + " " + fn.lastName);

// console.log(getFullNamesArr);

// create an array out of users array by adding index or id as object key
const usersWithId = users.map((user, index) => {
  return { id: index + 1, ...user };
});
// console.log(usersWithId);

// filter users whose age is greater than 30
const usersAbove30 = users.filter((user) => user.age > 30);
// console.log(usersAbove30);

// reduce method examples:

const findSumOfAges = users.reduce((acc, user) => acc + user.age, 0);
// console.log(findSumOfAges);

// find the max age from users array using reduce:

const findMaxAge = users.reduce((max, user) => {
  let maxAge = max;
  if (user.age > maxAge) {
    maxAge = user.age;
  }
  return maxAge;
}, 0);

// console.log(findMaxAge);

//  multiply all of the numbers in our array using reduce method

const nums = [1, 2, 3, 4, 5];

const multipliedResult = nums.reduce((acc, num) => acc * num, 1);

// console.log(multipliedResult);

//map method examples:

const arr = [1, 2, 3, 4, 5];

const mappedArr = arr.map((num) => num + 1);

// console.log(mappedArr);

// filter method examples:

const oddNums = arr.filter((num) => num % 2 !== 0);
// console.log(oddNums);

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const mappedCats = cats.map((cat) => cat.toUpperCase());
// console.log(mappedCats);

// sumOfTripledEvens(array) function using these three methods

const sumOfTripledEvens = (array) => {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr, 1);
};

console.log(sumOfTripledEvens(arr)); // 36

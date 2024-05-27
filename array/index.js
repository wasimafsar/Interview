let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for each any opeartion u do is function , see signatire for fields to pass
arr.forEach((element, index) => {
  console.log(element);
  console.log(index);
});

// filter returns new array , action inside will detremine what new array will contain
const newArray = arr.filter((element) => {
  return element % 2 == 0;
});

console.log(newArray.toString());

// again function decides what new array will contain
const newArray2 = arr.map((element, index) => {
  return element * index;
});

console.log(newArray2.toString());

const newArray3 = arr.fill(0);
console.log(arr.toString());
console.log(newArray3.toString());

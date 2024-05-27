function shortestPath() {
  console.log("test");

  // logic

  //   a b c d  - > array indexes

  //   a d  -> search array minus indexs happy path

  const str = `the quick brown fox jumps over the lazy dog`;
  const splitItems = str.split(" ");
  const str1 = "brown";
  const str2 = "the";
  const index1 = splitItems.lastIndexOf(str1);
  const index2 = splitItems.lastIndexOf(str2);
  //console.log(index2 > index1 ? index2 - index1 : index1 - index2);

  //   indexs = [0, 2, 4, 6  ];ab

  // indexs2 = [1, 3, 5 , 7 ];  cd

  const array1 = [2];
  const array2 = [0, 6];

  const diffArray = array1.map((rec, index) => array2[index] - rec);

  console.log(Math.abs(diffArray.sort()[0]));
}

shortestPath();

// // logic

// str1 index1

// a b c a a

// 0 1 2 3 4

// 0 3 4

// ab cd ab ef

// 0  1 2 3

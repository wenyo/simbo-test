// shallow copy: copy by address
let array1 = {
  name: "Wen",
  sex: "F",
};
let array2 = array1;
array2.name = "Amy";
console.log(array2);
console.log(array1);
/*
array1, array2: {
    name: "Amy",
    sex: "F",
};
*/

// Deep Copy : copy by value
let array3 = {
  name: "Wen",
  sex: "F",
};
let array4 = Object.assign({}, array3);
array4.name = "Amy";
console.log(array3);
console.log(array4);
/*
array3: {
    name: "Wen",
    sex: "F",
};
array4: {
    name: "Amy",
    sex: "F",
};
*/

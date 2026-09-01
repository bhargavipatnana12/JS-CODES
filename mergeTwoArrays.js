//merge 2 arrays and remove duplicates
let arr1 = [1, 2, 3, 4, 5, 6, 6, 6, 7];
let arr2 = [1, 2, 3, 7, 7, 8, 4];

function mergeTwoArrays(arr1, arr2) {
  let obj = {};
  let result = [];
  for (let item of arr1) {
    if (!obj[item]) {
      //we r telling to push only the unique elemente..if it is already present do not push
      result.push(item);
    }
    obj[item] = true;
  }
  for (let item of arr2) {
    if (!obj[item]) {
      result.push(item);
    }
  }
  return result;
}
console.log(mergeTwoArrays(arr1, arr2));

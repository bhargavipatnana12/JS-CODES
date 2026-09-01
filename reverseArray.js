function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    //from right to left  it should print i.e 4th index(arr.length -1=>5-1 = 4) to 0th index and we r pushing
    result.push(arr[i]);
  }
  return result;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

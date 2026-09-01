let arr = [1, 2, 78, 100, -1];
function minMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let item of arr) {
    if (item < min) {
      min = item;
    }

    if (item > max) {
      max = item;
    }
  }

  return { min, max };
}
console.log(minMax(arr));

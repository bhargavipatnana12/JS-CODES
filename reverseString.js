function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    //from right to left we need to print so that i = str.length -1 => 5-1 =>4
    result += str[i]; // result = result + srt[i] => 0 => 0l => oll...
  }
  return result;
}
console.log(reverseString("hello"));

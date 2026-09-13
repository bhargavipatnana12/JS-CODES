let string = 'madam';
function palindrome(string){
  let reverseString = '' ;
  for(let i=string.length-1;i>=0;i--){
    reverseString += string[i];
  }
  return string === reverseString;
}

console.log(palindrome(string));

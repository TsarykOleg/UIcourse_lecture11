let test = prompt('Enter value: ')
function isPalindrome(str) {
        strReverse = str.split('').reverse().join('');
    if (strReverse == str) {
      return 'yes, it is a palindrome';
    } else {
      return 'no, it is not a palindrome';
    }
  }
  console.log(isPalindrome(test))
  alert(isPalindrome(test))
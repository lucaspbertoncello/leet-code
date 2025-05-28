const isPalindrome = (num: number): boolean | string => {
  if (!num) return "Invalid number";

  const stringNum: string = num.toString();
  const reversedNum: string = stringNum.split("").reverse().join("");

  const isPalindromeNumber: boolean = Number(reversedNum) === num;

  return isPalindromeNumber;
};

console.log(isPalindrome(121));

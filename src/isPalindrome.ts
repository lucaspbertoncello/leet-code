const isPalindrome = (text: string): string => {
  if (!text) return "invalid word";

  const reversed = text.split("").reverse().join("").toLowerCase();
  const palindrome = reversed === text.toLowerCase();

  return palindrome ? `${text} is a palindrome` : `${text} is not a palindrome`;
};

console.log(isPalindrome("Ovo"));

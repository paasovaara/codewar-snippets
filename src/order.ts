/**
 * Your task is to sort a given string. Each word in the string will contain a single number. 
 * This number is the position the word should have in the result.
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 * 
 * If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
 */

export function order(words:string):string{
  const comparator = (left: string, right: string) => {
    //Use ! with caution, now spec promises that number will always exist 
    const numberLeft = left.match(/\d/)![0];
    const numberRight = right.match(/\d/)![0];
    return parseInt(numberLeft) - parseInt(numberRight);
  }
  return words.split(" ").sort(comparator).join(" ");
}
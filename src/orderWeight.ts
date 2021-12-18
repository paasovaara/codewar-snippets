/**
 * Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
 * 
 * For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
 * 
 * Example:
 * "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 
 * "100 180 90 56 65 74 68 86 99"
 * When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:
 */

export function sumOfDigits(s: string): number {
  const sum: number[] = [...s].map(character => parseInt(character));
  return sum.reduce((acc: number, value: number) => acc + value, 0);
}

export function orderWeight(strng: string): string {
  const weights = strng.split(" ").map(s => s.trim());
  
  const comparator = (left: string, right: string) => {
    const diff = sumOfDigits(left) - sumOfDigits(right);
    if (diff == 0) {
      return left < right ? -1 : 1;
    } else {
      return diff;
    }
  };
  
  return weights.sort(comparator).join(" ");
}
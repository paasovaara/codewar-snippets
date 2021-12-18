export const wordValue = (str: string): number => {
  const normalization: number = "a".charCodeAt(0) - 1;
  return [...str]
    .map(char => char.charCodeAt(0) - normalization)
    .reduce((acc, val) => acc + val, 0);
}

export const high = (str: string): string => {
  const words: string[] = str.split(" ");
  const values: number[] = words.map(word => wordValue(word));
  const maxIndex = values.indexOf(Math.max(...values));
  return words[maxIndex];
}
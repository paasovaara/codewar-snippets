export function calcLastIndexOfRow(row: number): number {
  if (row == 0)
    return 0;
  return row + calcLastIndexOfRow(row - 1);
}

export function generateArray(length: number): Array<number> {
  return Array.from(new Array(length), (element, index) => {
    return 1 + 2 * index;
  });
}

export function rowSumOddNumbers(n: number): number {
  // your code here
  const lastIndex = calcLastIndexOfRow(n);
  const prevRowLastIndex = calcLastIndexOfRow(n-1);
  
  const reducer = (previousValue: number, curValue: number) => previousValue + curValue;
  
  const fullSum = generateArray(lastIndex).reduce(reducer, 0);
  const partialSum = generateArray(prevRowLastIndex).reduce(reducer, 0);
  return fullSum - partialSum;
}
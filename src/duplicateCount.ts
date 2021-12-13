export function duplicateCount(text: string): number{
  const counts = new Map<string, number>();
  [...text.toLowerCase()].forEach((char: string) => {
    const oldValue: number | undefined = counts.get(char);
    if (oldValue)
      counts.set(char, oldValue + 1);
    else 
      counts.set(char, 1);
  });
  
  return Array.from(counts.values())
    .filter((x: number) => x > 1)
    .length;
}
/**
 * You're going to provide a needy programmer a utility method that generates an infinite sized, 
 * sequential IntStream (Iterator<number>), which contains all the numbers in a fibonacci sequence.
 */

export function fibonacciSequence(): Iterator<number> {
  
  class FibonacciIterator implements Iterator<number> {  
    private stack: Array<number> = [];
    
    public next(): IteratorResult<number> {
      const nextValue = this.stack.length < 2 ? 1 : this.stack.shift()! + this.stack[0];
      this.stack.push(nextValue);
      
      return {
        done: false,
        value: nextValue
      }
    }
  }
  return new FibonacciIterator();
}

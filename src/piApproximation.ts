/**
 * We have chosen to get a few decimals of the number "pi" using the following infinite series (Leibniz 1646–1716):
 * PI / 4 = 1 - 1/3 + 1/5 - 1/7 + ... which gives an approximation of PI / 4.
 * 
 * we will count how many iterations are needed to calculate PI with a given precision of epsilon.
 * 
 * Your function returns an array or a string or a tuple depending on the language (See sample tests) with
 * your number of iterations
 * your approximation of PI with 10 decimals
 */

export class G964 {
  public static factorialForIteration (n: number): number {
    if (n == 0) 
      return 1;
    const isOdd = (n: number): number => n % 2 == 1 ? 1 : -1;
    return -1 * isOdd(n) / (2 * n + 1);
  }
  
  public static iterPi(epsilon: number): number[] {
    let iteration: number = 0;
    let estimate: number = 0.0;
    while (Math.abs(Math.PI - estimate) > epsilon) {
      estimate += 4 * G964.factorialForIteration(iteration++)
    }
    const roundedEstimate = Math.round(estimate * 10**10) / 10**10; // round to 10 decimal precision
    return [iteration, roundedEstimate];
  }

  //Alternative solution using recursion
  public static iterPiRecursively(epsilon: number): number[] {
    const calcPi = (curEstimate: number, iteration: number): number[] => {
      if (Math.abs(Math.PI - curEstimate) < epsilon) {
        const roundedEstimate = Math.round(curEstimate * 10**10) / 10**10; // round to 10 decimal precision
        return [iteration, roundedEstimate];
      }
      else {
        const nextEstimate = curEstimate + 4 * G964.factorialForIteration(iteration++)
        return calcPi(nextEstimate, iteration);        
      }
    };
    return calcPi(0, 0);
  }
}
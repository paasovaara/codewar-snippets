/**
 * We want to approximate the length of a curve representing a function y = f(x) with a <= x <= b. 
 * First, we split the interval [a, b] into n sub-intervals with widths h1, h2, ... , hn by defining points x1, x2 , ... , xn-1 between a and b. 
 * This defines points P0, P1, P2, ... , Pn on the curve whose x-coordinates are a, x1, x2 , ... , xn-1, b and y-coordinates f(a), f(x1), ..., f(xn-1), f(b) . 
 * By connecting these points, we obtain a polygonal path approximating the curve.
 * 
 * Our task is to approximate the length of a parabolic arc representing the curve y = x * x with x in the interval [0, 1]. 
 * We will take a common step h between the points xi: h1, h2, ... , hn = h = 1/n and we will consider the points P0, P1, P2, ... , Pn on the curve. The coordinates of each Pi are (xi, yi = xi * xi).
 * 
 * The function len_curve (or similar in other languages) takes n as parameter (number of sub-intervals) and returns the length of the curve.
 */

export class G964 {
    
  public static lenCurve = (n) => {
    const pointCount = n + 1;
    const stepLength = 1 / n;
    
    interface Point {
      x: number;
      y: number;
    };
    
    const y = (x: number): number => x * x;
    
    const points: Array<Point> = Array.from(new Array(pointCount), (val, index) => {
      const x = index * stepLength;
      return { x: x,
               y: y(x) 
             };
    });
    
    let sum = 0;
    for (n = 1; n < points.length; n++) {
      const p1 = points[n-1];
      const p2 = points[n];
      const length = Math.hypot(p2.x - p1.x, p2.y - p1.y);
      sum += length;
    }
    return sum;
  }  
}
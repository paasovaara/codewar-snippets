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
    // Calculate lengths between points and sum them up
    const sum = points.map((point, index, array) => {
      if (index == 0)
        return 0;
      const previousPoint = array[index-1];
      return Math.hypot(point.x - previousPoint.x, point.y - previousPoint.y);
    }).reduce((acc, val) => acc + val);
    
    return sum;
  }  
}
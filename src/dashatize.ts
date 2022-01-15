/**
 * Given a variable n,
 * If n is an integer, Return a string with dash'-'marks before and after each odd integer, 
 * but do not begin or end the string with a dash mark. 
 * If n is negative, then the negative sign should be removed.
 * (Also no duplicate dashes allowed)
 */

export const dashatize = (num: number) => {
  return num.toString()
    .replace(/[13579]/g, odd => "-" + odd + "-")
    .replace(/-+/g, "-")
    .replace(/^-/, "")
    .replace(/-$/, "");
};
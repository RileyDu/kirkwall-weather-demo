export function sum(a, b) {
    if (!b) {
        b = 0;
        return a + b;
    }
    
    if (isNaN(a) || isNaN(b)) {
      return NaN;
    }

  return Number(a) + Number(b); //a + b
}

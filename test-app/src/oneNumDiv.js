export function oneNumDiv(a) {
    if (a%3 === 0 && a%5 === 0) {
        return "FizzBuzz";
    } else if (a%5 === 0) {
        return "Buzz";
    } else if (a%3 === 0 ) {
        return "Fizz";
    } else {
        return a;
    }
}
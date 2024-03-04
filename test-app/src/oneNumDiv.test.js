import { expect, test } from "vitest";
import { oneNumDiv } from "./oneNumDiv";

test("6 divided by 3 should return Fizz", () => {
    expect(oneNumDiv(6)).toBe("Fizz");
});

test("10 divided by 5 should return Buzz", () => {
    expect(oneNumDiv(10)).toBe("Buzz");
});

test("15 divided by 5 should return FizzBuzz", () => {
    expect(oneNumDiv(15)).toBe("FizzBuzz");
});

test("7 should return 7", () => {
    expect(oneNumDiv(7)).toBe(7);
})
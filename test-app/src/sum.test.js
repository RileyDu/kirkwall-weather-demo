import { expect, test } from "vitest";
import { sum } from "./sum";

test("adds 1 + 2 to equal 3 [int # + int #]", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 1 + -2 to equal -1 [int # + int #-]", () => {
  expect(sum(1, -2)).toBe(-1);
});

test("adds -1.5 + 3 to equal 1.5 [float # + int #]", () => {
  expect(sum(-1.5, 3)).toBe(1.5);
});

test("adds 5 equals 5 [one value given]", () => {
  expect(sum(5)).toBe(5);
});

test('adds "1" + "-2" to equal -1 [string # + string #]', () => {
  expect(sum("1", "-2")).toBe(-1);
});

test('adds "a" + "b" to equal NaN [string letter + string letter]', () => {
  expect(sum("a", "b")).toBe(NaN);
});

test('adds "a" + 2 to equal NaN [string letter + int #]', () => {
  expect(sum("a", 2)).toBe(NaN);
});

test('adds 1 + "b" to equal NaN [int # + string letter]', () => {
  expect(sum(1, "b")).toBe(NaN);
});

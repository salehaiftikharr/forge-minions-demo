import test from "node:test";
import assert from "node:assert/strict";
import * as utils from "../src/utils.js";

test("add: sums two numbers", () => {
  assert.equal(utils.add(2, 2), 4);
});

test("slugify: basic case", () => {
  assert.equal(utils.slugify("Hello World"), "hello-world");
});

// This test currently fails — it's the open issue a minion will fix.
test("slugify: collapses consecutive spaces into a single dash", () => {
  assert.equal(utils.slugify("a   b  c"), "a-b-c");
});

// Also failing — the open issue for clamp.
test("clamp: constrains a value to the [min, max] range", () => {
  assert.equal(utils.clamp(5, 0, 10), 5);
  assert.equal(utils.clamp(-3, 0, 10), 0);
  assert.equal(utils.clamp(99, 0, 10), 10);
});

// Open ticket: a truncate helper.
test("truncate: shortens long strings and adds an ellipsis", () => {
  assert.equal(utils.truncate("hello world", 5), "hello…");
  assert.equal(utils.truncate("hi", 5), "hi");
});

// Open ticket: a capitalize helper.
test("capitalize: uppercases the first letter", () => {
  assert.equal(utils.capitalize("hello"), "Hello");
  assert.equal(utils.capitalize(""), "");
});

// Open ticket: a unique helper.
test("unique: removes duplicates while preserving order", () => {
  assert.deepEqual(utils.unique([1, 2, 2, 3, 1]), [1, 2, 3]);
  assert.deepEqual(utils.unique(["a", "a", "b"]), ["a", "b"]);
});

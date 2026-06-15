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

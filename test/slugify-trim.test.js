import test from "node:test";
import assert from "node:assert/strict";
import * as utils from "../src/utils.js";

test("slugify: strips leading and trailing dashes", () => {
  assert.equal(utils.slugify("-Hello-"), "hello");
});

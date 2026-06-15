// A tiny utility library. Open issues here become pull requests, opened
// autonomously by a Forge minion (https://github.com/salehaiftikharr/agent-forge).

export function add(a, b) {
  return a + b;
}

export function slugify(input) {
  // Known issue: a run of consecutive spaces becomes multiple dashes.
  return String(input).trim().toLowerCase().replace(/ /g, "-");
}

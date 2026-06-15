// A tiny utility library. Open issues here become pull requests, opened
// autonomously by a Forge minion (https://github.com/salehaiftikharr/agent-forge).

export function add(a, b) {
  return a + b;
}

export function slugify(input) {
  return String(input).trim().toLowerCase().replace(/ +/g, "-");
}

export function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}

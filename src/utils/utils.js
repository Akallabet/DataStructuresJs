export function defaultCompare ({key : a}, {key: b}) {
  return a < b
    ? -1
    : a > b
      ? 1
      : 0
}

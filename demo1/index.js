function step1(step) {
  let result = 0
  for (let i = 0, len = 10 / step; i < len; i++) {
    result = step2(result, i)
  }
  return result
}
function step2(a, b) {
  const c = a + b
  return c
}
step1(0)

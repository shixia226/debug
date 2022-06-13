function step1(step) {
  if (step === 1) {
    step2()
  } else {
    step3()
  }
}
function step2() {
  window.history.replaceState('', 'replace1', './index.html?replace=B')
}
function step3() {
  window.history.replaceState('', 'replace2', './index.html?replace=A')
}

step1(0)

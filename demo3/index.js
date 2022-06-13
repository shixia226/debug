function step1() {
  step2()
}
function step2() {
  window.myData.text = 'changed text1'
}

window.myData = {
  text: 'initial text',
}
step1()

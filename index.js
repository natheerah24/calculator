let sum = "";
function buildSum(char) {
  sum += char;
  // document.innerHTML = sum;
  document.getElementById("output").innerHTML = sum;
}
function reset() {
  sum = "";
  document.getElementById("output").innerHTML = sum;
}
function calculate() {
  sum = eval(sum);
  document.getElementById("output").innerHTML = sum;
}

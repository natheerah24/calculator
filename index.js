let sum = "";
function buildSum(char) {
  sum += char;
  document.getElementById("output").innerHTML = sum;
}
function evaluate() {
  sum = eval(sum);
}
function reset() {
  document.getElementById(`output`).innerHTML = "";
}

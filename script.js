function put(val){
    document.getElementById("operation").value += val;
}

function clearDisplay() {
    document.getElementById("operation").value = "";
}

function sum() {
  try {
    const result = eval(document.getElementById("operation").value);
    document.getElementById("operation").value = result;
  } catch (e) {
    document.getElementById("operation").value = "Error";
  }
}
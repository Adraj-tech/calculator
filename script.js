function put(val){
    document.getElementById("operation").value += val;
}

function clearDisplay() {
    document.getElementById("operation").value = "";
}

function sum() {
  try {
    let exp = document.getElementById("operation").value;
    exp = exp.replace(/÷/g, '/'); 
    const result = eval(exp);
    
    document.getElementById("operation").value = result;
  } catch (e) {
    document.getElementById("operation").value = "Error";
  }
}
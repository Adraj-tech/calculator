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

function del() {
  var numberOfChar = document.getElementById("operation").value.length - 1;
  document.getElementById("operation").value = document.getElementById('operation').value.slice(0, numberOfChar);
}

function cleanDisplay(){
  let expression = document.getElementById("operation").value;
  if(expression === "Error" || expression === "function Error() { [native code] }" || expression === "undefined"){
   document.getElementById("operation").value = "";
}
 }

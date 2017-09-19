var add = function() { 
    var x = document.querySelector("#op1").value;
    var y = document.querySelector("#op2").value;
    var answer = Number(x) + Number(y);
    document.querySelector("#sum").innerText = answer;
  }
 
  window.onload = function() {
 document.querySelector("#add").onclick = add;
  }
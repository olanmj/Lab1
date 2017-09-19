var btnClick = function() {
    var paragraph3 = document.querySelector("#par3");
    paragraph3.innerText += " New contents of paragraph 3";
}
window.onload = function () {
    document.querySelector("#btn").onclick = btnClick;
}
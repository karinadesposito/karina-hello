var inputField = document.getElementById("inputField");
var btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", handleSubmit);
function handleSubmit() {
    alert("Hello ".concat(inputField.value));
}

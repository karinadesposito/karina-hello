const inputField = document.getElementById("inputField") as HTMLInputElement;
const btnSubmit = document.getElementById("btnSubmit") as HTMLButtonElement;

btnSubmit.addEventListener("click", handleSubmit);

function handleSubmit():void {
    alert (`Hello ${inputField.value}`);
}


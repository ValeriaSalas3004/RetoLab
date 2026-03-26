document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario_nombre");
    const inputName = document.getElementById("name");
    const showMessage = document.getElementById("showMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = inputName.value.trim();

        if (name) {
            showMessage.textContent = `Hola ${name}`;
        } else {
            showMessage.textContent = "Ingrese su nombre";
        }
    });
});

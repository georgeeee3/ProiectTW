const btnDetalii = document.getElementById("btnDetalii");
const detaliiDiv = document.getElementById("detalii");
const dataProdusSpan = document.getElementById("dataProdus");

const luni = [
    "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
    "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
];

detaliiDiv.classList.add("ascuns");

const dataCurenta = new Date();
const zi = dataCurenta.getDate();
const lunaText = luni[dataCurenta.getMonth()];
const an = dataCurenta.getFullYear();

dataProdusSpan.textContent = `${zi} ${lunaText} ${an}`;

btnDetalii.addEventListener("click", function() {
    detaliiDiv.classList.toggle("ascuns");

    if (detaliiDiv.classList.contains("ascuns")) {
        btnDetalii.textContent = "Afișează detalii";
    } else {
        btnDetalii.textContent = "Ascunde detalii";
    }
});
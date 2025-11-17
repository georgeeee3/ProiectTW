const luni = [
    "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
    "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
];

const btnAdauga = document.getElementById("btnAdauga");
const inputActivitate = document.getElementById("inputActivitate");
const listaActivitati = document.getElementById("listaActivitati");

btnAdauga.addEventListener("click", function() {
    const textActivitate = inputActivitate.value;

    if (textActivitate !== "") {
        const elementNou = document.createElement("li");

        const d = new Date();
        const zi = d.getDate();
        const lunaText = luni[d.getMonth()]; 
        const an = d.getFullYear();

        elementNou.textContent = `${textActivitate} – adăugată la: ${zi} ${lunaText} ${an}`;

        listaActivitati.appendChild(elementNou);

        inputActivitate.value = "";
    } else {
        alert("Te rog introdu o activitate!");
    }
});
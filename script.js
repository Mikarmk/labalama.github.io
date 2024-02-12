// script.js
const subjects = [
    "Разработка программных модулей",
    "Основы алгоритмизации и программирования",
    "Технология разработки и защиты баз данных",
    "Операционные системы и среды",
    "Основы проектирования баз данных"
];

function search() {
    const searchInput = document.getElementById("searchInput").value;
    const subjectOutput = document.getElementById("subjectOutput");

    if (subjects.includes(searchInput)) {
        subjectOutput.innerHTML = `<p>${searchInput}</p><button onclick="rickRoll()">Посмотреть готовую лабораторную работу</button>`;
    } else {
        subjectOutput.innerHTML = "<p>Ничего не найдено. Попробуйте другой предмет.</p>";
    }
}

function rickRoll() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
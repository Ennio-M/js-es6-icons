// Array di oggetti icone
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
// Array per generare un colore casuale
const myColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// Variabili e impostazione iniziale pagina
const app = document.getElementById("app");
const row = document.createElement("div");
row.classList.add("row", "row-cols-5", "g-5");
app.append(row);
changeColor();
printPage(icons);

// Evento
const type = document.getElementById("type");
type.addEventListener("change", filterBy);

// Funzioni
// Stampa la pagina una card alla volta
function printPage(arr) {
    arr.forEach((element) => {
        const col = document.createElement("div");
        col.setAttribute("class", "col")
        const card = document.createElement("div");
        card.setAttribute("class", "icon_container");
        card.style.color = `${element.color}`
        const icon = document.createElement("i");
        icon.setAttribute("class", `${element.family} ${element.prefix}${element.name}`);
        const h6 = document.createElement("h6");
        h6.innerHTML = `${element.name.toUpperCase()}`
        card.append(icon);
        card.append(h6);
        col.append(card);
        row.append(col);
    });
}
 // Crea l'array filtrato e lo stamoa
function filterBy() {
    const filtered = icons.filter(checkType);
    row.innerHTML = "";
    printPage(filtered);
}
// Funzione per filtrare l'array
function checkType(element) {
    return element.type == type.value || type.value == "all";
}
// Funzione per generare un colore casuale
function getrandomcolor() {
    let randomColor = "";
    for(let i = 0; i < 6; i++) {
        randomColor += myColor[getRndInteger(0, myColor.length - 1)]
    }
    return randomColor;
};
// Funzione per cambiare colore alle icone
function changeColor() {
    icons.forEach((element) => {
        const randomColor = getrandomcolor();
        element.color = `#${randomColor}`;
    })
}
// Funzione per generare un numero casuale
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
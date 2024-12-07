import {ogloszenia} from "./bazaOgloszen.js";

console.log(localStorage.getItem("idOgloszenia"));

let idProduktu = localStorage.getItem("idOgloszenia");
const cena = document.querySelector(".priceContainer");
const categoriaWybor = document.querySelector(".kategoryContainerOgl");
const calyOpis = document.querySelector(".opisKategoryContainerOgl");
const oglTitle = document.querySelector(".title");
const imgC = document.querySelector(".imgContainer");
const stanTowaruBox = document.querySelector(".stanTowaru");
const przycisk = document.querySelector(".buyItem");

let ogloszenieDoWys = ogloszenia.filter((e) => {
    return e.id_ogloszenia == idProduktu;
});

console.log(ogloszenieDoWys[0]);
let  odp = ogloszenieDoWys[0];
oglTitle.textContent = odp.title;
calyOpis.innerHTML = `Opis<br> <br>${odp.opis}`;
categoriaWybor.textContent = `Kategoria/ ${odp.category}`;
cena.textContent = `${odp.cena},00`;
stanTowaruBox.textContent = `Stan: ${odp.stan}`;

przycisk.addEventListener("click",() => {
    alert("Nie mozna kupic bo nie ma backendu");
})




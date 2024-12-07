import {ogloszenia} from "./bazaOgloszen.js";

localStorage.setItem("wyszukiwanie","");
localStorage.setItem("kategoria","");
localStorage.setItem("id-odl","");

const testSh = document.querySelector(".link");
const doWyszukiwania = document.querySelector(".searchInput");
const kategorieWybor = document.querySelectorAll(".linkCategory");
//console.log(kategorieWybor[0].textContent);
//console.log(kategorieWybor);
//console.log(kategorieWybor[0].getAttribute("kategoryName"));
Array(kategorieWybor).map((e) => {
    e.forEach((pojedyncze) => {
        //console.log(pojedyncze);
        pojedyncze.addEventListener("click",() =>{
            console.log(pojedyncze.getAttribute("kategoryName"));
            localStorage.setItem("kategoria",pojedyncze.getAttribute("kategoryName"));
        });
    });
});


if(testSh){
    testSh.addEventListener("click",function(e) {
        console.log(testSh);
        //e.preventDefault();
        //console.log(doWyszukiwania.value);
        localStorage.setItem("wyszukiwanie",doWyszukiwania.value);
        console.log(localStorage.getItem("wyszukiwanie"));
    })
}





let test = ogloszenia;

console.log(test);







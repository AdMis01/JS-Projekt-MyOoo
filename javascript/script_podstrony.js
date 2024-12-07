import {ogloszenia} from "./bazaOgloszen.js";


console.log(localStorage.getItem("wyszukiwanie"));
console.log(localStorage.getItem("kategoria"));

const contOgloszenia = document.querySelector(".ogloszenia");

//ogloszenia.forEach((ogl) =>{
//    console.log(ogl.title);
//    contOgloszenia.innerHTML += `<p>${ogl.title}</p>`;
//});

let przfiltrowana = ogloszenia.filter((ogl)=>{
    return ogl.category === localStorage.getItem("kategoria");
});

let standard = przfiltrowana;

function wyswietlenieOferty(listaDoWyswietlenia){
    let contentToShow = ``;
    listaDoWyswietlenia.forEach((ogl) =>{
        console.log(ogl.title);
        contentToShow += `
            <a href="pojedyncze_ogloszenie.html" odl="${ogl.id_ogloszenia}">
                <div class="ogloszenie" odl="${ogl.id_ogloszenia}">
                    <img src="testImg.png" alt="" odl="${ogl.id_ogloszenia}">
                    <div class="opis" odl="${ogl.id_ogloszenia}">
                        <div class="opisMin" odl="${ogl.id_ogloszenia}">
                            <p>${ogl.title}</p>
                        </div>
                        <div class="price" odl="${ogl.id_ogloszenia}">
                            <p odl="${ogl.id_ogloszenia}">${ogl.cena} zł</p>
                        </div>
                    </div>
                </div>
            </a>`;
        });
    contOgloszenia.innerHTML = contentToShow;
}

wyswietlenieOferty(przfiltrowana);


const selection = document.getElementById("elemntSelect");
console.log(selection.value);

selection.addEventListener("change",(opt)=>{
    console.log(opt.target.value);
    let zmi = opt.target.value;
    let wynik;
    if(zmi === "0"){
        wynik = przfiltrowana.sort((a,b) => a.cena - b.cena);
    }else if(zmi === "1"){
        wynik = przfiltrowana.sort((b,a) => a.cena - b.cena);
    }else if(zmi === "2"){
        wynik = przfiltrowana.sort((b,a) => a.data - b.data);
    }else if(zmi === "3"){
        wynik = przfiltrowana.sort((a,b) => a.data - b.data);
    }else if(zmi = "pop"){
        wynik = standard;
    }
    console.log(wynik);
    wyswietlenieOferty(wynik);
});

const dodanaAkcja = document.querySelectorAll(".ogloszenie");
console.log(dodanaAkcja);
Array(dodanaAkcja).forEach((poj) => {
    poj.forEach((test) => {
        test.addEventListener("click",(e) => {
            console.log(e.target.getAttribute("odl"));
            localStorage.setItem("idOgloszenia",e.target.getAttribute("odl"));
        });
    })
    
});

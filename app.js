function Renk() {
    hexKodlar = "1234567890ABCDEF";
    newHex = "#";
    for (let i = 0; i < 6; i++) {
        newHex += hexKodlar[Math.floor(Math.random() * hexKodlar.length)];
    }
    return newHex;
}

document.querySelector(".RndRenk").addEventListener("click", function () {
    let box = document.getElementsByClassName("box");
    for (let i = 0; i < 4; i++) {
        let gelenHex = Renk();
        box[i].style.background = gelenHex
        box[i].innerHTML = gelenHex
    }
})

document.querySelector(".rndGradient").addEventListener("click", function () {
    gradientBox = document.getElementsByClassName("gradientBox")[0];
    gradientCode=[];
    for (let i = 0; i < 2; i++) {
        let gradientHex = Renk();
        gradientCode.push(gradientHex);
    }
    gradient1=gradientCode[0];
    gradient2=gradientCode[1];
    cssKod=document.querySelector(".cssKod");
    cssKod.innerHTML=`background:linear-gradient(${gradient1},${gradient2});`
    gradientBox.style.background=`linear-gradient(${gradient1},${gradient2})`
})


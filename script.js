let senhaUmEl = document.querySelector("#senhaUm")
let senhaDoisEl = document.querySelector("#senhaDois")

const botaoCopiarUm = document.querySelector("#copyboardUm")
const botaoCopiarDois = document.querySelector("#copyboardDois")

const copiadoUm = document.querySelector("#copiado")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

function gerarSenhas(){
    senhaUmEl.textContent = ""
    senhaDoisEl.textContent = ""
    for (let i = 0 ; i < 9 ; i++) {
        let numeroUm = Math.floor(Math.random() * 91)
        senhaUmEl.textContent += characters[numeroUm]
        
        let numeroDois = Math.floor(Math.random() * 91)
        senhaDoisEl.textContent += characters[numeroDois]

    }    
}

botaoCopiarUm.addEventListener("click", () => {
    const texto = senhaUmEl.textContent; // Pega o texto da primeira senha
    navigator.clipboard.writeText(texto)
});

// Evento para o SEGUNDO botão de copiar
botaoCopiarDois.addEventListener("click", () => {
    const texto = senhaDoisEl.textContent; // Pega o texto da segunda senha
    navigator.clipboard.writeText(texto)
});
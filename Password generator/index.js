const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordOne = []
let passwordTwo = []

function generatePassword() {
    for (let i = 0; i < 16; i++) {
        let randomNumber = Math.floor ( Math.random() * characters.length )
        let randomCharacter = characters[randomNumber]
        passwordOne[i] = randomCharacter
    }
    
    let firstPassword = document.getElementById("first-password")
    firstPassword.textContent = passwordOne.join("")

    for (let j = 0; j < 16; j++) {
        let randomNumber = Math.floor ( Math.random() * characters.length )
        let randomCharacter = characters[randomNumber]
        passwordTwo[j] = randomCharacter
    }
    
    let secondPassword = document.getElementById("second-password")
    secondPassword.textContent = passwordTwo.join("")

}


generatePassword()
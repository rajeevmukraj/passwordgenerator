const characters =[ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let result1 = document.getElementById("r1")
let result2 = document.getElementById("r2")

function generate() {
  let password1 = "";
  let password2 = "";

  for (let i = 0; i < 15; i++) {
    const passindex1 = Math.floor(Math.random() * characters.length);
    const passindex2 = Math.floor(Math.random() * characters.length);
    
    password1 += characters[passindex1];
    password2 += characters[passindex2];
  }

  result1.textContent = password1;
  result2.textContent = password2;
}

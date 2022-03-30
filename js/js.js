// Default Length Value
let passwordLength = 8
// All Possible Characters 94 items
let charKeys = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M",1,2,3,4,5,6,7,8,9,0,"~","`","!","@","#","$","%","^","&","*","(",")","_","-","=","+","[","{","]","}","\\","|",";",":","'","\"",",","<",".",">","/","?",]
let copy1 = ""
let copy2 = ""
let copy3 = ""
let copy4 = ""
// Getting element from the dom
let lengthValue = document.getElementById("length") 
let messageError = document.getElementById("message-error")
let show = document.getElementById("show-lower")
let result1 = document.getElementById("result-1") 
let result2 = document.getElementById("result-2")
let result3 = document.getElementById("result-3")
let result4 = document.getElementById("result-4")
// hide the lower section first
show.style.display = "none"


function addLength() {
  // Increment the Length Value by 1
  if (passwordLength < 20) {
    passwordLength += 1
    lengthValue.textContent = passwordLength
  } else {
    messageError.textContent = "Maximum of 20 characters only!!"
  }
}
function minusLength() {
  // Decrement the Length Value by 1
  if (passwordLength > 5) {
    passwordLength -= 1
    lengthValue.textContent = passwordLength
  } else {
    messageError.textContent = "Minimum of 5 characters only!!!"
  }
}


function generatePassword() {
  // call the functions that generates
  result1.textContent = getResult1()
  result2.textContent = getResult2()
  result3.textContent = getResult3()
  result4.textContent = getResult4()
  // show the lower section
  show.style.display = "flex"
}

//  generates password
function getResult1() {
  let container = []
  // for loop to get random number base on length
  for (let i = 0; i < passwordLength; i++) {
    container.push(charKeys[Math.floor(Math.random() * 94) + 1])
  }
  let convert = container.join("")
  copy1 = convert
  return convert
}

function getResult2() {
  let container = []
  // for loop to get random number base on length
  for (let i = 0; i < passwordLength; i++) {
    container.push(charKeys[Math.floor(Math.random() * 94) + 1])
  }
  let convert = container.join("")
  copy2 = convert
  return convert
}

function getResult3() {
  let container = []
  // for loop to get random number base on length
  for (let i = 0; i < passwordLength; i++) {
    container.push(charKeys[Math.floor(Math.random() * 94) + 1])
  }
  let convert = container.join("")
  copy3 = convert
  return convert
}

function getResult4() {
  let container = []
  // for loop to get random number base on length
  for (let i = 0; i < passwordLength; i++) {
    container.push(charKeys[Math.floor(Math.random() * 94) + 1])
  }
  let convert = container.join("")
  copy4 = convert
  return convert
}


function copyClipboard(value) {
  // from google, copy the text with no input
  var tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

// 1 click copy to clipboard
result1.onclick = function() {
  copyClipboard(copy1);
}
result2.onclick = function() {
  copyClipboard(copy2);
}
result3.onclick = function() {
  copyClipboard(copy3);
}
result4.onclick = function() {
  copyClipboard(copy4);
}
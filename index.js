// 1. get the div "greeting"
const greeting = document.getElementById("greeting")


// 2. style it
greeting.style.textAlign = "center"
greeting.style.marginTop = "50px"
greeting.style.color = "red"
// 3.ask the user for their name
const username = window.prompt("what's your name?", "Sue")
// 4. display the name in the greeting div
greeting.innerHTML = "Hi, " + username + "!"
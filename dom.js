function sleep(ms) {
    var start = new Date().getTime(), expire = start + ms;
    while (new Date().getTime() < expire) { }
    return;
}

window.open("https://www.google.com")
localStorage.setItem('twenty', 20) // async? safari blocks popup, but i can still getItem
console.log(localStorage.getItem('twenty'))
console.log(window.location)
console.log(window.scrollX)
window.onscroll = () => console.log('hi')
// window.location.reload()

function paragraph() {
    let randomNumber = Math.floor(Math.random() * 100)
    element = document.createElement("p")
    element.textContent = "The random number is: " + randomNumber
    document.body.appendChild(element)
    
    console.log("the button is working")
    // let element = "<p>Click the buton below to begin</p>"
    // document.body.appendChild(element)
}

let button = document.querySelector("#start-practice")
button.onclick = paragraph
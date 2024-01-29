// function alertMe() {
//     alert("hi!")
// }

alertMe = () => alert("hi!")
let a = 3

let element = document.createElement("p")
let attribute = document.createAttribute("class")
attribute.value = "some-class"
element.appendChild(document.createTextNode("Context"))
element.setAttributeNode(attribute)
document.body.appendChild(element)
// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log('DOM is loaded!')
// })

let container = document.getElementById('container')
// console.log(container)

let h1 = document.createElement('h1')
// console.log(h1)

h1.innerText = 'Hogwarts'

container.appendChild(h1)

let h2 = document.createElement('h2')
h2.innerText = "Camille Brown"

let h3 = document.createElement('h3')
h3.innerText = "Gryffindor"

let h4 = document.createElement('h4')
h4.innerText = "Daisy"

h4.className = "owl"
// console.log(h4)

let wand = document.createElement('h4')
wand.innerText = "Birch Wand with Phoenix Feather Core"

container.appendChild(h2)
container.appendChild(h3)
container.appendChild(h4)
container.appendChild(wand)
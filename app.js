// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log('DOM is loaded!')
// })

let container = document.getElementById('container')
console.log(container)

let h1 = document.createElement('h1')
console.log(h1)

h1.innerText = 'Hogwarts'

container.appendChild(h1)

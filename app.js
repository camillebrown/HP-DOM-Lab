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

let ul = document.createElement('ul')
ul.setAttribute('storage','trunk')
console.log(ul)
container.appendChild(ul)

let listItems = ['butter beer', 'invisibility cloak', 'magic map', 'time turner', 'leash', 'Bertie Bott\'s Every Flavor [Jelly] Beans']

function addElements() {
    for (let i=0; i<listItems.length; i++){
        var li = document.createElement('li');
        li.innerText = listItems[i];
        if (listItems[i] === "invisibility cloak" || listItems[i] === "magic map" || listItems[i] === "time turner"){
            li.className = 'secret';
        } else if (listItems[i] === "leash") {
            li.className = "owl"
        }
        ul.appendChild(li)
    }
}

addElements();






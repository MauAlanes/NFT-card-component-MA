import { createCard } from "./Assets/CreateCard.js"
import { createButton } from "./Assets/CreateButton.js"
import { buttonDisabled } from "./Assets/ButtonDisabled.js"

const minCards = 1
const state = {
    quantity: minCards,
}
createButton("Agregar Carta", "addCard")
createButton("Remover Carta", "removeCard")
addCard.addEventListener('click', () => {
    createCard()
    state.quantity++
    buttonDisabled(state.quantity) /*dsabilta el boton*/
})

const removeCard = document.querySelector("#removeCard")
removeCard.addEventListener('click', () => {
    const parent = document.querySelector('#app')
    parent.removeChild(parent.lastElementChild)
    state.quantity--
    buttonDisabled(state.quantity)
})
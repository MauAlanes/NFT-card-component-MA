export function createButton (content, id){
    const button = document.createElement('button')
    button.textContent = content
    button.className = "button"
    button.id = id
    
    const mountButton = document.querySelector(".conte-butt")
    mountButton.appendChild(button) 
}
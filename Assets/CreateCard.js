export function createCard(){
    const component_card=document.createElement("div")
    component_card.className="component-card"
    
    const app=document.querySelector("#app")/*ESYTAMOS SELECCIONANDO AL BODY app*/
    app.appendChild(component_card)
    
    /* CREANDO LA 2DA */
    const card_top = document.createElement("div")
    card_top.className="card-top"
    component_card.appendChild(card_top)
    
    const img_1 = document.createElement("img")
    img_1.src="./imagenes/image-equilibrium.jpg"
    img_1.alt=".nft-card image"
    card_top.appendChild(img_1)
    
    const vista = document.createElement("div")
    vista.className="vista"
    card_top.appendChild(vista)
    
    const img_2 = document.createElement("img")
    img_2.src="./imagenes/icon-view.svg"
    vista.appendChild(img_2)
    
    /* 2DA CAJA --> TEXTO*/
    const card_texto=document.createElement("div")
    card_texto.className="card-texto"
    component_card.appendChild(card_texto)
    
    const p1 = document.createElement("p")
    p1.textContent="Equilibrium #3429"
    card_texto.appendChild(p1)
    
    const p2 = document.createElement("p")
    p2.textContent="Our Equilibrium collection promotes"
    card_texto.appendChild(p2)
    
    const p3 = document.createElement("p")
    p3.textContent="balance and calm."
    card_texto.appendChild(p3)
    
    const card_bottom_info = document.createElement("div")
    card_bottom_info.className="card-bottom-info"
    component_card.appendChild(card_bottom_info)
    
    const div1_CBI = document.createElement("div")
    card_bottom_info.appendChild(div1_CBI)
    
    const img1_CBI = document.createElement("img")
    img1_CBI.src="./imagenes/icon-ethereum.svg"
    div1_CBI.appendChild(img1_CBI)
    
    const span1_CBI = document.createElement("span")
    span1_CBI.textContent="0.041 ETH"
    div1_CBI.appendChild(span1_CBI)
    
    const div2_CBI = document.createElement("div")
    card_bottom_info.appendChild(div2_CBI)
    
    const img2_CBI = document.createElement("img")
    img2_CBI.src="./imagenes/icon-clock.svg"
    img2_CBI.alt="clock image"
    div2_CBI.appendChild(img2_CBI)
    
    const span2_CBI = document.createElement("span")
    span2_CBI.textContent="3 days left"
    div2_CBI.appendChild(span2_CBI)
    
    /* CAJA4*/
    const card_creation=document.createElement("div")
    card_creation.className="card-creation"
    component_card.appendChild(card_creation)
    
    const img1_CCr = document.createElement("img")
    img1_CCr.src="./imagenes/image-avatar.png"
    img1_CCr.alt="avatar image"
    card_creation.appendChild(img1_CCr)
    
    const div1_CCr = document.createElement("div")
    card_creation.appendChild(div1_CCr)
    
    const span1_CCr = document.createElement("span")
    span1_CCr.textContent="Creation of"
    div1_CCr.appendChild(span1_CCr)
    
    const div2_CCr = document.createElement("div")
    card_creation.appendChild(div2_CCr)
    
    const span2_CCr = document.createElement("span")
    span2_CCr.textContent="Jules Wyvern"
    div2_CCr.appendChild(span2_CCr)
}
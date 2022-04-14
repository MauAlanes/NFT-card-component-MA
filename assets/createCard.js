export function getCreateCard(){
    const nftCard = document.createElement("div")
    nftCard.className = "card"

    //Clase top dentro de card
    const topCard = document.createElement("div")
    topCard.className = "top"
    nftCard.appendChild(topCard)

    const app = document.querySelector("#app")
    app.appendChild(nftCard)

    // Clase imagen dentro de top
    const contimagen = document.createElement("div")
    contimagen.className = "imagen"
    topCard.appendChild(contimagen)
        // Hijos de la clase imagen
        const imagone = document.createElement("img")
        imagone.src = "./imagenes/image-equilibrium.jpg"
        imagone.alt = "Foto de cubo"
        contimagen.appendChild(imagone)
        const conticono = document.createElement("div")
        conticono.className = "imgicon"
        contimagen.appendChild(conticono)
        const imagtwo = document.createElement("img")
        imagtwo.src = "./imagenes/icon-view.svg"
        imagtwo.alt = "Icono de ojo"
        conticono.appendChild(imagtwo)

    // Clase texto dentro de top
    const textos = document.createElement("div")
    textos.className = "texto"
    topCard.appendChild(textos)
        // Hijos de la clase texto
        const titulo = document.createElement("a")
        titulo.textContent = "Equilibrium #3429"
        textos.appendChild(titulo)
        const parrafo = document.createElement("p")
        parrafo.textContent = "Our Equilibrium collection promotes balance and calm."
        textos.appendChild(parrafo)
        const precydias = document.createElement("div")
        precydias.className = "Tbottom"
        textos.appendChild(precydias)
        // Hijos de la clase Tbottom
        const precio = document.createElement("div")
        precio.className = "vistas"
        precydias.appendChild(precio)
            // Hijos de la clase vistas
            const imagthre = document.createElement("img")
            imagthre.src = "./imagenes/icon-ethereum.svg"
            imagthre.alt = "Icono de precio"
            precio.appendChild(imagthre)
            const parrapre = document.createElement("p")
            parrapre.textContent = "0.041 ETH"
            precio.appendChild(parrapre)
            const tiempo = document.createElement("div")
            tiempo.className = "time"
            precydias.appendChild(tiempo)
            // Hijos de la clase time
            const imagfor = document.createElement("img")
            imagfor.src = "./imagenes/icon-clock.svg"
            imagfor.alt = "Icono de tiempo"
            tiempo.appendChild(imagfor)
            const parrati = document.createElement("p")
            parrati.textContent = "3 days left"
            tiempo.appendChild(parrati)
            const lineadiv = document.createElement("hr")
            lineadiv.className = "linea"
            textos.appendChild(lineadiv)
            const creador = document.createElement("div")
            creador.className = "datos"
            textos.appendChild(creador)
        // Hijos de la clase datos
        const imagfive = document.createElement("img")
        imagfive.src = "./imagenes/image-avatar.png"
        imagfive.alt = "Foto de perfil"
        creador.appendChild(imagfive)
        const parradat = document.createElement("p")
        parradat.textContent = "Creation of "
        creador.appendChild(parradat)
            //Hijo de parrafo datos
            const person = document.createElement("a")
            person.textContent = "Jules Wyvern"
            parradat.appendChild(person)
}
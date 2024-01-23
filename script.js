let time = 6000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#todas-img img")
    max = images.length;

function nextImage() {
    
    images[currentImageIndex]
        .classList.remove("selected")
    
    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0
    
    images[currentImageIndex]
        .classList.add("selected")
}

function start( ) {
    setInterval(() => {
        console.log("funcao rodada")
            //funcao de troca
            nextImage()
    }, time)
}

    
window.addEventListener("load", start)

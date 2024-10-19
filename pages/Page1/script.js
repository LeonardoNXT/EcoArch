let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 4000);

function nextImage() {
    count++;
    if (count > 3) {  // Verifica o limite de 3, já que há 3 imagens
        count = 1;    // Se for maior que 3, volta para 1
    }
    document.getElementById("radio" + count).checked = true;
}
function openModal() {
    const modal = document.getElementById("janela-modal");
    modal.classList.add("abrir")

    modal.addEventListener("click", (event) => {
        if(event.target.id == "exit-btn" || event.target.id == "janela-modal"){
            modal.classList.remove("abrir")
        }
    })

}

function openModal2() {
    const modal = document.getElementById("janela-modal-1");
    modal.classList.add("abrir")

    modal.addEventListener("click", (event) => {
        if(event.target.id == "exit-btn-1" || event.target.id == "janela-modal-1"){
            modal.classList.remove("abrir")
        }
    })

}

function openModal3() { 
    const modal = document.getElementById("janela-modal-2");
    modal.classList.add("abrir")

    modal.addEventListener("click", (event) => {
        if(event.target.id == "exit-btn-1" || event.target.id == "janela-modal-2"){
            modal.classList.remove("abrir")
        }
    })

}
function openModal4() {
    const modal = document.getElementById("janela-modal-3");
    modal.classList.add("abrir")

    modal.addEventListener("click", (event) => {
        if(event.target.id == "exit-btn-1" || event.target.id == "janela-modal-3"){
            modal.classList.remove("abrir")
        }
    })

}
function openModal5() {
    const modal = document.getElementById("janela-modal-4");
    modal.classList.add("abrir")

    modal.addEventListener("click", (event) => {
        if(event.target.id == "exit-btn-1" || event.target.id == "janela-modal-4"){
            modal.classList.remove("abrir")
        }
    })

}
function openTheLine() {
    const slide1 = document.querySelector("#seventh-slide")
    const slide2 = document.querySelector("#eighth-slide")
    const slide3 = document.querySelector("#ninth-slide")
    slide1.style.display = "flex"
    slide1.style.animation = "modal1 0.5s"

    slide2.style.display = "grid"
    slide2.style.animation = "modal1 0.5s"

    slide3.style.borderTopRightRadius = "0px"
    slide3.style.borderTopLeftRadius = "0px"
    
}
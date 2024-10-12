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
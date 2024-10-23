let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 4000);

function nextImage() {
    count++;
    if (count > 3) { 
        count = 1;   
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
function openModal6() {
    const modal = document.getElementById("janela-modal-5");
    const video = document.querySelector("#video-da-janela");
    modal.classList.add("abrir")
    video.play();

    modal.addEventListener("click", (event) => {
        if(event.target.id == "exit-btn-1" || event.target.id == "janela-modal-5"){
            modal.classList.remove("abrir")
            video.pause();
            video.currentTime = 0;
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
function openSennaTower() {
    const slide4 = document.querySelector("#eleventh-slide")
    const slide5 = document.querySelector("#twelfth-slide")
    const slide6 = document.querySelector("#thirteenth-slide")
    const slide7 = document.querySelector("#fourthenth-slide")
    const slide8 = document.querySelector("#out-last-slide")
    const slide9 = document.querySelector("#after-last-slide")
    const slide10 = document.querySelector("#last-slide")
    const video = document.querySelector("#video-2")
    exitSennaTower()
    slide5.style.display = "flex"
    slide4.style.display = "block"
    slide7.style.display = "flex"
    slide6.style.display = "flex"
    slide8.style.display = "flex"
    slide9.style.display = "flex"
    video.style.animation = "modal1 0.5s"
    slide10.style.display = "none"

    
}
function exitSennaTower() {
    const img1 = document.querySelector("#img-senna-tower")
    const img2 = document.querySelector("#nineth-img")
    img1.style.opacity = "0"
    img2.style.opacity = "0"
}
document.addEventListener('DOMContentLoaded', function() {
    const video2 = document.getElementById('video-3');
    const video = document.getElementById('video-2');
    const video1 = document.getElementById('video');
    if (video) {
      video.muted = true; 
      video.play().catch(error => {
        console.error('Reprodução automática falhou:', error);
      });
    }
    if (video1) {
      video1.muted = true; 
      video1.play().catch(error => {
        console.error('Reprodução automática falhou:', error);
      });
    }
    if (video2) {
      video2.muted = true;
      video2.play().catch(error => {
        console.error('Reprodução automática falhou:', error);
      });
    }
  });
  const section = document.querySelector("#thirteenth-slide")

  let load = document.querySelector('.loading')
  window.addEventListener('load', async () => {

    load.classList.add('loadingfinish')
    setTimeout(() => {
        load.remove()
    },1000)
})
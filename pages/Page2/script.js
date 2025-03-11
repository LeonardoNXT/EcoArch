// Carregamento da página

document.addEventListener("DOMContentLoaded", () => {
    const load = document.querySelector(".loading");
    if (load) {
        load.classList.add("loadingfinish");
        setTimeout(() => load.remove(), 1000);
    }
});

// Animação dos elementos


const lastOne = document.querySelector('.hidden')

const myObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')
elements.forEach(el => myObserver.observe(el))






const myObserver1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const menu = document.querySelector('.menu');
        
        if (entry.isIntersecting == false) {
            menu.classList.add('active')
        }
        else{
            menu.classList.remove('active')
        }
    });
});

const elementoParaObservar = document.getElementById('texto');

if (elementoParaObservar) {
    myObserver1.observe(elementoParaObservar);
}








const myObserver2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const gradient2 = document.querySelector('.bottom-gradient')
        const body = document.querySelector('body')
        
        if (entry.isIntersecting) {
            gradient2.style.opacity = '1'
            body.style.backgroundColor = 'white'
        }
        else{
            gradient2.style.opacity = '0'
        }
    });
});

const elementoParaObservar1 = document.querySelector('.overlay');

if (elementoParaObservar1) {
    myObserver2.observe(elementoParaObservar1);
}
const myObserver3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const gradient2 = document.querySelector('#bottom-gradient-3')
        const body = document.querySelector('body')
        console.log(entry.isIntersecting);      
        if (entry.isIntersecting) {
            gradient2.style.opacity = '1'
            body.style.backgroundColor = 'white'
        }
        else{
            gradient2.style.opacity = '0'
        }
    });
});

const elementoParaObservar2 = document.querySelector('.overlay-config-2');

if (elementoParaObservar2) {
    myObserver3.observe(elementoParaObservar2);
}












// Abrir janelas
function openModal() {
    const janela1 = document.querySelector('#beggining-2')
    const janela2 = document.querySelector('#beggining-TEST')
    const janela3 = document.querySelector('#second')
    const janela4 = document.querySelector('#third')
    const janela5 = document.querySelector('#fourth')
    const janela6 = document.querySelector('#fifth')
    const janela7 = document.querySelector('#sixth')
    const janela8 = document.querySelector('#seventh')
    const janela9 = document.querySelector('#seventh-2')
    const targetDiv = document.querySelector('#part-1');



    janela1.style.display = 'flex'
    janela1.style.opacity = '1'
    janela1.style.animation = 'opacity1 1s ease-in-out'

    janela2.style.display = 'flex'
    janela2.style.opacity = '1'
    janela3.style.display = 'flex'
    janela3.style.opacity = '1'
    janela4.style.display = 'flex'
    janela4.style.opacity = '1'
    janela5.style.display = 'flex'
    janela5.style.opacity = '1'
    janela6.style.display = 'flex'
    janela6.style.opacity = '1'
    janela7.style.display = 'flex'
    janela7.style.opacity = '1'
    janela8.style.display = 'flex'
    janela8.style.opacity = '1'
    janela9.style.display = 'flex'
    janela9.style.opacity = '1'
    

    

    if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }

    const myObserver3 = new IntersectionObserver(entries => {
        console.log(entries);
        entries.forEach(entry => {
            const gradient2 = document.querySelector('#bottom-gradient-2')
            const gradient3 = document.querySelector('#top-gradient-2')
            const body = document.querySelector('body')
            
            if (entry.isIntersecting) {
                gradient2.style.opacity = '1'
                gradient3.style.opacity = '1'
                body.style.backgroundColor = 'black'
            }
            else{
                gradient2.style.opacity = '0'
                gradient3.style.opacity = '0'
            }
        });
    });
    
    const elementoParaObservar2 = document.querySelector('#overlay-config-2');
    
    if (elementoParaObservar2) {
        myObserver3.observe(elementoParaObservar2);
    }
    const myObserver4 = new IntersectionObserver(entries => {
        console.log(entries);
        entries.forEach(entry => {
            const body = document.querySelector('body')
            
            if (entry.isIntersecting) {
                body.style.backgroundColor = '#000000'
            }
        });
    });
    
    const elementoParaObservar3 = document.querySelector('#part-2');
    
    if (elementoParaObservar3) {
        myObserver4.observe(elementoParaObservar3);
    }

}

function openModal1() {
    const janela1 = document.querySelector('#tenth')
    const janela2 = document.querySelector('#eleventh')
    const janela3 = document.querySelector('#twelfth')
    const targetDiv = document.querySelector('#part-1-2');
    const janela4 = document.querySelector('#thirteenth')
    const janela5 = document.querySelector('#fourteenth')
    const janela6 = document.querySelector('#fifthteen')
    const janela7 = document.querySelector('#sixtheen')
    const janela8 = document.querySelector('#seventeen')
    const janela9 = document.querySelector('#nineteen')
    const janela10 = document.querySelector('#nineteen-2')
    const video = document.querySelector('#video-7')
    const video1 = document.querySelector('#video-3')
    const line = document.querySelector('.marquee')
    const part = document.querySelector('#part-1-2')

    const janela11 = document.querySelector('#nineteen')

    janela1.style.display = 'flex'
    part.style.animation = 'opacity 1s ease-in-out'
    janela1.style.opacity = '1'
    janela1.style.animation = 'opacity1 1s ease-in-out'

    janela2.style.display = 'flex'
    janela2.style.opacity = '1'

    janela3.style.display = 'flex'
    janela3.style.opacity = '1'

    janela4.style.display = 'flex'
    janela4.style.opacity = '1'

    janela5.style.display = 'flex'
    janela5.style.opacity = '1'

    janela6.style.display = 'flex'
    janela6.style.opacity = '1'

    janela7.style.display = 'flex'
    janela7.style.opacity = '1'

    janela8.style.display = 'flex'
    janela8.style.opacity = '1'

    janela9.style.display = 'none'
    janela9.style.opacity = '1'

    janela10.style.display = 'flex'
    janela10.style.opacity = '1'

    janela11.remove()

    line.style.display = 'block'

    video.src="./css/video/[4K] Palm Tree Loop - Glowing Tubes - SICK Visuals.mp4"
    




    const myObserver4 = new IntersectionObserver(entries => {
        console.log(entries);
        entries.forEach(entry => {
            const gradient2 = document.querySelector('#bottom-gradient-4')
            const gradient3 = document.querySelector('#top-gradient-3')
            
            if (entry.isIntersecting) {
                gradient2.style.opacity = '1'
                gradient3.style.opacity = '1'
            }
            else{
                gradient2.style.opacity = '0'
                gradient3.style.opacity = '0'
            }
        });
    });
    
    const elementoParaObservar3 = document.querySelector('.overlay-config-3');
    
    if (elementoParaObservar3) {
        myObserver4.observe(elementoParaObservar3);
    }
    
    
    const myObserver5 = new IntersectionObserver(entries => {
        console.log(entries);
        entries.forEach(entry => {
            const gradient2 = document.querySelector('#bottom-gradient-3')
            
            if (entry.isIntersecting) {
                gradient2.style.opacity = '0'
            }
            else{
            }
        });
    });
    
    const elementoParaObservar4 = document.querySelector('#part-1-2');
    
    if (elementoParaObservar4) {
        myObserver5.observe(elementoParaObservar4);
    }

    if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
}

document.querySelectorAll(".accordion-btn").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
function openModal2() {
    const janela1 = document.querySelector('#twenty')
    const janela2 = document.querySelector('#twenty-one')
    const targetDiv = document.querySelector('#twenty');
    const video = document.querySelector('#video-7')

    janela1.style.display = 'flex'
    janela1.style.animation = 'opacity 1s ease-in-out'
    janela1.style.opacity = '1'
    janela2.style.display = 'flex'
    janela2.style.opacity = '1'

    video.style.opacity = '1'

    if(targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
}


function clickBol1(){
    const window1 = document.querySelector(".windows-1")
    window1.style.animation = "opacity2 0.5s ease-in-out"
    setTimeout(() => {
        window1.classList.remove("activeW")  
    },500)

    
}

function openWind1() {
    const window1 = document.querySelector(".windows-1")
    window1.style.animation = ""
    window1.classList.add("activeW")
    window1.style.opacity = "1"
}
function clickBol2(){
    const window1 = document.querySelector(".windows-2")
    window1.style.animation = "opacity2 0.5s ease-in-out"
    setTimeout(() => {
        window1.classList.remove("activeW")  
    },500)

    
}

function openWind2() {
    const window1 = document.querySelector(".windows-2")
    window1.style.animation = ""
    window1.classList.add("activeW")
    window1.style.opacity = "1"
}
function clickBol3(){
    const window1 = document.querySelector(".windows-3")
    window1.style.animation = "opacity2 0.5s ease-in-out"
    setTimeout(() => {
        window1.classList.remove("activeW")  
    },500)

    
}

function openWind3() {
    const window1 = document.querySelector(".windows-3")
    window1.style.animation = ""
    window1.classList.add("activeW")
    window1.style.opacity = "1"
}

function openWind4() {
    const window1 = document.querySelector(".windows-4")
    window1.style.animation = ""
    window1.classList.add("activeW")
    window1.style.opacity = "1"
}

function clickBol4(){
    const window1 = document.querySelector(".windows-4")
    window1.style.animation = "opacity2 0.5s ease-in-out"
    setTimeout(() => {
        window1.classList.remove("activeW")  
    },500)

    
}

















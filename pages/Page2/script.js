// Carregamento da página

let load = document.querySelector('.loading')
window.addEventListener('load', async () => {

  load.classList.add('loadingfinish')
  setTimeout(() => {
      load.remove()
  },1000)
})



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
        const menu = document.querySelector('.menu'); // Seleciona o elemento com a classe 'menu'
        
        if (entry.isIntersecting == false) {
            menu.classList.add('active')
        }
        else{
            menu.classList.remove('active')
        }
    });
});

// Seleciona o elemento pelo `id` que você quer observar
const elementoParaObservar = document.getElementById('texto');

// Verifica se o elemento existe e então começa a observar
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

// Seleciona o elemento pelo `id` que você quer observar
const elementoParaObservar1 = document.querySelector('.overlay');

// Verifica se o elemento existe e então começa a observar
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

// Seleciona o elemento pelo `id` que você quer observar
const elementoParaObservar2 = document.querySelector('.overlay-config-2');

// Verifica se o elemento existe e então começa a observar
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
    janela1.style.animation = 'opacity 1s ease-in-out'

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
    
    // Seleciona o elemento pelo `id` que você quer observar
    const elementoParaObservar2 = document.querySelector('#overlay-config-2');
    
    // Verifica se o elemento existe e então começa a observar
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
    
    // Seleciona o elemento pelo `id` que você quer observar
    const elementoParaObservar3 = document.querySelector('#part-2');
    
    // Verifica se o elemento existe e então começa a observar
    if (elementoParaObservar3) {
        myObserver4.observe(elementoParaObservar3);
    }

}
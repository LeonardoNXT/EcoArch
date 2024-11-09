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
    console.log(entries);
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



// Abrir janelas
function openModal() {
    const janela1 = document.querySelector('#beggining-2')
    const janela2 = document.querySelector('#beggining-TEST')
    const janela3 = document.querySelector('#second')
    const janela4 = document.querySelector('#third')
    const targetDiv = document.querySelector('#part-1');

    janela1.style.display = 'flex'
    janela1.style.opacity = '1'
    janela2.style.display = 'flex'
    janela2.style.opacity = '1'
    janela3.style.display = 'flex'
    janela3.style.opacity = '1'
    janela4.style.display = 'flex'
    janela4.style.opacity = '1'

    if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
}
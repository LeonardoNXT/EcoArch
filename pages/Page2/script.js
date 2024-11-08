let load = document.querySelector('.loading')
window.addEventListener('load', async () => {

  load.classList.add('loadingfinish')
  setTimeout(() => {
      load.remove()
  },1000)
})

const lastOne = document.querySelector('.hidden')

const myObserver = new IntersectionObserver(entries => {
    console.log(entries)
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

function openModal() {
    const janela1 = document.querySelector('#beggining-2')
    const janela2 = document.querySelector('#beggining-TEST')

    janela1.style.display = 'flex'
    janela1.style.opacity = '1'
    janela2.style.display = 'flex'
    janela2.style.opacity = '1'
}
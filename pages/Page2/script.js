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
let load = document.querySelector('.loading')
window.addEventListener('load', async () => {

    load.classList.add('loadingfinish')
    setTimeout(() => {
        load.remove()
    },1000)
})
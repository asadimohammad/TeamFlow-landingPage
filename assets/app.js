const trigger = document.querySelector('.header__trigger') ,
      preloader = document.querySelector('#js-preloader')

trigger.addEventListener('click' , () => {
    trigger.classList.toggle('on')
})

window.addEventListener('DOMContentLoaded' , () => {
    setTimeout(() => {
        preloader.className = 'loaded'
    }, 2000);
})

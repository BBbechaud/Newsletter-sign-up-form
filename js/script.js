const form = document.querySelector('form')
const main_container = document.querySelector('.main-container')
const subscribed_container = document.querySelector('.subscribed-container')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    main_container.classList.add('hide')
    subscribed_container.classList.remove('hide')
})


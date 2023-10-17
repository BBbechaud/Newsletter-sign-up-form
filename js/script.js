const form = document.querySelector('form')
const main_container = document.querySelector('.main-container')
const subscribed_container = document.querySelector('.subscribed-container')
const dismiss = document.querySelector('.dismiss')
const input = document.querySelector('input')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    main_container.classList.add('hide')
    subscribed_container.classList.remove('hide')

    document.querySelector('.email-span').innerHTML = input.value
})



dismiss.addEventListener('click', (e) => {
    e.preventDefault()
    main_container.classList.toggle('hide')
    subscribed_container.classList.toggle('hide')
    
    input.value = ''
})


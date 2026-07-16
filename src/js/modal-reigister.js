export let savedWord = '' 
let onWordChange = null

function setOnWordChange(callback) {
    onWordChange = callback
}

const refs = {
    closeModalButton: document.querySelector('.register-modal-close-button'),
    modal: document.querySelector('[data-modal]'),
    input: document.querySelector('.js-input'),
    form: document.querySelector('.js-register-modal-form'),
    submitButton: document.querySelector('.js-register-modal-form-button')
}

function toggelModal() { 
    refs.modal.classList.toggle('is-hidden')
}

function onBackdropClick(event) {
    if (
        event.target === refs.modal
    ) {
        toggelModal()
    }
}

function onEscPress(event) {
    if (
        event.code === 'Escape'&& !refs.modal.classList.contains('is-hidden')
    ) {
        toggelModal()
    }
}

function onInputChange(event) {
    event.preventDefault()
    savedWord = refs.input.value
    if (onWordChange) {
        onWordChange(savedWord)
    }
    toggelModal()
}

(() => {
    refs.closeModalButton.addEventListener('click', toggelModal)
    refs.modal.addEventListener('click', onBackdropClick)
    document.addEventListener('keydown', onEscPress)
    refs.form.addEventListener('submit', onInputChange)
})()
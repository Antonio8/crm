// DOM elements
const elements = {
    form: document.querySelector('#form'),
    name: document.querySelector('#name'),
    phone: document.querySelector('#phone'),
    email: document.querySelector('#email'),
    product: document.querySelector('#product'),
}

function getFormInput (){
    return new FormData(elements.form)
}

function clearForm (){
    elements.form.reset();
}

export {elements, getFormInput, clearForm }
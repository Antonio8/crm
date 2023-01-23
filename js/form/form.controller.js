import * as view from './form.view.js'
import * as model from './../model.js'

function init() {
    setupEventListeners()
}

function setupEventListeners (){
    view.elements.form.addEventListener('submit', formSubmitHandler)
}

function formSubmitHandler (e){
    e.preventDefault()
    const formData = view.getFormInput()
    model.addRequest(formData)
    view.clearForm();
    renderTestData();
}

init()
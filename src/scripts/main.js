import { display } from './initialpage.js';
import '../styles/main.css';
import { formDisplay } from './form.js';


display.create();

window.addEventListener('load', function() {
    const bodAdd = document.querySelector('div#bodAdd')
    bodAdd.addEventListener('click', formDisplay.create)
})

window.addEventListener('load', function() {
    const form = document.querySelector('div#form');
    form.addEventListener('submit', formDisplay.remove)
})
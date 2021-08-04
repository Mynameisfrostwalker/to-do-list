import { formDisplay } from './form.js';

const addEvent = (
    function() {
        const windowListener = () => {
            window.addEventListener('load', function() {
                const bodAdd = document.querySelector('div#bodAdd');
                bodAdd.children[0].addEventListener('click', formDisplay.create);
            })
        }
        const submitListener = () => {
            const submit = document.querySelector('#submit');
            submit.addEventListener('click', formDisplay.remove);
        }
        return { windowListener, submitListener };
    }
)()

export { addEvent }
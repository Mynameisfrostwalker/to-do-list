import { formDisplay } from './form.js';
import { collectInputs } from './formInputs.js'
import { renderTasks } from './todolistDisplay.js'

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

        const preventEnter = () => {
            const title = document.querySelector('#title');
            title.addEventListener('keypress', function(e) {
                if (e.keyCode === 13) {
                    e.preventDefault();
                }
            })
        }

        const editor = (event) => {
            formDisplay.create();
            let obj = collectInputs.retieveTasks(event);
            formDisplay.editForm(obj)
            collectInputs.deleteTasks(obj.get.Id())
        }

        const editButtonListener = () => {
            const editButton = document.querySelectorAll('.editButton');
            editButton.forEach(button => {
                button.addEventListener('click', editor)
            });
        }

        const deleter = (event) => {
            collectInputs.deleteTasks(event.currentTarget.parentNode.parentNode.getAttribute('id'));
            renderTasks.render()
        }

        const deleteButtonListener = () => {
            const deleteButton = document.querySelectorAll('.deleteButton');
            deleteButton.forEach(button => {
                console.log('nb')
                button.addEventListener('click', deleter)
            })
        }

        return { windowListener, submitListener, preventEnter, editButtonListener, deleteButtonListener };
    }
)()

export { addEvent }
import { formDisplay, projectInput } from './DomDisplay.js';
import { collectInputs } from './formInputs.js';
import { renderTasks } from './todolistDisplay.js';
import { tabSwitchLogic } from './tab-switch.js';

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
                button.addEventListener('click', deleter)
            })
        }

        const completer = (event) => {
            console.log('b')
            collectInputs.changeStatus(event);
            renderTasks.render()
        }

        const completeButtonListener = () => {
            const sliderDiv = document.querySelectorAll('.sliderDiv');
            sliderDiv.forEach(button => {
                console.log('a');
                button.addEventListener('click', completer, {
                    capture: false,
                    once: true,
                })
            })
        }

        const projectsButtonListener = () => {
            const projectsButton = document.querySelector('#projects');
            projectsButton.addEventListener('click', projectInput.inputCreate)
        }

        const projectsInputListener = () => {
            const projectsInput = document.querySelector('#projectInput');
            projectsInput.addEventListener('keypress', function(e) {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    projectInput.projectDisplay()
                    projectInput.projectRemove()
                }
            })
        }

        const clickableListener = () => {
            const clickable = document.querySelector('.clickable');
            clickable.forEach(elem => {
                elem.addEventListener('click', tabSwitchLogic.changeDisplay)
            })
        }

        return { windowListener, submitListener, preventEnter, editButtonListener, deleteButtonListener, projectsButtonListener, projectsInputListener, completeButtonListener, clickableListener };
    }
)()

export { addEvent }
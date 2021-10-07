import { formDisplay, projectInput } from './DomDisplay';
import { collectInputs } from './formInputs';
import { renderTasks } from './todolistDisplay';
import { tabSwitchLogic } from './tab-switch';
import { googleButtonSignIn, getData } from "./fireBase";
import { display } from './initialpage.js';
import { storage } from './localStorage.js';
import { globalStorage } from './signInPage';

const addEvent = (
    function() {
        const windowListener = () => {
                const bodAdd = document.querySelector('#bodAdd');
                bodAdd.addEventListener('click', formDisplay.create);
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
            let obj = collectInputs.retrieveTasks(event);
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
            collectInputs.changeStatus(event);
            renderTasks.render()
        }

        const completeButtonListener = () => {
            const sliderDiv = document.querySelectorAll('.sliderDiv');
            sliderDiv.forEach(button => {
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
                    projectInput.projectRemove(e)
                    projectListListener();
                }
            })
        }

        const clickableListener = () => {
            const clickable = document.querySelectorAll('.clickable');
            clickable.forEach(elem => {
                elem.addEventListener('click', tabSwitchLogic.changeDisplay)
            })
        }

        const projectListListener = () => {
            const projectList = document.querySelectorAll('.projectList');
            projectList.forEach(elem => {
                elem.addEventListener('click', tabSwitchLogic.changeDisplay)
            })
        }

        const removeButtonListener = () => {
            const removeButtons = document.querySelectorAll('.removeButton');
            removeButtons.forEach(elem => {
                elem.addEventListener('click', projectInput.projectRemove)
            })
        }

        const intemediateSignIn = async () => {
            const { displayName, photoURL } = await googleButtonSignIn()
            const header = document.querySelector("#header");
            const infoDisplay = document.createElement('div');
            infoDisplay.id = "infoDisplay"
            const display = document.createElement('img');
            display.id = "display";
            display.src = photoURL;
            const name = document.createElement('p');
            name.id = "name";
            name.textContent = displayName;
            infoDisplay.appendChild(display);
            infoDisplay.appendChild(name);
            header.appendChild(infoDisplay);
            await getData()
        }

        const googleButtonListener = () => {
            const containerDiv = document.querySelector("#googleButton");
            containerDiv.addEventListener('click', intemediateSignIn)
        }

        const localStorageSignIn = () => {
            globalStorage.set("local");
            const containerDiv = document.querySelector("#signIn");
            containerDiv.remove()
            display.create()
            windowListener()
            clickableListener()
            projectsButtonListener()
            storage()
        }

        const localStorageButtonListener = () => {
            const containerDiv = document.querySelector("#localStorageButton");
            containerDiv.addEventListener('click', localStorageSignIn)
        }

        return { 
                windowListener, 
                submitListener, 
                preventEnter, 
                editButtonListener, 
                deleteButtonListener,
                projectsButtonListener,
                projectsInputListener,
                completeButtonListener,
                clickableListener,
                projectListListener,
                removeButtonListener,
                googleButtonListener,
                localStorageButtonListener,
            };
    }
)()

export { addEvent }
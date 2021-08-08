import { renderTasks } from './todolistDisplay.js'
import { collectInputs, sortTasks } from './formInputs.js';
import { dates } from './dateProject.js';
import _ from 'lodash';


const tabSwitchLogic = (
    function() {
        const changeDisplay = (event) => {
            const headText = document.querySelector('#bodHead').children[0];
            const tasksDisplay = document.querySelector('#bodTasks');
            const bodAdd = document.querySelector('#bodAdd');
            const clickable = document.querySelectorAll('.clickable');
            const clickable2 = document.querySelectorAll('.projectList');
            for (let i = 0; i < clickable.length; i++) {
                if (clickable[i].classList.contains('active')) {
                    clickable[i].classList.remove('active');
                }
            }
            for (let i = 0; i < clickable2.length; i++) {
                if (clickable2[i].classList.contains('active')) {
                    clickable2[i].classList.remove('active');
                }
            }
            event.currentTarget.classList.add('active');
            for (let i = 0; i < tasksDisplay.children.length; i++) {
                if (tasksDiv.children[i]) {
                    tasksDiv.children[i].remove();
                }
            }
            if (event.currentTarget.children[1]) {
                headText.textContent = event.currentTarget.children[1].textContent;
            } else {
                headText.textContent = event.currentTarget.textContent;
            }

            if (event.currentTarget.id === 'Today' || event.currentTarget.id === 'This Week') {
                bodAdd.classList.add('noDisplay');
                dates.create();
                dates.clear();
            } else {
                if (bodAdd.classList.contains('noDisplay')) {
                    bodAdd.classList.remove('noDisplay');
                }
                sortTasks.createNewProject(event.target.textContent);
            }

            renderTasks.render();

            if (event.currentTarget.id === 'Today' || event.currentTarget.id === 'This Week') {
                const sliderDiv = document.querySelectorAll('.sliderDiv');
                const buttonsDiv = document.querySelectorAll('.buttonsDiv');
                sliderDiv.forEach(elem => elem.remove());
                buttonsDiv.forEach(elem => elem.remove());
            }

            console.log(sortTasks.projectsHolder);
            _.pullAll(collectInputs.todolist, [...collectInputs.todolist])
        }
        return { changeDisplay }
    }
)()

export { tabSwitchLogic };
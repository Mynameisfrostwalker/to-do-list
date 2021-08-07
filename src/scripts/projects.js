import { sortTasks } from './formInputs.js';

const projectsFunction = (
    function() {
        const projectsHolder = {};
        const addProject = () => {
            const projectName = document.querySelector('#bodHead').children[0].textContent;
            projectsHolder[projectName] = sortTasks.createSortedArr();
        }
        return { projectsHolder, addProject }
    }
)()
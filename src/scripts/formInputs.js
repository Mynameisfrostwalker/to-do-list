import { tasks } from './todo.js'
import { isAfter, isBefore, isEqual } from 'date-fns'

const collectInputs = (
    function() {
        let todolist = [];

        const createTasks = () => {
            const title = document.querySelector('#title');
            const description = document.querySelector('#description');
            const dueDate = document.querySelector('#dueDate');
            const priority = document.querySelector('#select');
            if (title.value === '' || dueDate.value === '', priority.value === '') {
                alert('No input must not be left blank');
                return
            }
            todolist.push(tasks(title.value, description.value, dueDate.value, priority.value, "incomplete", todolist.length.toString()));
            sortTasks.addProject();
        }

        const retrieveTasks = (e) => {
            let ident = e.currentTarget.parentNode.parentNode.getAttribute('id');
            for (let i = 0; i < todolist.length; i++) {
                if (ident === todolist[i].get.Id()) {
                    return todolist[i];
                }
            }
        }

        const deleteTasks = (value) => {
            for (let i = 0; i < todolist.length; i++) {
                if (value === todolist[i].get.Id()) {
                    todolist.splice(i, 1);
                }
            }
            sortTasks.addProject();
        }

        const changeStatus = (e) => {
            let ident = e.currentTarget.parentNode.getAttribute('id');
            for (let i = 0; i < todolist.length; i++) {
                if (ident === todolist[i].get.Id()) {
                    let oldStatus = todolist[i].get.Status();
                    if (oldStatus === 'incomplete') {
                        todolist[i].set.Status('complete')
                    } else if (oldStatus === 'complete') {
                        todolist[i].set.Status('incomplete')
                    }
                }
            }
            sortTasks.addProject();
        }

        return { createTasks, todolist, retrieveTasks, deleteTasks, changeStatus };
    }
)()

const sortTasks = (
    function() {
        const projectsHolder = {};

        const addProject = () => {
            const projectName = document.querySelector('#bodHead').children[0].textContent;
            if (collectInputs.todolist.length !== 0) {
                if (projectsHolder[projectName]) {
                    projectsHolder[projectName] = [...projectsHolder[projectName], ...collectInputs.todolist];
                } else {
                    projectsHolder[projectName] = [...collectInputs.todolist];
                }
            }
        }

        const createNewProject = (pName) => {
            if (!projectsHolder[pName]) {
                projectsHolder[pName] = [];
            }
        }

        const createSortedArr = () => {
            console.log(projectsHolder)
            const Name = document.querySelector('#bodHead').children[0].textContent;
            if (projectsHolder[Name].length > 1) {
                const sorted = projectsHolder[Name].sort(function(a, b) {
                    if (isAfter(new Date(a.get.DueDate()), new Date(b.get.DueDate()))) {
                        return 1;
                    }
                    if (isBefore(new Date(a.get.DueDate()), new Date(b.get.DueDate()))) {
                        return -1;
                    }
                    if (isEqual(new Date(a.get.DueDate()), new Date(b.get.DueDate()))) {
                        return 0
                    }
                });
                return sorted;
            } else {
                return projectsHolder[Name]
            }
        }
        return { addProject, createSortedArr, createNewProject, projectsHolder };
    }
)()

export { collectInputs, sortTasks }
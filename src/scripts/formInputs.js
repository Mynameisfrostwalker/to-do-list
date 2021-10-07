import { tasks } from './todo.js';
import { isAfter, isBefore, isEqual } from 'date-fns';
import _ from 'lodash';
import JSONfn from './Json-function.js'
import { obtainValues } from './localStorage.js'
import { globalStorage } from './signInPage'
import { uploadTask, deleteTask, updateStatus, removeProject }  from "./fireBase"

const collectInputs = (
    function() {
        let todolist = [];
        let counter = [];

        const createTasks = () => {
            counter.push(null);
            const title = document.querySelector('#title');
            const description = document.querySelector('#description');
            const dueDate = document.querySelector('#dueDate');
            const priority = document.querySelector('#select');
            if (title.value === '' || dueDate.value === '', priority.value === '') {
                alert('No input must not be left blank');
                return
            }
            const currentTask = tasks(title.value, description.value, dueDate.value, priority.value, "incomplete", counter.length.toString());
            todolist.push(currentTask);
            sortTasks.addProject();
            globalStorage.value === "local" ? localStorage.setItem('todolist', JSONfn.stringify(obtainValues(sortTasks.projectsHolder))) : uploadTask(currentTask);
        }

        const retrieveTasks = (e) => {
            const projectName = document.querySelector('#bodHead').children[0].textContent;
            let ident = e.currentTarget.parentNode.parentNode.getAttribute('id');
            for (let i = 0; i < sortTasks.projectsHolder[projectName].length; i++) {
                if (ident === sortTasks.projectsHolder[projectName][i].get.Id()) {
                    _.pullAll(todolist, [...todolist])
                    todolist.push(...sortTasks.projectsHolder[projectName])
                    return sortTasks.projectsHolder[projectName][i];
                }
            }
        }

        const deleteTasks = (value) => {
            const projectName = document.querySelector('#bodHead').children[0].textContent;
            for (let i = 0; i < sortTasks.projectsHolder[projectName].length; i++) {
                if (value === sortTasks.projectsHolder[projectName][i].get.Id()) {
                    const removed = sortTasks.projectsHolder[projectName].splice(i, 1);
                    _.pullAll(todolist, [...todolist]);
                    todolist.push(...sortTasks.projectsHolder[projectName]);
                    globalStorage.value === "local" ? localStorage.setItem('todolist', JSONfn.stringify(obtainValues(sortTasks.projectsHolder))) :  deleteTask(removed[0]);
                }
            }
        }

        const changeStatus = (e) => {
            const projectName = document.querySelector('#bodHead').children[0].textContent;
            let ident = e.currentTarget.parentNode.getAttribute('id');
            for (let i = 0; i < sortTasks.projectsHolder[projectName].length; i++) {
                if (ident === sortTasks.projectsHolder[projectName][i].get.Id()) {
                    let oldStatus = sortTasks.projectsHolder[projectName][i].get.Status();
                    if (oldStatus === 'incomplete') {
                        sortTasks.projectsHolder[projectName][i].set.Status('complete')
                        _.pullAll(todolist, [...todolist])
                        todolist.push(...sortTasks.projectsHolder[projectName])
                        globalStorage.value === "local" ? localStorage.setItem('todolist', JSONfn.stringify(obtainValues(sortTasks.projectsHolder))) : updateStatus(sortTasks.projectsHolder[projectName][i]);

                    } else if (oldStatus === 'complete') {
                        sortTasks.projectsHolder[projectName][i].set.Status('incomplete')
                        _.pullAll(todolist, [...todolist])
                        todolist.push(...sortTasks.projectsHolder[projectName])
                        globalStorage.value === "local" ? localStorage.setItem('todolist', JSONfn.stringify(obtainValues(sortTasks.projectsHolder))) : updateStatus(sortTasks.projectsHolder[projectName][i]);

                    }
                }
            }
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
                    projectsHolder[projectName] = [..._.differenceWith([...projectsHolder[projectName]], [...collectInputs.todolist], _.isEqual), ...collectInputs.todolist];
                } else {
                    projectsHolder[projectName] = [...collectInputs.todolist];
                }
            }
        }

        const projectChange = () => {
            const projectName = document.querySelector('#bodHead').children[0].textContent;
            projectsHolder[projectName] = [...collectInputs.todolist];
        }

        const createNewProject = (pName) => {
            if (!projectsHolder[pName]) {
                projectsHolder[pName] = [];
            }
        }

        const deleteProject = (name) => {
            delete projectsHolder[name];
            removeProject(name);
        }

        const createSortedArr = () => {
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
        return { addProject, createSortedArr, createNewProject, projectsHolder, projectChange, deleteProject };
    }
)()

export { collectInputs, sortTasks }
import { tasks } from './todo.js'
import { isAfter, isBefore, isEqual } from 'date-fns'

const collectInputs = (
    function() {
        const todolist = [];
        const createTasks = () => {
            const title = document.querySelector('#title');
            const description = document.querySelector('#description');
            const dueDate = document.querySelector('#dueDate');
            const priority = document.querySelector('#select');
            todolist.push(tasks(title.value, description.value, dueDate.value, priority.value, "incomplete", todolist.length.toString()));
        }
        const retieveTasks = (e) => {
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
        }

        return { createTasks, todolist, retieveTasks, deleteTasks, changeStatus };
    }
)()

const sortTasks = (
    function() {
        const createSortedArr = () => {
            if (collectInputs.todolist.length > 1) {
                const sorted = collectInputs.todolist.sort(function(a, b) {
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
            } else { return collectInputs.todolist }
        }
        return { createSortedArr };
    }
)()

export { collectInputs, sortTasks }
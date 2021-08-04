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
            todolist.push(tasks(title.value, description.value, dueDate.value, priority.value, "incomplete"));
        }
        return { createTasks, todolist };
    }
)()

const sortTasks = (
    function() {
        const createSortedArr = () => {
            if (collectInputs.todolist.length > 1) {
                const sorted = collectInputs.todolist.sort(function(a, b) {
                    if (isAfter(new Date(a.get.DueDate), new Date(b.get.DueDate))) {
                        return 1;
                    }
                    if (isBefore(new Date(a.get.DueDate), new Date(b.get.DueDate))) {
                        return -1;
                    }
                    if (isEqual(new Date(a.get.DueDate, new Date(b.get.DueDate)))) {
                        return 0
                    }
                });
                return sorted;
            } else { return todolist }
        }
        return { createSortedArr }
    }
)()

export { collectInputs }
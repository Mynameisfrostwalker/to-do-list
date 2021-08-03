import { tasks } from './todo.js'

const collectInputs = (
    function() {
        let todolist = [];
        const createTasks = () => {
            const title = document.querySelector('#title');
            const description = document.querySelector('#description');
            const dueDate = document.querySelector('#dueDate');
            const priority = document.querySelector('#select');
            todolist.push(tasks(title.value, description.value, dueDate.value, priority.value, "incomplete"));
            console.log(todolist[0].get.Title());
        }
        return { createTasks, todolist };
    }
)()

export { collectInputs }
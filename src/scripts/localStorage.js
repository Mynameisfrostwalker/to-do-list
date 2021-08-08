import { sortTasks } from './formInputs.js';
import { renderTasks } from './todolistDisplay.js'
import _ from 'lodash'
import JSONfn from './Json-function.js'
import { tasks } from './todo.js';

const storage = () => {
    if (JSON.parse(localStorage.getItem('todolist'))) {
        let valuesObj = JSONfn.parse(localStorage.getItem('todolist'));
        let newObj = {};
        for (let key in valuesObj) {
            let arr = [];
            for (let i = 0; i < valuesObj[key].length; i++) {
                arr.push(tasks(valuesObj[key][i].Title, valuesObj[key][i].Description, valuesObj[key][i].DueDate, valuesObj[key][i].Priority, valuesObj[key][i].Status, valuesObj[key][i].Id))
            }
            newObj[key] = arr;
        }
        _.assignIn(sortTasks.projectsHolder, newObj);
        renderTasks.render();
    } else {
        localStorage.setItem('todolist', '[]')
    }
}

const obtainValues = (obj) => {
    const newObj = {};
    for (const key in obj) {
        newObj[key] = [];
        for (let i = 0; i < obj[key].length; i++) {
            newObj[key].push(obj[key][i].values);
        }
    }
    return newObj;
}

export { storage, obtainValues }
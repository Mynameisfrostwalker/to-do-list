import "@fortawesome/fontawesome-free/js/all";
import { addEvent } from './events.js';
import { collectInputs } from './formInputs.js'
import { renderTasks } from './todolistDisplay.js'

const inputs = (
    function() {
        const form = document.createElement('form');
        const createInputs = (type, name, descript) => {
            const label = document.createElement('label');
            label.setAttribute('for', name);
            label.textContent = descript + ":";
            let input = undefined;
            if (type === "textarea") {
                input = document.createElement('textarea');
            } else {
                input = document.createElement("input");
                input.setAttribute('type', type)
            }
            if (type === "date") {
                input.setAttribute('min', `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`)
            }
            input.setAttribute('id', name);
            input.setAttribute('name', descript);
            input.setAttribute('required', "");
            form.appendChild(label);
            form.appendChild(input);
        }
        createInputs('text', 'title', 'Title');
        createInputs('textarea', 'description', 'Description');
        createInputs('date', 'dueDate', 'DueDate');
        const select = document.createElement('select');
        const selectlabel = document.createElement('label');
        selectlabel.setAttribute('for', 'select');
        selectlabel.textContent = 'Priority:'
        select.setAttribute('id', 'select');
        select.setAttribute('name', 'priority')
        const createOptions = (value) => {
            const option = document.createElement('option');
            option.setAttribute('id', value);
            option.setAttribute('value', value);
            if (value === '') {
                option.setAttribute('selected', "");
                option.setAttribute('disabled', '')
            }
            option.textContent = value;
            select.appendChild(option);
        }
        createOptions('')
        createOptions('High');
        createOptions('Medium');
        createOptions('Low');
        const submit = document.createElement('button');
        const span = document.createElement('span');
        span.innerHTML = '<i class="fas fa-paper-plane">';
        submit.textContent = 'Submit';
        submit.appendChild(span);
        submit.setAttribute('type', 'button');
        submit.setAttribute('value', 'button');
        submit.setAttribute('id', 'submit');
        form.appendChild(selectlabel);
        form.appendChild(select);
        form.appendChild(submit);
        return { form }
    }
)()

const background = (
    function() {
        const blur = document.createElement('div')
        blur.setAttribute('id', 'blur');
        return { blur }
    }
)()

const formDisplay = (
    function() {
        const container = document.querySelector('div#container');
        const create = () => {
            container.appendChild(inputs.form);
            container.appendChild(background.blur);
            addEvent.submitListener();
        }
        const remove = () => {
            collectInputs.createTasks();
            let childrens = inputs.form.children;
            for (let i = 0; i < childrens.length; i++) {
                childrens[i].value = "";
            }
            container.removeChild(inputs.form);
            container.removeChild(background.blur);
            renderTasks.render();
        }
        return { create, remove };
    }
)()

export { formDisplay }
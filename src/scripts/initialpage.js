import "@fortawesome/fontawesome-free/js/all";
import { globalStorage } from './signInPage';

const head = (
    function() {
        const header = document.createElement('div');
        const div = document.createElement('div');
        div.id = "begin";
        header.setAttribute('id', 'header');
        const myFan = document.createElement('i');
        myFan.innerHTML = '<i class="fas fa-fan"></i>'
        const para = document.createElement('p');
        para.textContent = 'Your To-Do-List';
        div.appendChild(myFan);
        div.appendChild(para);
        header.appendChild(div);
        return { header }
    }
)()

const aside = (
    function() {
        const sidebar = document.createElement('div');
        sidebar.setAttribute('id', 'sidebar');
        const oneli = document.createElement('ul');
        oneli.setAttribute("id", 'oneli');
        const init = undefined;
        const today = undefined;
        const thisWeek = undefined;
        const newProject = undefined;
        const plus = undefined;
        const createLi = (name, element, text) => {
            name = document.createElement('li');
            name.classList.add('nav');
            if (text !== 'Projects' && text !== '') {
                name.classList.add('clickable')
            }
            if (text === '') {
                name.setAttribute('id', 'new');
                const ul = document.createElement('ul');
                ul.setAttribute('id', 'projectList');
                name.appendChild(ul);
                name.classList.remove('nav');
            } else { name.setAttribute('id', text); }
            if (text === 'Default') {
                name.classList.add('active')
            }
            const i = document.createElement('i')
            i.innerHTML = element
            i.setAttribute('id', `${text}projects`)
            name.appendChild(i)
            const words = document.createElement('p');
            words.textContent = text;
            name.appendChild(words);
            oneli.appendChild(name);
        }
        createLi(init, '<i class="fas fa-tasks"></i>', 'Default');
        createLi(today, '<i class="fas fa-calendar-day"></i>', 'Today');
        createLi(thisWeek, '<i class="fas fa-calendar-week">', 'This Week');
        createLi(newProject, '<i class="fas fa-project-diagram">', 'Projects');
        createLi(plus, '<i class="fas fa-plus">', '')
        sidebar.appendChild(oneli)
        return { sidebar }
    }
)()

const body = (
    function() {
        const bod = document.createElement('div');
        bod.setAttribute('id', 'bod');
        const bodHead = document.createElement('div');
        bodHead.setAttribute('id', 'bodHead')
        const bodHeadp = document.createElement('p');
        bodHeadp.textContent = 'Default';
        bodHead.appendChild(bodHeadp);
        const tasks = document.createElement('div');
        tasks.setAttribute('id', 'bodTasks');
        const add = document.createElement('div');
        add.setAttribute('id', 'bodAdd');
        add.innerHTML = '<i class="fas fa-plus">';
        bod.appendChild(bodHead);
        bod.appendChild(tasks);
        bod.appendChild(add);
        return { bod }
    }
)()

const display = (
    function() {
        const container = document.querySelector('div#container');
        const create = () => {
            container.appendChild(head.header);
            container.appendChild(aside.sidebar);
            container.appendChild(body.bod);

        }
        return { create }
    }
)()

export { display }
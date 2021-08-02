import "@fortawesome/fontawesome-free/js/all"

const head = (
    function() {
        const header = document.createElement('div');
        header.setAttribute('id', 'header');
        const myFan = document.createElement('i');
        myFan.innerHTML = '<i class="fas fa-fan"></i>'
        const para = document.createElement('p');
        para.textContent = 'Your To-Do-List';
        const create = () => {
            header.appendChild(myFan);
            header.appendChild(para);
        }
        return { create, header }
    }
)()

const aside = (
    function() {
        const sidebar = document.createElement('div');
        sidebar.setAttribute('id', 'sidebar');
    }
)()

const display = (
    function() {
        const container = document.querySelector('div#container');
        const create = () => {
            head.create();
            container.appendChild(head.header)
        }
        return { create }
    }
)()

export { display }
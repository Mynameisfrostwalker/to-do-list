const tabSwitchLogic = (
    function() {
        const changeDisplay = (event) => {
            const headText = document.querySelector('#bodHead').children[0];
            const tasksDisplay = document.querySelector('#bodTasks');
            const clickable = document.querySelectorAll('.clickable');
            const clickable2 = document.querySelectorAll('.projectList');
            for (let i = 0; i < clickable.length; i++) {
                if (clickable[i].classList.contains('active')) {
                    clickable[i].classList.remove('active');
                }
            }
            for (let i = 0; i < clickable2.length; i++) {
                if (clickable2[i].classList.contains('active')) {
                    clickable2[i].classList.remove('active');
                }
            }
            event.target.classList.add('active');
            for (let i = 0; i < tasksDisplay.children.length; i++) {
                tasksDiv.children[i].remove();
            }
            if (event.target.children[1]) {
                headText.textContent = event.target.children[1].textContent;
            } else {
                headText.textContent = event.target.textContent;
            }
        }
        return { changeDisplay }
    }
)()

export { tabSwitchLogic };
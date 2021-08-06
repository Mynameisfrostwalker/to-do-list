const tabSwitchLogic = (
    function() {
        const changeDisplay = (event) => {
            const clickable = document.querySelectorAll('.clickable');
            const clickable2 = document.querySelectorAll('.projectList');
            for (let i = 0; i < clickable.length; i++) {
                if (clickable[i].classList.contains('.active')) {
                    clickable[i].classList.remove('.active');
                }
            }
            for (let i = 0; i < clickable2.length; i++) {
                if (clickable2[i].classList.contains('.active')) {
                    clickable2[i].classList.remove('.active');
                }
            }
            event.target.classList.add('.active');
        }
        return { changeDisplay }
    }
)()

export { tabSwitchLogic };
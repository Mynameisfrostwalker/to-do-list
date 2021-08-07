"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["src_scripts_todolistDisplay_js"],{

/***/ "./src/scripts/DomDisplay.js":
/*!***********************************!*\
  !*** ./src/scripts/DomDisplay.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formDisplay": () => (/* binding */ formDisplay),
/* harmony export */   "projectInput": () => (/* binding */ projectInput)
/* harmony export */ });
/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.js */ "./src/scripts/events.js");
/* harmony import */ var _formInputs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formInputs.js */ "./src/scripts/formInputs.js");
/* harmony import */ var _todolistDisplay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todolistDisplay.js */ "./src/scripts/todolistDisplay.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");






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
                input.setAttribute('min', `${(0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()), 'yyyy-MM-dd')}`)
            }
            input.setAttribute('id', name);
            input.setAttribute('name', descript);
            input.required = true;
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
            _events_js__WEBPACK_IMPORTED_MODULE_1__.addEvent.preventEnter();
            _events_js__WEBPACK_IMPORTED_MODULE_1__.addEvent.submitListener();
        }
        const remove = () => {
            _formInputs_js__WEBPACK_IMPORTED_MODULE_2__.collectInputs.createTasks();
            let childrens = inputs.form.children;
            for (let i = 0; i < childrens.length; i++) {
                childrens[i].value = "";
            }
            container.removeChild(inputs.form);
            container.removeChild(background.blur);
            _todolistDisplay_js__WEBPACK_IMPORTED_MODULE_3__.renderTasks.render();
        }
        const editForm = (values) => {
            document.querySelector('#title').value = values.get.Title();
            document.querySelector('#description').value = values.get.Description();
            document.querySelector('#dueDate').value = values.get.DueDate();
            document.querySelector('#select').value = values.get.Priority();
        }
        return { create, remove, editForm };
    }
)()

const projectInput = (
    function() {
        const inputCreate = () => {
            const list = document.querySelector('#projects');
            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('name', 'projectInput');
            input.setAttribute('id', 'projectInput');
            input.setAttribute('placeholder', 'Enter project name');
            list.appendChild(input);
            const projectsButton = document.querySelector('#projects');
            projectsButton.removeEventListener('click', inputCreate);
            _events_js__WEBPACK_IMPORTED_MODULE_1__.addEvent.projectsInputListener();
        }

        const projectDisplay = () => {
            const projectName = document.querySelector('#projectInput').value;
            const projectList = document.querySelector('#projectList');
            const li = document.createElement('li');
            li.classList.add('projectList')
            li.textContent = projectName;
            projectList.appendChild(li);
            _events_js__WEBPACK_IMPORTED_MODULE_1__.addEvent.projectsButtonListener();
        }

        const projectRemove = () => {
            const projectInput = document.querySelector('#projectInput')
            projectInput.remove()
        }

        return { inputCreate, projectDisplay, projectRemove };
    }
)()



/***/ }),

/***/ "./src/scripts/events.js":
/*!*******************************!*\
  !*** ./src/scripts/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEvent": () => (/* binding */ addEvent)
/* harmony export */ });
/* harmony import */ var _DomDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomDisplay.js */ "./src/scripts/DomDisplay.js");
/* harmony import */ var _formInputs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formInputs.js */ "./src/scripts/formInputs.js");
/* harmony import */ var _todolistDisplay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolistDisplay.js */ "./src/scripts/todolistDisplay.js");
/* harmony import */ var _tab_switch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-switch.js */ "./src/scripts/tab-switch.js");





const addEvent = (
    function() {
        const windowListener = () => {
            window.addEventListener('load', function() {
                const bodAdd = document.querySelector('div#bodAdd');
                bodAdd.children[0].addEventListener('click', _DomDisplay_js__WEBPACK_IMPORTED_MODULE_0__.formDisplay.create);
            })
        }
        const submitListener = () => {
            const submit = document.querySelector('#submit');
            submit.addEventListener('click', _DomDisplay_js__WEBPACK_IMPORTED_MODULE_0__.formDisplay.remove);
        }

        const preventEnter = () => {
            const title = document.querySelector('#title');
            title.addEventListener('keypress', function(e) {
                if (e.keyCode === 13) {
                    e.preventDefault();
                }
            })
        }

        const editor = (event) => {
            _DomDisplay_js__WEBPACK_IMPORTED_MODULE_0__.formDisplay.create();
            let obj = _formInputs_js__WEBPACK_IMPORTED_MODULE_1__.collectInputs.retrieveTasks(event);
            _DomDisplay_js__WEBPACK_IMPORTED_MODULE_0__.formDisplay.editForm(obj)
            _formInputs_js__WEBPACK_IMPORTED_MODULE_1__.collectInputs.deleteTasks(obj.get.Id())
        }

        const editButtonListener = () => {
            const editButton = document.querySelectorAll('.editButton');
            editButton.forEach(button => {
                button.addEventListener('click', editor)
            });
        }

        const deleter = (event) => {
            _formInputs_js__WEBPACK_IMPORTED_MODULE_1__.collectInputs.deleteTasks(event.currentTarget.parentNode.parentNode.getAttribute('id'));
            _todolistDisplay_js__WEBPACK_IMPORTED_MODULE_2__.renderTasks.render()
        }

        const deleteButtonListener = () => {
            const deleteButton = document.querySelectorAll('.deleteButton');
            deleteButton.forEach(button => {
                button.addEventListener('click', deleter)
            })
        }

        const completer = (event) => {
            console.log('b')
            _formInputs_js__WEBPACK_IMPORTED_MODULE_1__.collectInputs.changeStatus(event);
            _todolistDisplay_js__WEBPACK_IMPORTED_MODULE_2__.renderTasks.render()
        }

        const completeButtonListener = () => {
            const sliderDiv = document.querySelectorAll('.sliderDiv');
            sliderDiv.forEach(button => {
                console.log('a');
                button.addEventListener('click', completer, {
                    capture: false,
                    once: true,
                })
            })
        }

        const projectsButtonListener = () => {
            const projectsButton = document.querySelector('#projects');
            projectsButton.addEventListener('click', _DomDisplay_js__WEBPACK_IMPORTED_MODULE_0__.projectInput.inputCreate)
        }

        const projectsInputListener = () => {
            const projectsInput = document.querySelector('#projectInput');
            projectsInput.addEventListener('keypress', function(e) {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    _DomDisplay_js__WEBPACK_IMPORTED_MODULE_0__.projectInput.projectDisplay()
                    _DomDisplay_js__WEBPACK_IMPORTED_MODULE_0__.projectInput.projectRemove()
                    projectListListener();
                }
            })
        }

        const clickableListener = () => {
            const clickable = document.querySelectorAll('.clickable');
            clickable.forEach(elem => {
                elem.addEventListener('click', _tab_switch_js__WEBPACK_IMPORTED_MODULE_3__.tabSwitchLogic.changeDisplay)
            })
        }

        const projectListListener = () => {
            const projectList = document.querySelectorAll('.projectList');
            projectList.forEach(elem => {
                elem.addEventListener('click', _tab_switch_js__WEBPACK_IMPORTED_MODULE_3__.tabSwitchLogic.changeDisplay)
            })
        }

        return { windowListener, submitListener, preventEnter, editButtonListener, deleteButtonListener, projectsButtonListener, projectsInputListener, completeButtonListener, clickableListener, projectListListener };
    }
)()



/***/ }),

/***/ "./src/scripts/formInputs.js":
/*!***********************************!*\
  !*** ./src/scripts/formInputs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collectInputs": () => (/* binding */ collectInputs),
/* harmony export */   "sortTasks": () => (/* binding */ sortTasks)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/scripts/todo.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isBefore/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isEqual/index.js");



const collectInputs = (
    function() {
        let todolist = [];

        const createTasks = () => {
            const title = document.querySelector('#title');
            const description = document.querySelector('#description');
            const dueDate = document.querySelector('#dueDate');
            const priority = document.querySelector('#select');
            if (title.value === '' || dueDate.value === '', priority.value === '') {
                alert('No input must not be left blank');
                return
            }
            todolist.push((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.tasks)(title.value, description.value, dueDate.value, priority.value, "incomplete", todolist.length.toString()));
            sortTasks.addProject();
        }

        const retrieveTasks = (e) => {
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
            sortTasks.addProject();
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
            sortTasks.addProject();
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
                    projectsHolder[projectName] = [...projectsHolder[projectName], ...collectInputs.todolist];
                } else {
                    projectsHolder[projectName] = [...collectInputs.todolist];
                }
            }
        }

        const createNewProject = (pName) => {
            if (!projectsHolder[pName]) {
                projectsHolder[pName] = [];
            }
        }

        const createSortedArr = () => {
            console.log(projectsHolder)
            const Name = document.querySelector('#bodHead').children[0].textContent;
            if (projectsHolder[Name].length > 1) {
                const sorted = projectsHolder[Name].sort(function(a, b) {
                    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(new Date(a.get.DueDate()), new Date(b.get.DueDate()))) {
                        return 1;
                    }
                    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(new Date(a.get.DueDate()), new Date(b.get.DueDate()))) {
                        return -1;
                    }
                    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(new Date(a.get.DueDate()), new Date(b.get.DueDate()))) {
                        return 0
                    }
                });
                return sorted;
            } else {
                return projectsHolder[Name]
            }
        }
        return { addProject, createSortedArr, createNewProject, projectsHolder };
    }
)()



/***/ }),

/***/ "./src/scripts/tab-switch.js":
/*!***********************************!*\
  !*** ./src/scripts/tab-switch.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabSwitchLogic": () => (/* binding */ tabSwitchLogic)
/* harmony export */ });
/* harmony import */ var _todolistDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolistDisplay.js */ "./src/scripts/todolistDisplay.js");
/* harmony import */ var _formInputs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formInputs.js */ "./src/scripts/formInputs.js");



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
                if (tasksDiv.children[i]) {
                    tasksDiv.children[i].remove();
                }
            }
            if (event.target.children[1]) {
                headText.textContent = event.target.children[1].textContent;
            } else {
                headText.textContent = event.target.textContent;
            }

            _formInputs_js__WEBPACK_IMPORTED_MODULE_1__.sortTasks.createNewProject(event.target.textContent);
            _todolistDisplay_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks.render();

            console.log(_formInputs_js__WEBPACK_IMPORTED_MODULE_1__.sortTasks.projectsHolder);
            for (let i = 0; i < _formInputs_js__WEBPACK_IMPORTED_MODULE_1__.collectInputs.todolist.length; i++) {
                _formInputs_js__WEBPACK_IMPORTED_MODULE_1__.collectInputs.todolist.pop();
            }
            console.log(_formInputs_js__WEBPACK_IMPORTED_MODULE_1__.sortTasks.projectsHolder)
        }
        return { changeDisplay }
    }
)()



/***/ }),

/***/ "./src/scripts/todo.js":
/*!*****************************!*\
  !*** ./src/scripts/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistanceToNow/index.js");


const tasks = (title, description, dueDate, priority, status, id) => {
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;
    let _status = status;
    let _id = id;

    const get = {
        Title: () => _title,
        Description: () => _description,
        DueDate: () => _dueDate,
        Priority: () => _priority,
        Status: () => _status,
        TimeRemaining: () => (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(new Date(_dueDate), { addSuffix: true }),
        Id: () => _id,
    }

    const set = {
        Title: (newTitle) => _title = newTitle,
        Description: (newDescription) => _description = newDescription,
        DueDate: (newDueDate) => _dueDate = newDueDate,
        Priority: (newPriority) => _priority = newPriority,
        Status: (newStatus) => _status = newStatus,
    }

    return {get, set }

}



/***/ }),

/***/ "./src/scripts/todolistDisplay.js":
/*!****************************************!*\
  !*** ./src/scripts/todolistDisplay.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _formInputs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formInputs.js */ "./src/scripts/formInputs.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.js */ "./src/scripts/events.js");




const createTasksDivs = (
    function() {
        const createSlider = (num, arr, div) => {
            const sliderDiv = document.createElement('div');
            sliderDiv.setAttribute('class', 'sliderDiv');
            const label = document.createElement('label');
            label.classList.add('switch')
            const input = document.createElement('input');
            input.classList.add('check');
            input.setAttribute('type', 'checkbox');
            if (arr[num].get.Status() === 'complete') {
                input.checked = true;
            }
            label.appendChild(input);
            const span = document.createElement('span');
            span.classList.add('slider');
            span.classList.add('round');
            label.appendChild(span);
            sliderDiv.appendChild(label);
            div.appendChild(sliderDiv);
        }


        const createInfo = (num, arr, div) => {
            const infoDiv = document.createElement('div');
            infoDiv.setAttribute('class', 'infoDiv');
            const para1 = document.createElement('p');
            const para2 = document.createElement('p');
            para1.textContent = arr[num].get.Title() + ':';
            para1.style['font-size'] = '1.5rem';
            para2.textContent = arr[num].get.TimeRemaining();
            infoDiv.appendChild(para1);
            infoDiv.appendChild(para2);
            div.appendChild(infoDiv);
        }

        const createButtons = (div) => {
            const buttonsDiv = document.createElement('div');
            const button1Div = document.createElement('div');
            const button2Div = document.createElement('div');
            button1Div.classList.add('editButton');
            button1Div.innerHTML = "<i class='fas fa-edit'></i>";
            button2Div.classList.add('deleteButton')
            button2Div.innerHTML = "<i class='fas fa-trash-alt'></i>"
            buttonsDiv.classList.add('buttonsDiv')
            buttonsDiv.appendChild(button1Div);
            buttonsDiv.appendChild(button2Div);
            div.appendChild(buttonsDiv);
        }

        const editColors = (num, arr, div) => {
            if (arr[num].get.Status() === 'complete') {
                div.style["background-color"] = 'grey';
                div.style['filter'] = 'blur(1px)';
                div.style['opacity'] = 0.7;
            } else if (arr[num].get.Priority() === 'High') {
                div.style["background-color"] = 'red'
            } else if (arr[num].get.Priority() === 'Medium') {
                div.style["background-color"] = 'yellow';
            } else if (arr[num].get.Priority() === 'Low') {
                div.style["background-color"] = 'cyan';
            }
        }

        const create = () => {
            const store = document.createElement('div')
            store.setAttribute('id', 'tasksDiv');
            let tasks = _formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.createSortedArr();
            for (let i = 0; i < tasks.length; i++) {
                const taskDiv = document.createElement('div');
                taskDiv.classList.add('taskDiv');
                taskDiv.setAttribute('id', `${tasks[i].get.Id()}`);
                createSlider(i, tasks, taskDiv);
                createInfo(i, tasks, taskDiv);
                createButtons(taskDiv);
                editColors(i, tasks, taskDiv);
                store.appendChild(taskDiv);
            }
            return store;
        };
        return { create }
    }
)()

const renderTasks = (
    function() {
        const render = () => {
            const tasksDisplay = document.querySelector('#bodTasks');
            for (let i = 0; i < tasksDisplay.children.length; i++) {
                tasksDisplay.children[i].remove();
            }
            let div = createTasksDivs.create();
            tasksDisplay.appendChild(div);
            _events_js__WEBPACK_IMPORTED_MODULE_2__.addEvent.editButtonListener();
            _events_js__WEBPACK_IMPORTED_MODULE_2__.addEvent.deleteButtonListener();
            _events_js__WEBPACK_IMPORTED_MODULE_2__.addEvent.completeButtonListener();
        }
        return { render }
    }
)()



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfdG9kb2xpc3REaXNwbGF5X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNQO0FBQ1M7QUFDRztBQUNqQjs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsaURBQU0sZ0dBQWdHO0FBQ25KO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBcUI7QUFDakMsWUFBWSwrREFBdUI7QUFDbkM7QUFDQTtBQUNBLFlBQVkscUVBQXlCO0FBQ3JDO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUVBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzRUFBOEI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVFQUErQjtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7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O0FDM0MrQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlEQUFtQix1QkFBdUIsaUJBQWlCO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTs7QUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QjJDO0FBQ0U7QUFDTjs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFFQUF5QjtBQUNqRCw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7QUFDQSw4Q0FBOEMsa0JBQWtCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrQ0FBa0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1FQUEyQjtBQUN2QyxZQUFZLHFFQUE2QjtBQUN6QyxZQUFZLHVFQUErQjtBQUMzQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHRzL0RvbURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvZm9ybUlucHV0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvdGFiLXN3aXRjaC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvdG9kb2xpc3REaXNwbGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbFwiO1xuaW1wb3J0IHsgYWRkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy5qcyc7XG5pbXBvcnQgeyBjb2xsZWN0SW5wdXRzIH0gZnJvbSAnLi9mb3JtSW5wdXRzLmpzJztcbmltcG9ydCB7IHJlbmRlclRhc2tzIH0gZnJvbSAnLi90b2RvbGlzdERpc3BsYXkuanMnO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5jb25zdCBpbnB1dHMgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZUlucHV0cyA9ICh0eXBlLCBuYW1lLCBkZXNjcmlwdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBuYW1lKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gZGVzY3JpcHQgKyBcIjpcIjtcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcInRleHRhcmVhXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJkYXRlXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIGAke2Zvcm1hdChuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIG5ldyBEYXRlKCkuZ2V0TW9udGgoKSwgbmV3IERhdGUoKS5nZXREYXRlKCkpLCAneXl5eS1NTS1kZCcpfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkZXNjcmlwdCk7XG4gICAgICAgICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZUlucHV0cygndGV4dCcsICd0aXRsZScsICdUaXRsZScpO1xuICAgICAgICBjcmVhdGVJbnB1dHMoJ3RleHRhcmVhJywgJ2Rlc2NyaXB0aW9uJywgJ0Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNyZWF0ZUlucHV0cygnZGF0ZScsICdkdWVEYXRlJywgJ0R1ZURhdGUnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgc2VsZWN0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnc2VsZWN0Jyk7XG4gICAgICAgIHNlbGVjdGxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OidcbiAgICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0Jyk7XG4gICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKVxuICAgICAgICBjb25zdCBjcmVhdGVPcHRpb25zID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgdmFsdWUpO1xuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVPcHRpb25zKCcnKVxuICAgICAgICBjcmVhdGVPcHRpb25zKCdIaWdoJyk7XG4gICAgICAgIGNyZWF0ZU9wdGlvbnMoJ01lZGl1bScpO1xuICAgICAgICBjcmVhdGVPcHRpb25zKCdMb3cnKTtcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXBhcGVyLXBsYW5lXCI+JztcbiAgICAgICAgc3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgICAgIHN1Ym1pdC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdCcpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdGxhYmVsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICAgIHJldHVybiB7IGZvcm0gfVxuICAgIH1cbikoKVxuXG5jb25zdCBiYWNrZ3JvdW5kID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBibHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgYmx1ci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JsdXInKTtcbiAgICAgICAgcmV0dXJuIHsgYmx1ciB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IGZvcm1EaXNwbGF5ID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dHMuZm9ybSk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZC5ibHVyKTtcbiAgICAgICAgICAgIGFkZEV2ZW50LnByZXZlbnRFbnRlcigpO1xuICAgICAgICAgICAgYWRkRXZlbnQuc3VibWl0TGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb2xsZWN0SW5wdXRzLmNyZWF0ZVRhc2tzKCk7XG4gICAgICAgICAgICBsZXQgY2hpbGRyZW5zID0gaW5wdXRzLmZvcm0uY2hpbGRyZW47XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuc1tpXS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoaW5wdXRzLmZvcm0pO1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGJhY2tncm91bmQuYmx1cik7XG4gICAgICAgICAgICByZW5kZXJUYXNrcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlZGl0Rm9ybSA9ICh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlID0gdmFsdWVzLmdldC5UaXRsZSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWUgPSB2YWx1ZXMuZ2V0LkRlc2NyaXB0aW9uKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpLnZhbHVlID0gdmFsdWVzLmdldC5EdWVEYXRlKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0JykudmFsdWUgPSB2YWx1ZXMuZ2V0LlByaW9yaXR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlLCByZW1vdmUsIGVkaXRGb3JtIH07XG4gICAgfVxuKSgpXG5cbmNvbnN0IHByb2plY3RJbnB1dCA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgaW5wdXRDcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3RJbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0SW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgcHJvamVjdCBuYW1lJyk7XG4gICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG4gICAgICAgICAgICBwcm9qZWN0c0J1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGlucHV0Q3JlYXRlKTtcbiAgICAgICAgICAgIGFkZEV2ZW50LnByb2plY3RzSW5wdXRMaXN0ZW5lcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdERpc3BsYXkgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0SW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RMaXN0Jyk7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGlzdCcpXG4gICAgICAgICAgICBsaS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICAgICAgYWRkRXZlbnQucHJvamVjdHNCdXR0b25MaXN0ZW5lcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0SW5wdXQnKVxuICAgICAgICAgICAgcHJvamVjdElucHV0LnJlbW92ZSgpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBpbnB1dENyZWF0ZSwgcHJvamVjdERpc3BsYXksIHByb2plY3RSZW1vdmUgfTtcbiAgICB9XG4pKClcblxuZXhwb3J0IHsgZm9ybURpc3BsYXksIHByb2plY3RJbnB1dCB9OyIsImltcG9ydCB7IGZvcm1EaXNwbGF5LCBwcm9qZWN0SW5wdXQgfSBmcm9tICcuL0RvbURpc3BsYXkuanMnO1xuaW1wb3J0IHsgY29sbGVjdElucHV0cyB9IGZyb20gJy4vZm9ybUlucHV0cy5qcyc7XG5pbXBvcnQgeyByZW5kZXJUYXNrcyB9IGZyb20gJy4vdG9kb2xpc3REaXNwbGF5LmpzJztcbmltcG9ydCB7IHRhYlN3aXRjaExvZ2ljIH0gZnJvbSAnLi90YWItc3dpdGNoLmpzJztcblxuY29uc3QgYWRkRXZlbnQgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHdpbmRvd0xpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2RBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjYm9kQWRkJyk7XG4gICAgICAgICAgICAgICAgYm9kQWRkLmNoaWxkcmVuWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZm9ybURpc3BsYXkuY3JlYXRlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3VibWl0TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG4gICAgICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmb3JtRGlzcGxheS5yZW1vdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJldmVudEVudGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWRpdG9yID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBmb3JtRGlzcGxheS5jcmVhdGUoKTtcbiAgICAgICAgICAgIGxldCBvYmogPSBjb2xsZWN0SW5wdXRzLnJldHJpZXZlVGFza3MoZXZlbnQpO1xuICAgICAgICAgICAgZm9ybURpc3BsYXkuZWRpdEZvcm0ob2JqKVxuICAgICAgICAgICAgY29sbGVjdElucHV0cy5kZWxldGVUYXNrcyhvYmouZ2V0LklkKCkpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXRCdXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRCdXR0b24uZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRvcilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsZXRlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29sbGVjdElucHV0cy5kZWxldGVUYXNrcyhldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgICAgICAgICAgcmVuZGVyVGFza3MucmVuZGVyKClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZUJ1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2InKVxuICAgICAgICAgICAgY29sbGVjdElucHV0cy5jaGFuZ2VTdGF0dXMoZXZlbnQpO1xuICAgICAgICAgICAgcmVuZGVyVGFza3MucmVuZGVyKClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlQnV0dG9uTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzbGlkZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyRGl2Jyk7XG4gICAgICAgICAgICBzbGlkZXJEaXYuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhJyk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29tcGxldGVyLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdHNCdXR0b25MaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG4gICAgICAgICAgICBwcm9qZWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RJbnB1dC5pbnB1dENyZWF0ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RzSW5wdXRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdElucHV0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0c0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElucHV0LnByb2plY3REaXNwbGF5KClcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElucHV0LnByb2plY3RSZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdExpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsaWNrYWJsZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xpY2thYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsaWNrYWJsZScpO1xuICAgICAgICAgICAgY2xpY2thYmxlLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhYlN3aXRjaExvZ2ljLmNoYW5nZURpc3BsYXkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RMaXN0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWJTd2l0Y2hMb2dpYy5jaGFuZ2VEaXNwbGF5KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHdpbmRvd0xpc3RlbmVyLCBzdWJtaXRMaXN0ZW5lciwgcHJldmVudEVudGVyLCBlZGl0QnV0dG9uTGlzdGVuZXIsIGRlbGV0ZUJ1dHRvbkxpc3RlbmVyLCBwcm9qZWN0c0J1dHRvbkxpc3RlbmVyLCBwcm9qZWN0c0lucHV0TGlzdGVuZXIsIGNvbXBsZXRlQnV0dG9uTGlzdGVuZXIsIGNsaWNrYWJsZUxpc3RlbmVyLCBwcm9qZWN0TGlzdExpc3RlbmVyIH07XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IGFkZEV2ZW50IH0iLCJpbXBvcnQgeyB0YXNrcyB9IGZyb20gJy4vdG9kby5qcydcbmltcG9ydCB7IGlzQWZ0ZXIsIGlzQmVmb3JlLCBpc0VxdWFsIH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmNvbnN0IGNvbGxlY3RJbnB1dHMgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0b2RvbGlzdCA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZVRhc2tzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdCcpO1xuICAgICAgICAgICAgaWYgKHRpdGxlLnZhbHVlID09PSAnJyB8fCBkdWVEYXRlLnZhbHVlID09PSAnJywgcHJpb3JpdHkudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ05vIGlucHV0IG11c3Qgbm90IGJlIGxlZnQgYmxhbmsnKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvZG9saXN0LnB1c2godGFza3ModGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgXCJpbmNvbXBsZXRlXCIsIHRvZG9saXN0Lmxlbmd0aC50b1N0cmluZygpKSk7XG4gICAgICAgICAgICBzb3J0VGFza3MuYWRkUHJvamVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmV0cmlldmVUYXNrcyA9IChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaWRlbnQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWRlbnQgPT09IHRvZG9saXN0W2ldLmdldC5JZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2RvbGlzdFtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWxldGVUYXNrcyA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdG9kb2xpc3RbaV0uZ2V0LklkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb2xpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNvcnRUYXNrcy5hZGRQcm9qZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGFuZ2VTdGF0dXMgPSAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGlkZW50ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpZGVudCA9PT0gdG9kb2xpc3RbaV0uZ2V0LklkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9sZFN0YXR1cyA9IHRvZG9saXN0W2ldLmdldC5TdGF0dXMoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFN0YXR1cyA9PT0gJ2luY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvbGlzdFtpXS5zZXQuU3RhdHVzKCdjb21wbGV0ZScpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2xkU3RhdHVzID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvbGlzdFtpXS5zZXQuU3RhdHVzKCdpbmNvbXBsZXRlJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNvcnRUYXNrcy5hZGRQcm9qZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBjcmVhdGVUYXNrcywgdG9kb2xpc3QsIHJldHJpZXZlVGFza3MsIGRlbGV0ZVRhc2tzLCBjaGFuZ2VTdGF0dXMgfTtcbiAgICB9XG4pKClcblxuY29uc3Qgc29ydFRhc2tzID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0hvbGRlciA9IHt9O1xuXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RIZWFkJykuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBpZiAoY29sbGVjdElucHV0cy50b2RvbGlzdC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXSA9IFsuLi5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0sIC4uLmNvbGxlY3RJbnB1dHMudG9kb2xpc3RdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXSA9IFsuLi5jb2xsZWN0SW5wdXRzLnRvZG9saXN0XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKHBOYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXByb2plY3RzSG9sZGVyW3BOYW1lXSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzSG9sZGVyW3BOYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3JlYXRlU29ydGVkQXJyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNIb2xkZXIpXG4gICAgICAgICAgICBjb25zdCBOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEhlYWQnKS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0c0hvbGRlcltOYW1lXS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkID0gcHJvamVjdHNIb2xkZXJbTmFtZV0uc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FmdGVyKG5ldyBEYXRlKGEuZ2V0LkR1ZURhdGUoKSksIG5ldyBEYXRlKGIuZ2V0LkR1ZURhdGUoKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNCZWZvcmUobmV3IERhdGUoYS5nZXQuRHVlRGF0ZSgpKSwgbmV3IERhdGUoYi5nZXQuRHVlRGF0ZSgpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNFcXVhbChuZXcgRGF0ZShhLmdldC5EdWVEYXRlKCkpLCBuZXcgRGF0ZShiLmdldC5EdWVEYXRlKCkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBzb3J0ZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0c0hvbGRlcltOYW1lXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGFkZFByb2plY3QsIGNyZWF0ZVNvcnRlZEFyciwgY3JlYXRlTmV3UHJvamVjdCwgcHJvamVjdHNIb2xkZXIgfTtcbiAgICB9XG4pKClcblxuZXhwb3J0IHsgY29sbGVjdElucHV0cywgc29ydFRhc2tzIH0iLCJpbXBvcnQgeyByZW5kZXJUYXNrcyB9IGZyb20gJy4vdG9kb2xpc3REaXNwbGF5LmpzJ1xuaW1wb3J0IHsgY29sbGVjdElucHV0cywgc29ydFRhc2tzIH0gZnJvbSAnLi9mb3JtSW5wdXRzLmpzJztcblxuY29uc3QgdGFiU3dpdGNoTG9naWMgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNoYW5nZURpc3BsYXkgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEhlYWQnKS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RUYXNrcycpO1xuICAgICAgICAgICAgY29uc3QgY2xpY2thYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsaWNrYWJsZScpO1xuICAgICAgICAgICAgY29uc3QgY2xpY2thYmxlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0TGlzdCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlja2FibGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xpY2thYmxlW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpY2thYmxlMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjbGlja2FibGUyW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlMltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzRGlzcGxheS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrc0Rpdi5jaGlsZHJlbltpXSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrc0Rpdi5jaGlsZHJlbltpXS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzFdKSB7XG4gICAgICAgICAgICAgICAgaGVhZFRleHQudGV4dENvbnRlbnQgPSBldmVudC50YXJnZXQuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhlYWRUZXh0LnRleHRDb250ZW50ID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzb3J0VGFza3MuY3JlYXRlTmV3UHJvamVjdChldmVudC50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgcmVuZGVyVGFza3MucmVuZGVyKCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxlY3RJbnB1dHMudG9kb2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0SW5wdXRzLnRvZG9saXN0LnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coc29ydFRhc2tzLnByb2plY3RzSG9sZGVyKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNoYW5nZURpc3BsYXkgfVxuICAgIH1cbikoKVxuXG5leHBvcnQgeyB0YWJTd2l0Y2hMb2dpYyB9OyIsImltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgdGFza3MgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBpZCkgPT4ge1xuICAgIGxldCBfdGl0bGUgPSB0aXRsZTtcbiAgICBsZXQgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgbGV0IF9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBsZXQgX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgbGV0IF9zdGF0dXMgPSBzdGF0dXM7XG4gICAgbGV0IF9pZCA9IGlkO1xuXG4gICAgY29uc3QgZ2V0ID0ge1xuICAgICAgICBUaXRsZTogKCkgPT4gX3RpdGxlLFxuICAgICAgICBEZXNjcmlwdGlvbjogKCkgPT4gX2Rlc2NyaXB0aW9uLFxuICAgICAgICBEdWVEYXRlOiAoKSA9PiBfZHVlRGF0ZSxcbiAgICAgICAgUHJpb3JpdHk6ICgpID0+IF9wcmlvcml0eSxcbiAgICAgICAgU3RhdHVzOiAoKSA9PiBfc3RhdHVzLFxuICAgICAgICBUaW1lUmVtYWluaW5nOiAoKSA9PiBmb3JtYXREaXN0YW5jZVRvTm93KG5ldyBEYXRlKF9kdWVEYXRlKSwgeyBhZGRTdWZmaXg6IHRydWUgfSksXG4gICAgICAgIElkOiAoKSA9PiBfaWQsXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0ID0ge1xuICAgICAgICBUaXRsZTogKG5ld1RpdGxlKSA9PiBfdGl0bGUgPSBuZXdUaXRsZSxcbiAgICAgICAgRGVzY3JpcHRpb246IChuZXdEZXNjcmlwdGlvbikgPT4gX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24sXG4gICAgICAgIER1ZURhdGU6IChuZXdEdWVEYXRlKSA9PiBfZHVlRGF0ZSA9IG5ld0R1ZURhdGUsXG4gICAgICAgIFByaW9yaXR5OiAobmV3UHJpb3JpdHkpID0+IF9wcmlvcml0eSA9IG5ld1ByaW9yaXR5LFxuICAgICAgICBTdGF0dXM6IChuZXdTdGF0dXMpID0+IF9zdGF0dXMgPSBuZXdTdGF0dXMsXG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXQsIHNldCB9XG5cbn1cblxuZXhwb3J0IHsgdGFza3MgfSIsImltcG9ydCB7IHNvcnRUYXNrcyB9IGZyb20gJy4vZm9ybUlucHV0cy5qcydcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsJ1xuaW1wb3J0IHsgYWRkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy5qcyc7XG5cbmNvbnN0IGNyZWF0ZVRhc2tzRGl2cyA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY3JlYXRlU2xpZGVyID0gKG51bSwgYXJyLCBkaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNsaWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc2xpZGVyRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2xpZGVyRGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKVxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICAgICAgaWYgKGFycltudW1dLmdldC5TdGF0dXMoKSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnc2xpZGVyJyk7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3JvdW5kJyk7XG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgICAgIHNsaWRlckRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc2xpZGVyRGl2KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgY3JlYXRlSW5mbyA9IChudW0sIGFyciwgZGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpbmZvRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5mb0RpdicpO1xuICAgICAgICAgICAgY29uc3QgcGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHBhcmExLnRleHRDb250ZW50ID0gYXJyW251bV0uZ2V0LlRpdGxlKCkgKyAnOic7XG4gICAgICAgICAgICBwYXJhMS5zdHlsZVsnZm9udC1zaXplJ10gPSAnMS41cmVtJztcbiAgICAgICAgICAgIHBhcmEyLnRleHRDb250ZW50ID0gYXJyW251bV0uZ2V0LlRpbWVSZW1haW5pbmcoKTtcbiAgICAgICAgICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQocGFyYTEpO1xuICAgICAgICAgICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChwYXJhMik7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVCdXR0b25zID0gKGRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYnV0dG9uMURpdi5jbGFzc0xpc3QuYWRkKCdlZGl0QnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24xRGl2LmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhcyBmYS1lZGl0Jz48L2k+XCI7XG4gICAgICAgICAgICBidXR0b24yRGl2LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZUJ1dHRvbicpXG4gICAgICAgICAgICBidXR0b24yRGl2LmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhcyBmYS10cmFzaC1hbHQnPjwvaT5cIlxuICAgICAgICAgICAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25zRGl2JylcbiAgICAgICAgICAgIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uMURpdik7XG4gICAgICAgICAgICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGJ1dHRvbjJEaXYpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbnNEaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWRpdENvbG9ycyA9IChudW0sIGFyciwgZGl2KSA9PiB7XG4gICAgICAgICAgICBpZiAoYXJyW251bV0uZ2V0LlN0YXR1cygpID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9ICdncmV5JztcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGVbJ2ZpbHRlciddID0gJ2JsdXIoMXB4KSc7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlWydvcGFjaXR5J10gPSAwLjc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFycltudW1dLmdldC5Qcmlvcml0eSgpID09PSAnSGlnaCcpIHtcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gJ3JlZCdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyW251bV0uZ2V0LlByaW9yaXR5KCkgPT09ICdNZWRpdW0nKSB7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9ICd5ZWxsb3cnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJbbnVtXS5nZXQuUHJpb3JpdHkoKSA9PT0gJ0xvdycpIHtcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gJ2N5YW4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgc3RvcmUuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrc0RpdicpO1xuICAgICAgICAgICAgbGV0IHRhc2tzID0gc29ydFRhc2tzLmNyZWF0ZVNvcnRlZEFycigpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YXNrc1tpXS5nZXQuSWQoKX1gKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVTbGlkZXIoaSwgdGFza3MsIHRhc2tEaXYpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUluZm8oaSwgdGFza3MsIHRhc2tEaXYpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbnModGFza0Rpdik7XG4gICAgICAgICAgICAgICAgZWRpdENvbG9ycyhpLCB0YXNrcywgdGFza0Rpdik7XG4gICAgICAgICAgICAgICAgc3RvcmUuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IHJlbmRlclRhc2tzID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrc0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9kVGFza3MnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NEaXNwbGF5LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGFza3NEaXNwbGF5LmNoaWxkcmVuW2ldLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpdiA9IGNyZWF0ZVRhc2tzRGl2cy5jcmVhdGUoKTtcbiAgICAgICAgICAgIHRhc2tzRGlzcGxheS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgYWRkRXZlbnQuZWRpdEJ1dHRvbkxpc3RlbmVyKCk7XG4gICAgICAgICAgICBhZGRFdmVudC5kZWxldGVCdXR0b25MaXN0ZW5lcigpO1xuICAgICAgICAgICAgYWRkRXZlbnQuY29tcGxldGVCdXR0b25MaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHJlbmRlciB9XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IHJlbmRlclRhc2tzIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
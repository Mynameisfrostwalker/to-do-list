"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["src_scripts_events_js-src_scripts_todolistDisplay_js"],{

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
            let obj = _formInputs_js__WEBPACK_IMPORTED_MODULE_1__.collectInputs.retieveTasks(event);
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
        const todolist = [];
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
            } else { return collectInputs.todolist }
        }
        return { createSortedArr };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfZXZlbnRzX2pzLXNyY19zY3JpcHRzX3RvZG9saXN0RGlzcGxheV9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDUDtBQUNTO0FBQ0c7QUFDakI7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGlEQUFNLGdHQUFnRztBQUNuSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkRBQXFCO0FBQ2pDLFlBQVksK0RBQXVCO0FBQ25DO0FBQ0E7QUFDQSxZQUFZLHFFQUF5QjtBQUNyQztBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1FQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0VBQThCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1RUFBK0I7QUFDM0M7O0FBRUE7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUVBQXlCO0FBQ2pELDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBLDhDQUE4QyxrQkFBa0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtDQUFrQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUVBQTJCO0FBQ3ZDLFlBQVkscUVBQTZCO0FBQ3pDLFlBQVksdUVBQStCO0FBQzNDO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvRG9tRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy9mb3JtSW5wdXRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy90YWItc3dpdGNoLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy90b2RvbGlzdERpc3BsYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsXCI7XG5pbXBvcnQgeyBhZGRFdmVudCB9IGZyb20gJy4vZXZlbnRzLmpzJztcbmltcG9ydCB7IGNvbGxlY3RJbnB1dHMgfSBmcm9tICcuL2Zvcm1JbnB1dHMuanMnO1xuaW1wb3J0IHsgcmVuZGVyVGFza3MgfSBmcm9tICcuL3RvZG9saXN0RGlzcGxheS5qcyc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IGlucHV0cyA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgY3JlYXRlSW5wdXRzID0gKHR5cGUsIG5hbWUsIGRlc2NyaXB0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIG5hbWUpO1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBkZXNjcmlwdCArIFwiOlwiO1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwidGV4dGFyZWFcIikge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImRhdGVcIikge1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgYCR7Zm9ybWF0KG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgbmV3IERhdGUoKS5nZXRNb250aCgpLCBuZXcgRGF0ZSgpLmdldERhdGUoKSksICd5eXl5LU1NLWRkJyl9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBuYW1lKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGRlc2NyaXB0KTtcbiAgICAgICAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlSW5wdXRzKCd0ZXh0JywgJ3RpdGxlJywgJ1RpdGxlJyk7XG4gICAgICAgIGNyZWF0ZUlucHV0cygndGV4dGFyZWEnLCAnZGVzY3JpcHRpb24nLCAnRGVzY3JpcHRpb24nKTtcbiAgICAgICAgY3JlYXRlSW5wdXRzKCdkYXRlJywgJ2R1ZURhdGUnLCAnRHVlRGF0ZScpO1xuICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0bGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBzZWxlY3RsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0bGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6J1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpXG4gICAgICAgIGNvbnN0IGNyZWF0ZU9wdGlvbnMgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCB2YWx1ZSk7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIFwiXCIpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZU9wdGlvbnMoJycpXG4gICAgICAgIGNyZWF0ZU9wdGlvbnMoJ0hpZ2gnKTtcbiAgICAgICAgY3JlYXRlT3B0aW9ucygnTWVkaXVtJyk7XG4gICAgICAgIGNyZWF0ZU9wdGlvbnMoJ0xvdycpO1xuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtcGFwZXItcGxhbmVcIj4nO1xuICAgICAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgICAgc3VibWl0LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdidXR0b24nKTtcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0Jyk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0bGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgcmV0dXJuIHsgZm9ybSB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IGJhY2tncm91bmQgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBibHVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmx1cicpO1xuICAgICAgICByZXR1cm4geyBibHVyIH1cbiAgICB9XG4pKClcblxuY29uc3QgZm9ybURpc3BsYXkgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250YWluZXInKTtcbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0cy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kLmJsdXIpO1xuICAgICAgICAgICAgYWRkRXZlbnQucHJldmVudEVudGVyKCk7XG4gICAgICAgICAgICBhZGRFdmVudC5zdWJtaXRMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbGxlY3RJbnB1dHMuY3JlYXRlVGFza3MoKTtcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbnMgPSBpbnB1dHMuZm9ybS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5zW2ldLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChpbnB1dHMuZm9ybSk7XG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoYmFja2dyb3VuZC5ibHVyKTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVkaXRGb3JtID0gKHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWUgPSB2YWx1ZXMuZ2V0LlRpdGxlKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZSA9IHZhbHVlcy5nZXQuRGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJykudmFsdWUgPSB2YWx1ZXMuZ2V0LkR1ZURhdGUoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QnKS52YWx1ZSA9IHZhbHVlcy5nZXQuUHJpb3JpdHkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjcmVhdGUsIHJlbW92ZSwgZWRpdEZvcm0gfTtcbiAgICB9XG4pKClcblxuY29uc3QgcHJvamVjdElucHV0ID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBpbnB1dENyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdElucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RJbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBwcm9qZWN0IG5hbWUnKTtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbiAgICAgICAgICAgIHByb2plY3RzQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5wdXRDcmVhdGUpO1xuICAgICAgICAgICAgYWRkRXZlbnQucHJvamVjdHNJbnB1dExpc3RlbmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0RGlzcGxheSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKTtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaXN0JylcbiAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICBhZGRFdmVudC5wcm9qZWN0c0J1dHRvbkxpc3RlbmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0UmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpXG4gICAgICAgICAgICBwcm9qZWN0SW5wdXQucmVtb3ZlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGlucHV0Q3JlYXRlLCBwcm9qZWN0RGlzcGxheSwgcHJvamVjdFJlbW92ZSB9O1xuICAgIH1cbikoKVxuXG5leHBvcnQgeyBmb3JtRGlzcGxheSwgcHJvamVjdElucHV0IH07IiwiaW1wb3J0IHsgZm9ybURpc3BsYXksIHByb2plY3RJbnB1dCB9IGZyb20gJy4vRG9tRGlzcGxheS5qcyc7XG5pbXBvcnQgeyBjb2xsZWN0SW5wdXRzIH0gZnJvbSAnLi9mb3JtSW5wdXRzLmpzJztcbmltcG9ydCB7IHJlbmRlclRhc2tzIH0gZnJvbSAnLi90b2RvbGlzdERpc3BsYXkuanMnO1xuaW1wb3J0IHsgdGFiU3dpdGNoTG9naWMgfSBmcm9tICcuL3RhYi1zd2l0Y2guanMnO1xuXG5jb25zdCBhZGRFdmVudCA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3Qgd2luZG93TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvZEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNib2RBZGQnKTtcbiAgICAgICAgICAgICAgICBib2RBZGQuY2hpbGRyZW5bMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmb3JtRGlzcGxheS5jcmVhdGUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdWJtaXRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKTtcbiAgICAgICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZvcm1EaXNwbGF5LnJlbW92ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmV2ZW50RW50ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlZGl0b3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGZvcm1EaXNwbGF5LmNyZWF0ZSgpO1xuICAgICAgICAgICAgbGV0IG9iaiA9IGNvbGxlY3RJbnB1dHMucmV0aWV2ZVRhc2tzKGV2ZW50KTtcbiAgICAgICAgICAgIGZvcm1EaXNwbGF5LmVkaXRGb3JtKG9iailcbiAgICAgICAgICAgIGNvbGxlY3RJbnB1dHMuZGVsZXRlVGFza3Mob2JqLmdldC5JZCgpKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0QnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0b3IpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbGxlY3RJbnB1dHMuZGVsZXRlVGFza3MoZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzLnJlbmRlcigpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b25MaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVCdXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wbGV0ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiJylcbiAgICAgICAgICAgIGNvbGxlY3RJbnB1dHMuY2hhbmdlU3RhdHVzKGV2ZW50KTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzLnJlbmRlcigpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wbGV0ZUJ1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2xpZGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlckRpdicpO1xuICAgICAgICAgICAgc2xpZGVyRGl2LmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYScpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbXBsZXRlciwge1xuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RzQnV0dG9uTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuICAgICAgICAgICAgcHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0SW5wdXQuaW5wdXRDcmVhdGUpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0c0lucHV0TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdHNJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RJbnB1dC5wcm9qZWN0RGlzcGxheSgpXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RJbnB1dC5wcm9qZWN0UmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdExpc3RMaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbGlja2FibGVMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbGlja2FibGUnKTtcbiAgICAgICAgICAgIGNsaWNrYWJsZS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWJTd2l0Y2hMb2dpYy5jaGFuZ2VEaXNwbGF5KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0TGlzdCcpO1xuICAgICAgICAgICAgcHJvamVjdExpc3QuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFiU3dpdGNoTG9naWMuY2hhbmdlRGlzcGxheSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyB3aW5kb3dMaXN0ZW5lciwgc3VibWl0TGlzdGVuZXIsIHByZXZlbnRFbnRlciwgZWRpdEJ1dHRvbkxpc3RlbmVyLCBkZWxldGVCdXR0b25MaXN0ZW5lciwgcHJvamVjdHNCdXR0b25MaXN0ZW5lciwgcHJvamVjdHNJbnB1dExpc3RlbmVyLCBjb21wbGV0ZUJ1dHRvbkxpc3RlbmVyLCBjbGlja2FibGVMaXN0ZW5lciwgcHJvamVjdExpc3RMaXN0ZW5lciB9O1xuICAgIH1cbikoKVxuXG5leHBvcnQgeyBhZGRFdmVudCB9IiwiaW1wb3J0IHsgdGFza3MgfSBmcm9tICcuL3RvZG8uanMnXG5pbXBvcnQgeyBpc0FmdGVyLCBpc0JlZm9yZSwgaXNFcXVhbCB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5jb25zdCBjb2xsZWN0SW5wdXRzID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0b2RvbGlzdCA9IFtdO1xuICAgICAgICBjb25zdCBjcmVhdGVUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QnKTtcbiAgICAgICAgICAgIGlmICh0aXRsZS52YWx1ZSA9PT0gJycgfHwgZHVlRGF0ZS52YWx1ZSA9PT0gJycsIHByaW9yaXR5LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdObyBpbnB1dCBtdXN0IG5vdCBiZSBsZWZ0IGJsYW5rJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvbGlzdC5wdXNoKHRhc2tzKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUsIFwiaW5jb21wbGV0ZVwiLCB0b2RvbGlzdC5sZW5ndGgudG9TdHJpbmcoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJldGlldmVUYXNrcyA9IChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaWRlbnQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWRlbnQgPT09IHRvZG9saXN0W2ldLmdldC5JZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2RvbGlzdFtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVsZXRlVGFza3MgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHRvZG9saXN0W2ldLmdldC5JZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9saXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGFuZ2VTdGF0dXMgPSAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGlkZW50ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpZGVudCA9PT0gdG9kb2xpc3RbaV0uZ2V0LklkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9sZFN0YXR1cyA9IHRvZG9saXN0W2ldLmdldC5TdGF0dXMoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFN0YXR1cyA9PT0gJ2luY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvbGlzdFtpXS5zZXQuU3RhdHVzKCdjb21wbGV0ZScpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2xkU3RhdHVzID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvbGlzdFtpXS5zZXQuU3RhdHVzKCdpbmNvbXBsZXRlJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGNyZWF0ZVRhc2tzLCB0b2RvbGlzdCwgcmV0aWV2ZVRhc2tzLCBkZWxldGVUYXNrcywgY2hhbmdlU3RhdHVzIH07XG4gICAgfVxuKSgpXG5cbmNvbnN0IHNvcnRUYXNrcyA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY3JlYXRlU29ydGVkQXJyID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbGxlY3RJbnB1dHMudG9kb2xpc3QubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRlZCA9IGNvbGxlY3RJbnB1dHMudG9kb2xpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FmdGVyKG5ldyBEYXRlKGEuZ2V0LkR1ZURhdGUoKSksIG5ldyBEYXRlKGIuZ2V0LkR1ZURhdGUoKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNCZWZvcmUobmV3IERhdGUoYS5nZXQuRHVlRGF0ZSgpKSwgbmV3IERhdGUoYi5nZXQuRHVlRGF0ZSgpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNFcXVhbChuZXcgRGF0ZShhLmdldC5EdWVEYXRlKCkpLCBuZXcgRGF0ZShiLmdldC5EdWVEYXRlKCkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBzb3J0ZWQ7XG4gICAgICAgICAgICB9IGVsc2UgeyByZXR1cm4gY29sbGVjdElucHV0cy50b2RvbGlzdCB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlU29ydGVkQXJyIH07XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IGNvbGxlY3RJbnB1dHMsIHNvcnRUYXNrcyB9IiwiY29uc3QgdGFiU3dpdGNoTG9naWMgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNoYW5nZURpc3BsYXkgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEhlYWQnKS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RUYXNrcycpO1xuICAgICAgICAgICAgY29uc3QgY2xpY2thYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsaWNrYWJsZScpO1xuICAgICAgICAgICAgY29uc3QgY2xpY2thYmxlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0TGlzdCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlja2FibGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xpY2thYmxlW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpY2thYmxlMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjbGlja2FibGUyW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlMltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzRGlzcGxheS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRhc2tzRGl2LmNoaWxkcmVuW2ldLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGlsZHJlblsxXSkge1xuICAgICAgICAgICAgICAgIGhlYWRUZXh0LnRleHRDb250ZW50ID0gZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkVGV4dC50ZXh0Q29udGVudCA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjaGFuZ2VEaXNwbGF5IH1cbiAgICB9XG4pKClcblxuZXhwb3J0IHsgdGFiU3dpdGNoTG9naWMgfTsiLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IHRhc2tzID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgaWQpID0+IHtcbiAgICBsZXQgX3RpdGxlID0gdGl0bGU7XG4gICAgbGV0IF9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIGxldCBfZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgbGV0IF9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIGxldCBfc3RhdHVzID0gc3RhdHVzO1xuICAgIGxldCBfaWQgPSBpZDtcblxuICAgIGNvbnN0IGdldCA9IHtcbiAgICAgICAgVGl0bGU6ICgpID0+IF90aXRsZSxcbiAgICAgICAgRGVzY3JpcHRpb246ICgpID0+IF9kZXNjcmlwdGlvbixcbiAgICAgICAgRHVlRGF0ZTogKCkgPT4gX2R1ZURhdGUsXG4gICAgICAgIFByaW9yaXR5OiAoKSA9PiBfcHJpb3JpdHksXG4gICAgICAgIFN0YXR1czogKCkgPT4gX3N0YXR1cyxcbiAgICAgICAgVGltZVJlbWFpbmluZzogKCkgPT4gZm9ybWF0RGlzdGFuY2VUb05vdyhuZXcgRGF0ZShfZHVlRGF0ZSksIHsgYWRkU3VmZml4OiB0cnVlIH0pLFxuICAgICAgICBJZDogKCkgPT4gX2lkLFxuICAgIH1cblxuICAgIGNvbnN0IHNldCA9IHtcbiAgICAgICAgVGl0bGU6IChuZXdUaXRsZSkgPT4gX3RpdGxlID0gbmV3VGl0bGUsXG4gICAgICAgIERlc2NyaXB0aW9uOiAobmV3RGVzY3JpcHRpb24pID0+IF9kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uLFxuICAgICAgICBEdWVEYXRlOiAobmV3RHVlRGF0ZSkgPT4gX2R1ZURhdGUgPSBuZXdEdWVEYXRlLFxuICAgICAgICBQcmlvcml0eTogKG5ld1ByaW9yaXR5KSA9PiBfcHJpb3JpdHkgPSBuZXdQcmlvcml0eSxcbiAgICAgICAgU3RhdHVzOiAobmV3U3RhdHVzKSA9PiBfc3RhdHVzID0gbmV3U3RhdHVzLFxuICAgIH1cblxuICAgIHJldHVybiB7Z2V0LCBzZXQgfVxuXG59XG5cbmV4cG9ydCB7IHRhc2tzIH0iLCJpbXBvcnQgeyBzb3J0VGFza3MgfSBmcm9tICcuL2Zvcm1JbnB1dHMuanMnXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbCdcbmltcG9ydCB7IGFkZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMuanMnO1xuXG5jb25zdCBjcmVhdGVUYXNrc0RpdnMgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZVNsaWRlciA9IChudW0sIGFyciwgZGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzbGlkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNsaWRlckRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NsaWRlckRpdicpO1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3dpdGNoJylcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIGlmIChhcnJbbnVtXS5nZXQuU3RhdHVzKCkgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcicpO1xuICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdyb3VuZCcpO1xuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICBzbGlkZXJEaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNsaWRlckRpdik7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUluZm8gPSAobnVtLCBhcnIsIGRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW5mb0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luZm9EaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgcGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwYXJhMS50ZXh0Q29udGVudCA9IGFycltudW1dLmdldC5UaXRsZSgpICsgJzonO1xuICAgICAgICAgICAgcGFyYTEuc3R5bGVbJ2ZvbnQtc2l6ZSddID0gJzEuNXJlbSc7XG4gICAgICAgICAgICBwYXJhMi50ZXh0Q29udGVudCA9IGFycltudW1dLmdldC5UaW1lUmVtYWluaW5nKCk7XG4gICAgICAgICAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHBhcmExKTtcbiAgICAgICAgICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQocGFyYTIpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGluZm9EaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3JlYXRlQnV0dG9ucyA9IChkaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbjFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbjJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJ1dHRvbjFEaXYuY2xhc3NMaXN0LmFkZCgnZWRpdEJ1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uMURpdi5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYXMgZmEtZWRpdCc+PC9pPlwiO1xuICAgICAgICAgICAgYnV0dG9uMkRpdi5jbGFzc0xpc3QuYWRkKCdkZWxldGVCdXR0b24nKVxuICAgICAgICAgICAgYnV0dG9uMkRpdi5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYXMgZmEtdHJhc2gtYWx0Jz48L2k+XCJcbiAgICAgICAgICAgIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uc0RpdicpXG4gICAgICAgICAgICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGJ1dHRvbjFEaXYpO1xuICAgICAgICAgICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChidXR0b24yRGl2KTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVkaXRDb2xvcnMgPSAobnVtLCBhcnIsIGRpdikgPT4ge1xuICAgICAgICAgICAgaWYgKGFycltudW1dLmdldC5TdGF0dXMoKSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSAnZ3JleSc7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlWydmaWx0ZXInXSA9ICdibHVyKDFweCknO1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZVsnb3BhY2l0eSddID0gMC43O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJbbnVtXS5nZXQuUHJpb3JpdHkoKSA9PT0gJ0hpZ2gnKSB7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9ICdyZWQnXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFycltudW1dLmdldC5Qcmlvcml0eSgpID09PSAnTWVkaXVtJykge1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSAneWVsbG93JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyW251bV0uZ2V0LlByaW9yaXR5KCkgPT09ICdMb3cnKSB7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9ICdjeWFuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHN0b3JlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza3NEaXYnKTtcbiAgICAgICAgICAgIGxldCB0YXNrcyA9IHNvcnRUYXNrcy5jcmVhdGVTb3J0ZWRBcnIoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrRGl2Jyk7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGFza3NbaV0uZ2V0LklkKCl9YCk7XG4gICAgICAgICAgICAgICAgY3JlYXRlU2xpZGVyKGksIHRhc2tzLCB0YXNrRGl2KTtcbiAgICAgICAgICAgICAgICBjcmVhdGVJbmZvKGksIHRhc2tzLCB0YXNrRGl2KTtcbiAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b25zKHRhc2tEaXYpO1xuICAgICAgICAgICAgICAgIGVkaXRDb2xvcnMoaSwgdGFza3MsIHRhc2tEaXYpO1xuICAgICAgICAgICAgICAgIHN0b3JlLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBjcmVhdGUgfVxuICAgIH1cbikoKVxuXG5jb25zdCByZW5kZXJUYXNrcyA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza3NEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZFRhc2tzJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzRGlzcGxheS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRhc2tzRGlzcGxheS5jaGlsZHJlbltpXS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaXYgPSBjcmVhdGVUYXNrc0RpdnMuY3JlYXRlKCk7XG4gICAgICAgICAgICB0YXNrc0Rpc3BsYXkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIGFkZEV2ZW50LmVkaXRCdXR0b25MaXN0ZW5lcigpO1xuICAgICAgICAgICAgYWRkRXZlbnQuZGVsZXRlQnV0dG9uTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIGFkZEV2ZW50LmNvbXBsZXRlQnV0dG9uTGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyByZW5kZXIgfVxuICAgIH1cbikoKVxuXG5leHBvcnQgeyByZW5kZXJUYXNrcyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
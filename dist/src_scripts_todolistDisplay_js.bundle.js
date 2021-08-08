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

/***/ "./src/scripts/dateProject.js":
/*!************************************!*\
  !*** ./src/scripts/dateProject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dates": () => (/* binding */ dates)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var _formInputs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formInputs.js */ "./src/scripts/formInputs.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);




const dates = (
    function() {
        let Today = [];
        let ThisWeek = [];
        const create = () => {
            for (const elem in _formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.projectsHolder) {
                for (let i = 0; i < _formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.projectsHolder[elem].length; i++) {
                    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(new Date(_formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.projectsHolder[elem][i].get.DueDate())) && elem !== "Today" && elem !== 'This Week') {
                        Today.push(_formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.projectsHolder[elem][i])
                    }
                    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(new Date(_formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.projectsHolder[elem][i].get.DueDate())) && elem !== "Today" && elem !== 'This Week') {
                        ThisWeek.push(_formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.projectsHolder[elem][i])
                    }
                }
            }
            _formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.projectsHolder.Today = [...Today];
            _formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.projectsHolder["This Week"] = [...ThisWeek];
        }

        const clear = () => {
            lodash__WEBPACK_IMPORTED_MODULE_1___default().pullAll(Today, [...Today]);
            lodash__WEBPACK_IMPORTED_MODULE_1___default().pullAll(ThisWeek, [...ThisWeek]);
        }
        return { create, clear }
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isBefore/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isEqual/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);




const collectInputs = (
    function() {
        let todolist = [];
        let counter = [];

        const createTasks = () => {
            counter.push(null);
            const title = document.querySelector('#title');
            const description = document.querySelector('#description');
            const dueDate = document.querySelector('#dueDate');
            const priority = document.querySelector('#select');
            if (title.value === '' || dueDate.value === '', priority.value === '') {
                alert('No input must not be left blank');
                return
            }
            todolist.push((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.tasks)(title.value, description.value, dueDate.value, priority.value, "incomplete", counter.length.toString()));
            sortTasks.addProject();
        }

        const retrieveTasks = (e) => {
            const projectName = document.querySelector('#bodHead').children[0].textContent;
            let ident = e.currentTarget.parentNode.parentNode.getAttribute('id');
            for (let i = 0; i < sortTasks.projectsHolder[projectName].length; i++) {
                if (ident === sortTasks.projectsHolder[projectName][i].get.Id()) {
                    lodash__WEBPACK_IMPORTED_MODULE_1___default().pullAll(todolist, [...todolist])
                    todolist.push(...sortTasks.projectsHolder[projectName])
                    return sortTasks.projectsHolder[projectName][i];
                }
            }
        }

        const deleteTasks = (value) => {
            const projectName = document.querySelector('#bodHead').children[0].textContent;
            for (let i = 0; i < sortTasks.projectsHolder[projectName].length; i++) {
                if (value === sortTasks.projectsHolder[projectName][i].get.Id()) {
                    sortTasks.projectsHolder[projectName].splice(i, 1);
                    lodash__WEBPACK_IMPORTED_MODULE_1___default().pullAll(todolist, [...todolist])
                    todolist.push(...sortTasks.projectsHolder[projectName])
                }
            }
        }

        const changeStatus = (e) => {
            const projectName = document.querySelector('#bodHead').children[0].textContent;
            let ident = e.currentTarget.parentNode.getAttribute('id');
            for (let i = 0; i < sortTasks.projectsHolder[projectName].length; i++) {
                if (ident === sortTasks.projectsHolder[projectName][i].get.Id()) {
                    let oldStatus = sortTasks.projectsHolder[projectName][i].get.Status();
                    if (oldStatus === 'incomplete') {
                        sortTasks.projectsHolder[projectName][i].set.Status('complete')
                        lodash__WEBPACK_IMPORTED_MODULE_1___default().pullAll(todolist, [...todolist])
                        todolist.push(...sortTasks.projectsHolder[projectName])

                    } else if (oldStatus === 'complete') {
                        sortTasks.projectsHolder[projectName][i].set.Status('incomplete')
                        lodash__WEBPACK_IMPORTED_MODULE_1___default().pullAll(todolist, [...todolist])
                        todolist.push(...sortTasks.projectsHolder[projectName])

                    }
                }
            }
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
                    projectsHolder[projectName] = [...lodash__WEBPACK_IMPORTED_MODULE_1___default().differenceWith([...projectsHolder[projectName]], [...collectInputs.todolist], (lodash__WEBPACK_IMPORTED_MODULE_1___default().isEqual)), ...collectInputs.todolist];
                } else {
                    projectsHolder[projectName] = [...collectInputs.todolist];
                }
            }
        }

        const projectChange = () => {
            const projectName = document.querySelector('#bodHead').children[0].textContent;
            projectsHolder[projectName] = [...collectInputs.todolist];
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
                    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(new Date(a.get.DueDate()), new Date(b.get.DueDate()))) {
                        return 1;
                    }
                    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(new Date(a.get.DueDate()), new Date(b.get.DueDate()))) {
                        return -1;
                    }
                    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(new Date(a.get.DueDate()), new Date(b.get.DueDate()))) {
                        return 0
                    }
                });
                return sorted;
            } else {
                return projectsHolder[Name]
            }
        }
        return { addProject, createSortedArr, createNewProject, projectsHolder, projectChange };
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
/* harmony import */ var _dateProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dateProject.js */ "./src/scripts/dateProject.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);






const tabSwitchLogic = (
    function() {
        const changeDisplay = (event) => {
            const headText = document.querySelector('#bodHead').children[0];
            const tasksDisplay = document.querySelector('#bodTasks');
            const bodAdd = document.querySelector('#bodAdd');
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
            event.currentTarget.classList.add('active');
            for (let i = 0; i < tasksDisplay.children.length; i++) {
                if (tasksDiv.children[i]) {
                    tasksDiv.children[i].remove();
                }
            }
            if (event.currentTarget.children[1]) {
                headText.textContent = event.currentTarget.children[1].textContent;
            } else {
                headText.textContent = event.currentTarget.textContent;
            }

            if (event.currentTarget.id === 'Today' || event.currentTarget.id === 'This Week') {
                bodAdd.classList.add('noDisplay');
                _dateProject_js__WEBPACK_IMPORTED_MODULE_2__.dates.create();
                _dateProject_js__WEBPACK_IMPORTED_MODULE_2__.dates.clear();
            } else {
                if (bodAdd.classList.contains('noDisplay')) {
                    bodAdd.classList.remove('noDisplay');
                }
                _formInputs_js__WEBPACK_IMPORTED_MODULE_1__.sortTasks.createNewProject(event.target.textContent);
            }

            _todolistDisplay_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks.render();

            if (event.currentTarget.id === 'Today' || event.currentTarget.id === 'This Week') {
                const sliderDiv = document.querySelectorAll('.sliderDiv');
                const buttonsDiv = document.querySelectorAll('.buttonsDiv');
                sliderDiv.forEach(elem => elem.remove());
                buttonsDiv.forEach(elem => elem.remove());
            }

            console.log(_formInputs_js__WEBPACK_IMPORTED_MODULE_1__.sortTasks.projectsHolder);
            lodash__WEBPACK_IMPORTED_MODULE_3___default().pullAll(_formInputs_js__WEBPACK_IMPORTED_MODULE_1__.collectInputs.todolist, [..._formInputs_js__WEBPACK_IMPORTED_MODULE_1__.collectInputs.todolist])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfdG9kb2xpc3REaXNwbGF5X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNQO0FBQ1M7QUFDRztBQUNqQjs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsaURBQU0sZ0dBQWdHO0FBQ25KO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBcUI7QUFDakMsWUFBWSwrREFBdUI7QUFDbkM7QUFDQTtBQUNBLFlBQVkscUVBQXlCO0FBQ3JDO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUVBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzRUFBOEI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVFQUErQjtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxRUFBeUI7QUFDakQsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBO0FBQ0EsOENBQThDLGtCQUFrQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0NBQWtDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtRUFBMkI7QUFDdkMsWUFBWSxxRUFBNkI7QUFDekMsWUFBWSx1RUFBK0I7QUFDM0M7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy9Eb21EaXNwbGF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy9kYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy9mb3JtSW5wdXRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy90YWItc3dpdGNoLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy90b2RvbGlzdERpc3BsYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsXCI7XG5pbXBvcnQgeyBhZGRFdmVudCB9IGZyb20gJy4vZXZlbnRzLmpzJztcbmltcG9ydCB7IGNvbGxlY3RJbnB1dHMgfSBmcm9tICcuL2Zvcm1JbnB1dHMuanMnO1xuaW1wb3J0IHsgcmVuZGVyVGFza3MgfSBmcm9tICcuL3RvZG9saXN0RGlzcGxheS5qcyc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IGlucHV0cyA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgY3JlYXRlSW5wdXRzID0gKHR5cGUsIG5hbWUsIGRlc2NyaXB0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIG5hbWUpO1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBkZXNjcmlwdCArIFwiOlwiO1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwidGV4dGFyZWFcIikge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImRhdGVcIikge1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgYCR7Zm9ybWF0KG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgbmV3IERhdGUoKS5nZXRNb250aCgpLCBuZXcgRGF0ZSgpLmdldERhdGUoKSksICd5eXl5LU1NLWRkJyl9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBuYW1lKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGRlc2NyaXB0KTtcbiAgICAgICAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlSW5wdXRzKCd0ZXh0JywgJ3RpdGxlJywgJ1RpdGxlJyk7XG4gICAgICAgIGNyZWF0ZUlucHV0cygndGV4dGFyZWEnLCAnZGVzY3JpcHRpb24nLCAnRGVzY3JpcHRpb24nKTtcbiAgICAgICAgY3JlYXRlSW5wdXRzKCdkYXRlJywgJ2R1ZURhdGUnLCAnRHVlRGF0ZScpO1xuICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0bGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBzZWxlY3RsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0bGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6J1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpXG4gICAgICAgIGNvbnN0IGNyZWF0ZU9wdGlvbnMgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCB2YWx1ZSk7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIFwiXCIpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZU9wdGlvbnMoJycpXG4gICAgICAgIGNyZWF0ZU9wdGlvbnMoJ0hpZ2gnKTtcbiAgICAgICAgY3JlYXRlT3B0aW9ucygnTWVkaXVtJyk7XG4gICAgICAgIGNyZWF0ZU9wdGlvbnMoJ0xvdycpO1xuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtcGFwZXItcGxhbmVcIj4nO1xuICAgICAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgICAgc3VibWl0LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdidXR0b24nKTtcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0Jyk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0bGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgcmV0dXJuIHsgZm9ybSB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IGJhY2tncm91bmQgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBibHVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmx1cicpO1xuICAgICAgICByZXR1cm4geyBibHVyIH1cbiAgICB9XG4pKClcblxuY29uc3QgZm9ybURpc3BsYXkgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250YWluZXInKTtcbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0cy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kLmJsdXIpO1xuICAgICAgICAgICAgYWRkRXZlbnQucHJldmVudEVudGVyKCk7XG4gICAgICAgICAgICBhZGRFdmVudC5zdWJtaXRMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbGxlY3RJbnB1dHMuY3JlYXRlVGFza3MoKTtcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbnMgPSBpbnB1dHMuZm9ybS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5zW2ldLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChpbnB1dHMuZm9ybSk7XG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoYmFja2dyb3VuZC5ibHVyKTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVkaXRGb3JtID0gKHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWUgPSB2YWx1ZXMuZ2V0LlRpdGxlKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZSA9IHZhbHVlcy5nZXQuRGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJykudmFsdWUgPSB2YWx1ZXMuZ2V0LkR1ZURhdGUoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QnKS52YWx1ZSA9IHZhbHVlcy5nZXQuUHJpb3JpdHkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjcmVhdGUsIHJlbW92ZSwgZWRpdEZvcm0gfTtcbiAgICB9XG4pKClcblxuY29uc3QgcHJvamVjdElucHV0ID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBpbnB1dENyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdElucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RJbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBwcm9qZWN0IG5hbWUnKTtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbiAgICAgICAgICAgIHByb2plY3RzQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5wdXRDcmVhdGUpO1xuICAgICAgICAgICAgYWRkRXZlbnQucHJvamVjdHNJbnB1dExpc3RlbmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0RGlzcGxheSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKTtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaXN0JylcbiAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICBhZGRFdmVudC5wcm9qZWN0c0J1dHRvbkxpc3RlbmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0UmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpXG4gICAgICAgICAgICBwcm9qZWN0SW5wdXQucmVtb3ZlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGlucHV0Q3JlYXRlLCBwcm9qZWN0RGlzcGxheSwgcHJvamVjdFJlbW92ZSB9O1xuICAgIH1cbikoKVxuXG5leHBvcnQgeyBmb3JtRGlzcGxheSwgcHJvamVjdElucHV0IH07IiwiaW1wb3J0IHsgaXNUb2RheSwgaXNUaGlzV2VlayB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgc29ydFRhc2tzIH0gZnJvbSAnLi9mb3JtSW5wdXRzLmpzJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgZGF0ZXMgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBUb2RheSA9IFtdO1xuICAgICAgICBsZXQgVGhpc1dlZWsgPSBbXTtcbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtIGluIHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW2VsZW1dLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltlbGVtXVtpXS5nZXQuRHVlRGF0ZSgpKSkgJiYgZWxlbSAhPT0gXCJUb2RheVwiICYmIGVsZW0gIT09ICdUaGlzIFdlZWsnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUb2RheS5wdXNoKHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltlbGVtXVtpXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUaGlzV2VlayhuZXcgRGF0ZShzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbZWxlbV1baV0uZ2V0LkR1ZURhdGUoKSkpICYmIGVsZW0gIT09IFwiVG9kYXlcIiAmJiBlbGVtICE9PSAnVGhpcyBXZWVrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgVGhpc1dlZWsucHVzaChzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbZWxlbV1baV0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbJ1RvZGF5J10gPSBbLi4uVG9kYXldO1xuICAgICAgICAgICAgc29ydFRhc2tzLnByb2plY3RzSG9sZGVyWydUaGlzIFdlZWsnXSA9IFsuLi5UaGlzV2Vla107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICAgICAgICAgIF8ucHVsbEFsbChUb2RheSwgWy4uLlRvZGF5XSk7XG4gICAgICAgICAgICBfLnB1bGxBbGwoVGhpc1dlZWssIFsuLi5UaGlzV2Vla10pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSwgY2xlYXIgfVxuICAgIH1cbikoKVxuXG5leHBvcnQgeyBkYXRlcyB9IiwiaW1wb3J0IHsgZm9ybURpc3BsYXksIHByb2plY3RJbnB1dCB9IGZyb20gJy4vRG9tRGlzcGxheS5qcyc7XG5pbXBvcnQgeyBjb2xsZWN0SW5wdXRzIH0gZnJvbSAnLi9mb3JtSW5wdXRzLmpzJztcbmltcG9ydCB7IHJlbmRlclRhc2tzIH0gZnJvbSAnLi90b2RvbGlzdERpc3BsYXkuanMnO1xuaW1wb3J0IHsgdGFiU3dpdGNoTG9naWMgfSBmcm9tICcuL3RhYi1zd2l0Y2guanMnO1xuXG5jb25zdCBhZGRFdmVudCA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3Qgd2luZG93TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvZEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNib2RBZGQnKTtcbiAgICAgICAgICAgICAgICBib2RBZGQuY2hpbGRyZW5bMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmb3JtRGlzcGxheS5jcmVhdGUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdWJtaXRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKTtcbiAgICAgICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZvcm1EaXNwbGF5LnJlbW92ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmV2ZW50RW50ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlZGl0b3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGZvcm1EaXNwbGF5LmNyZWF0ZSgpO1xuICAgICAgICAgICAgbGV0IG9iaiA9IGNvbGxlY3RJbnB1dHMucmV0cmlldmVUYXNrcyhldmVudCk7XG4gICAgICAgICAgICBmb3JtRGlzcGxheS5lZGl0Rm9ybShvYmopXG4gICAgICAgICAgICBjb2xsZWN0SW5wdXRzLmRlbGV0ZVRhc2tzKG9iai5nZXQuSWQoKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b25MaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdEJ1dHRvbicpO1xuICAgICAgICAgICAgZWRpdEJ1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdG9yKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWxldGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb2xsZWN0SW5wdXRzLmRlbGV0ZVRhc2tzKGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnaWQnKSk7XG4gICAgICAgICAgICByZW5kZXJUYXNrcy5yZW5kZXIoKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlQnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZXIpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcGxldGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYicpXG4gICAgICAgICAgICBjb2xsZWN0SW5wdXRzLmNoYW5nZVN0YXR1cyhldmVudCk7XG4gICAgICAgICAgICByZW5kZXJUYXNrcy5yZW5kZXIoKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcGxldGVCdXR0b25MaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNsaWRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJEaXYnKTtcbiAgICAgICAgICAgIHNsaWRlckRpdi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2EnKTtcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb21wbGV0ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0c0J1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbiAgICAgICAgICAgIHByb2plY3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdElucHV0LmlucHV0Q3JlYXRlKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdHNJbnB1dExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0SW5wdXQnKTtcbiAgICAgICAgICAgIHByb2plY3RzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5wdXQucHJvamVjdERpc3BsYXkoKVxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5wdXQucHJvamVjdFJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RMaXN0TGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xpY2thYmxlTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbGlja2FibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xpY2thYmxlJyk7XG4gICAgICAgICAgICBjbGlja2FibGUuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFiU3dpdGNoTG9naWMuY2hhbmdlRGlzcGxheSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdExpc3QnKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhYlN3aXRjaExvZ2ljLmNoYW5nZURpc3BsYXkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgd2luZG93TGlzdGVuZXIsIHN1Ym1pdExpc3RlbmVyLCBwcmV2ZW50RW50ZXIsIGVkaXRCdXR0b25MaXN0ZW5lciwgZGVsZXRlQnV0dG9uTGlzdGVuZXIsIHByb2plY3RzQnV0dG9uTGlzdGVuZXIsIHByb2plY3RzSW5wdXRMaXN0ZW5lciwgY29tcGxldGVCdXR0b25MaXN0ZW5lciwgY2xpY2thYmxlTGlzdGVuZXIsIHByb2plY3RMaXN0TGlzdGVuZXIgfTtcbiAgICB9XG4pKClcblxuZXhwb3J0IHsgYWRkRXZlbnQgfSIsImltcG9ydCB7IHRhc2tzIH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IGlzQWZ0ZXIsIGlzQmVmb3JlLCBpc0VxdWFsIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgY29sbGVjdElucHV0cyA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHRvZG9saXN0ID0gW107XG4gICAgICAgIGxldCBjb3VudGVyID0gW107XG5cbiAgICAgICAgY29uc3QgY3JlYXRlVGFza3MgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb3VudGVyLnB1c2gobnVsbCk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0Jyk7XG4gICAgICAgICAgICBpZiAodGl0bGUudmFsdWUgPT09ICcnIHx8IGR1ZURhdGUudmFsdWUgPT09ICcnLCBwcmlvcml0eS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnTm8gaW5wdXQgbXVzdCBub3QgYmUgbGVmdCBibGFuaycpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9kb2xpc3QucHVzaCh0YXNrcyh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlLCBcImluY29tcGxldGVcIiwgY291bnRlci5sZW5ndGgudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgc29ydFRhc2tzLmFkZFByb2plY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJldHJpZXZlVGFza3MgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9kSGVhZCcpLmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgbGV0IGlkZW50ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWRlbnQgPT09IHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV1baV0uZ2V0LklkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wdWxsQWxsKHRvZG9saXN0LCBbLi4udG9kb2xpc3RdKVxuICAgICAgICAgICAgICAgICAgICB0b2RvbGlzdC5wdXNoKC4uLnNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2tzID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RIZWFkJykuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV1baV0uZ2V0LklkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIF8ucHVsbEFsbCh0b2RvbGlzdCwgWy4uLnRvZG9saXN0XSlcbiAgICAgICAgICAgICAgICAgICAgdG9kb2xpc3QucHVzaCguLi5zb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoYW5nZVN0YXR1cyA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RIZWFkJykuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBsZXQgaWRlbnQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWRlbnQgPT09IHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV1baV0uZ2V0LklkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9sZFN0YXR1cyA9IHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV1baV0uZ2V0LlN0YXR1cygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob2xkU3RhdHVzID09PSAnaW5jb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV1baV0uc2V0LlN0YXR1cygnY29tcGxldGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5wdWxsQWxsKHRvZG9saXN0LCBbLi4udG9kb2xpc3RdKVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb2xpc3QucHVzaCguLi5zb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdKVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2xkU3RhdHVzID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdW2ldLnNldC5TdGF0dXMoJ2luY29tcGxldGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5wdWxsQWxsKHRvZG9saXN0LCBbLi4udG9kb2xpc3RdKVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb2xpc3QucHVzaCguLi5zb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdKVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiB7IGNyZWF0ZVRhc2tzLCB0b2RvbGlzdCwgcmV0cmlldmVUYXNrcywgZGVsZXRlVGFza3MsIGNoYW5nZVN0YXR1cyB9O1xuICAgIH1cbikoKVxuXG5jb25zdCBzb3J0VGFza3MgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzSG9sZGVyID0ge307XG5cbiAgICAgICAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEhlYWQnKS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGlmIChjb2xsZWN0SW5wdXRzLnRvZG9saXN0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdID0gWy4uLl8uZGlmZmVyZW5jZVdpdGgoWy4uLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXV0sIFsuLi5jb2xsZWN0SW5wdXRzLnRvZG9saXN0XSwgXy5pc0VxdWFsKSwgLi4uY29sbGVjdElucHV0cy50b2RvbGlzdF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdID0gWy4uLmNvbGxlY3RJbnB1dHMudG9kb2xpc3RdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RIZWFkJykuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0gPSBbLi4uY29sbGVjdElucHV0cy50b2RvbGlzdF07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKHBOYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXByb2plY3RzSG9sZGVyW3BOYW1lXSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzSG9sZGVyW3BOYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3JlYXRlU29ydGVkQXJyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNIb2xkZXIpXG4gICAgICAgICAgICBjb25zdCBOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEhlYWQnKS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0c0hvbGRlcltOYW1lXS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkID0gcHJvamVjdHNIb2xkZXJbTmFtZV0uc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FmdGVyKG5ldyBEYXRlKGEuZ2V0LkR1ZURhdGUoKSksIG5ldyBEYXRlKGIuZ2V0LkR1ZURhdGUoKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNCZWZvcmUobmV3IERhdGUoYS5nZXQuRHVlRGF0ZSgpKSwgbmV3IERhdGUoYi5nZXQuRHVlRGF0ZSgpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNFcXVhbChuZXcgRGF0ZShhLmdldC5EdWVEYXRlKCkpLCBuZXcgRGF0ZShiLmdldC5EdWVEYXRlKCkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBzb3J0ZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0c0hvbGRlcltOYW1lXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGFkZFByb2plY3QsIGNyZWF0ZVNvcnRlZEFyciwgY3JlYXRlTmV3UHJvamVjdCwgcHJvamVjdHNIb2xkZXIsIHByb2plY3RDaGFuZ2UgfTtcbiAgICB9XG4pKClcblxuZXhwb3J0IHsgY29sbGVjdElucHV0cywgc29ydFRhc2tzIH0iLCJpbXBvcnQgeyByZW5kZXJUYXNrcyB9IGZyb20gJy4vdG9kb2xpc3REaXNwbGF5LmpzJ1xuaW1wb3J0IHsgY29sbGVjdElucHV0cywgc29ydFRhc2tzIH0gZnJvbSAnLi9mb3JtSW5wdXRzLmpzJztcbmltcG9ydCB7IGRhdGVzIH0gZnJvbSAnLi9kYXRlUHJvamVjdC5qcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5cbmNvbnN0IHRhYlN3aXRjaExvZ2ljID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjaGFuZ2VEaXNwbGF5ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoZWFkVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RIZWFkJykuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICBjb25zdCB0YXNrc0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9kVGFza3MnKTtcbiAgICAgICAgICAgIGNvbnN0IGJvZEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RBZGQnKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbGlja2FibGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrYWJsZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdExpc3QnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpY2thYmxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsaWNrYWJsZVtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaWNrYWJsZTIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xpY2thYmxlMltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTJbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NEaXNwbGF5LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tzRGl2LmNoaWxkcmVuW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzRGl2LmNoaWxkcmVuW2ldLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdKSB7XG4gICAgICAgICAgICAgICAgaGVhZFRleHQudGV4dENvbnRlbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkVGV4dC50ZXh0Q29udGVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmlkID09PSAnVG9kYXknIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQgPT09ICdUaGlzIFdlZWsnKSB7XG4gICAgICAgICAgICAgICAgYm9kQWRkLmNsYXNzTGlzdC5hZGQoJ25vRGlzcGxheScpO1xuICAgICAgICAgICAgICAgIGRhdGVzLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIGRhdGVzLmNsZWFyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChib2RBZGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdub0Rpc3BsYXknKSkge1xuICAgICAgICAgICAgICAgICAgICBib2RBZGQuY2xhc3NMaXN0LnJlbW92ZSgnbm9EaXNwbGF5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNvcnRUYXNrcy5jcmVhdGVOZXdQcm9qZWN0KGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlbmRlclRhc2tzLnJlbmRlcigpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5pZCA9PT0gJ1RvZGF5JyB8fCBldmVudC5jdXJyZW50VGFyZ2V0LmlkID09PSAnVGhpcyBXZWVrJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsaWRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJEaXYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbnNEaXYnKTtcbiAgICAgICAgICAgICAgICBzbGlkZXJEaXYuZm9yRWFjaChlbGVtID0+IGVsZW0ucmVtb3ZlKCkpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbnNEaXYuZm9yRWFjaChlbGVtID0+IGVsZW0ucmVtb3ZlKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzb3J0VGFza3MucHJvamVjdHNIb2xkZXIpO1xuICAgICAgICAgICAgXy5wdWxsQWxsKGNvbGxlY3RJbnB1dHMudG9kb2xpc3QsIFsuLi5jb2xsZWN0SW5wdXRzLnRvZG9saXN0XSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjaGFuZ2VEaXNwbGF5IH1cbiAgICB9XG4pKClcblxuZXhwb3J0IHsgdGFiU3dpdGNoTG9naWMgfTsiLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IHRhc2tzID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgaWQpID0+IHtcbiAgICBsZXQgX3RpdGxlID0gdGl0bGU7XG4gICAgbGV0IF9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIGxldCBfZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgbGV0IF9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIGxldCBfc3RhdHVzID0gc3RhdHVzO1xuICAgIGxldCBfaWQgPSBpZDtcblxuICAgIGNvbnN0IGdldCA9IHtcbiAgICAgICAgVGl0bGU6ICgpID0+IF90aXRsZSxcbiAgICAgICAgRGVzY3JpcHRpb246ICgpID0+IF9kZXNjcmlwdGlvbixcbiAgICAgICAgRHVlRGF0ZTogKCkgPT4gX2R1ZURhdGUsXG4gICAgICAgIFByaW9yaXR5OiAoKSA9PiBfcHJpb3JpdHksXG4gICAgICAgIFN0YXR1czogKCkgPT4gX3N0YXR1cyxcbiAgICAgICAgVGltZVJlbWFpbmluZzogKCkgPT4gZm9ybWF0RGlzdGFuY2VUb05vdyhuZXcgRGF0ZShfZHVlRGF0ZSksIHsgYWRkU3VmZml4OiB0cnVlIH0pLFxuICAgICAgICBJZDogKCkgPT4gX2lkLFxuICAgIH1cblxuICAgIGNvbnN0IHNldCA9IHtcbiAgICAgICAgVGl0bGU6IChuZXdUaXRsZSkgPT4gX3RpdGxlID0gbmV3VGl0bGUsXG4gICAgICAgIERlc2NyaXB0aW9uOiAobmV3RGVzY3JpcHRpb24pID0+IF9kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uLFxuICAgICAgICBEdWVEYXRlOiAobmV3RHVlRGF0ZSkgPT4gX2R1ZURhdGUgPSBuZXdEdWVEYXRlLFxuICAgICAgICBQcmlvcml0eTogKG5ld1ByaW9yaXR5KSA9PiBfcHJpb3JpdHkgPSBuZXdQcmlvcml0eSxcbiAgICAgICAgU3RhdHVzOiAobmV3U3RhdHVzKSA9PiBfc3RhdHVzID0gbmV3U3RhdHVzLFxuICAgIH1cblxuICAgIHJldHVybiB7Z2V0LCBzZXQgfVxuXG59XG5cbmV4cG9ydCB7IHRhc2tzIH0iLCJpbXBvcnQgeyBzb3J0VGFza3MgfSBmcm9tICcuL2Zvcm1JbnB1dHMuanMnXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbCdcbmltcG9ydCB7IGFkZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMuanMnO1xuXG5jb25zdCBjcmVhdGVUYXNrc0RpdnMgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZVNsaWRlciA9IChudW0sIGFyciwgZGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzbGlkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNsaWRlckRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NsaWRlckRpdicpO1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3dpdGNoJylcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIGlmIChhcnJbbnVtXS5nZXQuU3RhdHVzKCkgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcicpO1xuICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdyb3VuZCcpO1xuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICBzbGlkZXJEaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNsaWRlckRpdik7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUluZm8gPSAobnVtLCBhcnIsIGRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW5mb0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luZm9EaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgcGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwYXJhMS50ZXh0Q29udGVudCA9IGFycltudW1dLmdldC5UaXRsZSgpICsgJzonO1xuICAgICAgICAgICAgcGFyYTEuc3R5bGVbJ2ZvbnQtc2l6ZSddID0gJzEuNXJlbSc7XG4gICAgICAgICAgICBwYXJhMi50ZXh0Q29udGVudCA9IGFycltudW1dLmdldC5UaW1lUmVtYWluaW5nKCk7XG4gICAgICAgICAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHBhcmExKTtcbiAgICAgICAgICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQocGFyYTIpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGluZm9EaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3JlYXRlQnV0dG9ucyA9IChkaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbjFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbjJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJ1dHRvbjFEaXYuY2xhc3NMaXN0LmFkZCgnZWRpdEJ1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uMURpdi5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYXMgZmEtZWRpdCc+PC9pPlwiO1xuICAgICAgICAgICAgYnV0dG9uMkRpdi5jbGFzc0xpc3QuYWRkKCdkZWxldGVCdXR0b24nKVxuICAgICAgICAgICAgYnV0dG9uMkRpdi5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYXMgZmEtdHJhc2gtYWx0Jz48L2k+XCJcbiAgICAgICAgICAgIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uc0RpdicpXG4gICAgICAgICAgICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGJ1dHRvbjFEaXYpO1xuICAgICAgICAgICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChidXR0b24yRGl2KTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVkaXRDb2xvcnMgPSAobnVtLCBhcnIsIGRpdikgPT4ge1xuICAgICAgICAgICAgaWYgKGFycltudW1dLmdldC5TdGF0dXMoKSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSAnZ3JleSc7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlWydmaWx0ZXInXSA9ICdibHVyKDFweCknO1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZVsnb3BhY2l0eSddID0gMC43O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJbbnVtXS5nZXQuUHJpb3JpdHkoKSA9PT0gJ0hpZ2gnKSB7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9ICdyZWQnXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFycltudW1dLmdldC5Qcmlvcml0eSgpID09PSAnTWVkaXVtJykge1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSAneWVsbG93JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyW251bV0uZ2V0LlByaW9yaXR5KCkgPT09ICdMb3cnKSB7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9ICdjeWFuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHN0b3JlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza3NEaXYnKTtcbiAgICAgICAgICAgIGxldCB0YXNrcyA9IHNvcnRUYXNrcy5jcmVhdGVTb3J0ZWRBcnIoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrRGl2Jyk7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGFza3NbaV0uZ2V0LklkKCl9YCk7XG4gICAgICAgICAgICAgICAgY3JlYXRlU2xpZGVyKGksIHRhc2tzLCB0YXNrRGl2KTtcbiAgICAgICAgICAgICAgICBjcmVhdGVJbmZvKGksIHRhc2tzLCB0YXNrRGl2KTtcbiAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b25zKHRhc2tEaXYpO1xuICAgICAgICAgICAgICAgIGVkaXRDb2xvcnMoaSwgdGFza3MsIHRhc2tEaXYpO1xuICAgICAgICAgICAgICAgIHN0b3JlLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBjcmVhdGUgfVxuICAgIH1cbikoKVxuXG5jb25zdCByZW5kZXJUYXNrcyA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza3NEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZFRhc2tzJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzRGlzcGxheS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRhc2tzRGlzcGxheS5jaGlsZHJlbltpXS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaXYgPSBjcmVhdGVUYXNrc0RpdnMuY3JlYXRlKCk7XG4gICAgICAgICAgICB0YXNrc0Rpc3BsYXkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIGFkZEV2ZW50LmVkaXRCdXR0b25MaXN0ZW5lcigpO1xuICAgICAgICAgICAgYWRkRXZlbnQuZGVsZXRlQnV0dG9uTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIGFkZEV2ZW50LmNvbXBsZXRlQnV0dG9uTGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyByZW5kZXIgfVxuICAgIH1cbikoKVxuXG5leHBvcnQgeyByZW5kZXJUYXNrcyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
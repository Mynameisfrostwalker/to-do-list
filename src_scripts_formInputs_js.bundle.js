"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["src_scripts_formInputs_js"],{

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

/***/ "./src/scripts/Json-function.js":
/*!**************************************!*\
  !*** ./src/scripts/Json-function.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var JSONfn;
if (!JSONfn) {
    JSONfn = {};
}
(function() {
    JSONfn.stringify = function(obj) {
        return JSON.stringify(obj, function(key, value) {
            if (typeof value === "function") {
                return "/Function(" + value.toString() + ")/";
            }
            return value;
        });
    }
    JSONfn.parse = function(str) {
        return JSON.parse(str, function(key, value) {
            if (typeof value === "string" &&
                value.startsWith("/Function(") &&
                value.endsWith(")/")) {
                value = value.substring(10, value.length - 2);
                return (0, eval)("(" + value + ")");
            }
            return value;
        });
    }
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JSONfn);

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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isBefore/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isEqual/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Json_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Json-function.js */ "./src/scripts/Json-function.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage.js */ "./src/scripts/localStorage.js");






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
            localStorage.setItem('todolist', _Json_function_js__WEBPACK_IMPORTED_MODULE_2__.default.stringify((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.obtainValues)(sortTasks.projectsHolder)))
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
                    lodash__WEBPACK_IMPORTED_MODULE_1___default().pullAll(todolist, [...todolist]);
                    todolist.push(...sortTasks.projectsHolder[projectName]);
                    localStorage.setItem('todolist', _Json_function_js__WEBPACK_IMPORTED_MODULE_2__.default.stringify((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.obtainValues)(sortTasks.projectsHolder)));
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
                        localStorage.setItem('todolist', _Json_function_js__WEBPACK_IMPORTED_MODULE_2__.default.stringify((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.obtainValues)(sortTasks.projectsHolder)))

                    } else if (oldStatus === 'complete') {
                        sortTasks.projectsHolder[projectName][i].set.Status('incomplete')
                        lodash__WEBPACK_IMPORTED_MODULE_1___default().pullAll(todolist, [...todolist])
                        todolist.push(...sortTasks.projectsHolder[projectName])
                        localStorage.setItem('todolist', _Json_function_js__WEBPACK_IMPORTED_MODULE_2__.default.stringify((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.obtainValues)(sortTasks.projectsHolder)))

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
                    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(new Date(a.get.DueDate()), new Date(b.get.DueDate()))) {
                        return 1;
                    }
                    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(new Date(a.get.DueDate()), new Date(b.get.DueDate()))) {
                        return -1;
                    }
                    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(new Date(a.get.DueDate()), new Date(b.get.DueDate()))) {
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

/***/ "./src/scripts/localStorage.js":
/*!*************************************!*\
  !*** ./src/scripts/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storage": () => (/* binding */ storage),
/* harmony export */   "obtainValues": () => (/* binding */ obtainValues)
/* harmony export */ });
/* harmony import */ var _formInputs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formInputs.js */ "./src/scripts/formInputs.js");
/* harmony import */ var _todolistDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolistDisplay.js */ "./src/scripts/todolistDisplay.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Json_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Json-function.js */ "./src/scripts/Json-function.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo.js */ "./src/scripts/todo.js");






const storage = () => {
    if (JSON.parse(localStorage.getItem('todolist'))) {
        let valuesObj = _Json_function_js__WEBPACK_IMPORTED_MODULE_3__.default.parse(localStorage.getItem('todolist'));
        let newObj = {};
        for (let key in valuesObj) {
            let arr = [];
            for (let i = 0; i < valuesObj[key].length; i++) {
                arr.push((0,_todo_js__WEBPACK_IMPORTED_MODULE_4__.tasks)(valuesObj[key][i].Title, valuesObj[key][i].Description, valuesObj[key][i].DueDate, valuesObj[key][i].Priority, valuesObj[key][i].Status, valuesObj[key][i].Id))
            }
            newObj[key] = arr;
        }
        lodash__WEBPACK_IMPORTED_MODULE_2___default().assignIn(_formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.projectsHolder, newObj);
        _todolistDisplay_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks.render();
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

    const values = {
        Title: _title,
        Description: _description,
        DueDate: _dueDate,
        Priority: _priority,
        Status: _status,
        Id: _id,
    }

    return {get, set, values }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXlCO0FBQ2pELDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBLDhDQUE4QyxrQkFBa0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtDQUFrQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUVBQTJCO0FBQ3ZDLFlBQVkscUVBQTZCO0FBQ3pDLFlBQVksdUVBQStCO0FBQzNDO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvRG9tRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvSnNvbi1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvZm9ybUlucHV0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy90YWItc3dpdGNoLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy90b2RvbGlzdERpc3BsYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsXCI7XG5pbXBvcnQgeyBhZGRFdmVudCB9IGZyb20gJy4vZXZlbnRzLmpzJztcbmltcG9ydCB7IGNvbGxlY3RJbnB1dHMgfSBmcm9tICcuL2Zvcm1JbnB1dHMuanMnO1xuaW1wb3J0IHsgcmVuZGVyVGFza3MgfSBmcm9tICcuL3RvZG9saXN0RGlzcGxheS5qcyc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IGlucHV0cyA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgY3JlYXRlSW5wdXRzID0gKHR5cGUsIG5hbWUsIGRlc2NyaXB0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIG5hbWUpO1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBkZXNjcmlwdCArIFwiOlwiO1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwidGV4dGFyZWFcIikge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImRhdGVcIikge1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgYCR7Zm9ybWF0KG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgbmV3IERhdGUoKS5nZXRNb250aCgpLCBuZXcgRGF0ZSgpLmdldERhdGUoKSksICd5eXl5LU1NLWRkJyl9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBuYW1lKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGRlc2NyaXB0KTtcbiAgICAgICAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlSW5wdXRzKCd0ZXh0JywgJ3RpdGxlJywgJ1RpdGxlJyk7XG4gICAgICAgIGNyZWF0ZUlucHV0cygndGV4dGFyZWEnLCAnZGVzY3JpcHRpb24nLCAnRGVzY3JpcHRpb24nKTtcbiAgICAgICAgY3JlYXRlSW5wdXRzKCdkYXRlJywgJ2R1ZURhdGUnLCAnRHVlRGF0ZScpO1xuICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0bGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBzZWxlY3RsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0bGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6J1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpXG4gICAgICAgIGNvbnN0IGNyZWF0ZU9wdGlvbnMgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCB2YWx1ZSk7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIFwiXCIpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZU9wdGlvbnMoJycpXG4gICAgICAgIGNyZWF0ZU9wdGlvbnMoJ0hpZ2gnKTtcbiAgICAgICAgY3JlYXRlT3B0aW9ucygnTWVkaXVtJyk7XG4gICAgICAgIGNyZWF0ZU9wdGlvbnMoJ0xvdycpO1xuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtcGFwZXItcGxhbmVcIj4nO1xuICAgICAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgICAgc3VibWl0LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdidXR0b24nKTtcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0Jyk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0bGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgcmV0dXJuIHsgZm9ybSB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IGJhY2tncm91bmQgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBibHVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmx1cicpO1xuICAgICAgICByZXR1cm4geyBibHVyIH1cbiAgICB9XG4pKClcblxuY29uc3QgZm9ybURpc3BsYXkgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250YWluZXInKTtcbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0cy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kLmJsdXIpO1xuICAgICAgICAgICAgYWRkRXZlbnQucHJldmVudEVudGVyKCk7XG4gICAgICAgICAgICBhZGRFdmVudC5zdWJtaXRMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbGxlY3RJbnB1dHMuY3JlYXRlVGFza3MoKTtcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbnMgPSBpbnB1dHMuZm9ybS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5zW2ldLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChpbnB1dHMuZm9ybSk7XG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoYmFja2dyb3VuZC5ibHVyKTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVkaXRGb3JtID0gKHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWUgPSB2YWx1ZXMuZ2V0LlRpdGxlKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZSA9IHZhbHVlcy5nZXQuRGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJykudmFsdWUgPSB2YWx1ZXMuZ2V0LkR1ZURhdGUoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QnKS52YWx1ZSA9IHZhbHVlcy5nZXQuUHJpb3JpdHkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjcmVhdGUsIHJlbW92ZSwgZWRpdEZvcm0gfTtcbiAgICB9XG4pKClcblxuY29uc3QgcHJvamVjdElucHV0ID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBpbnB1dENyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdElucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RJbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBwcm9qZWN0IG5hbWUnKTtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbiAgICAgICAgICAgIHByb2plY3RzQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5wdXRDcmVhdGUpO1xuICAgICAgICAgICAgYWRkRXZlbnQucHJvamVjdHNJbnB1dExpc3RlbmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0RGlzcGxheSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKTtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaXN0JylcbiAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICBhZGRFdmVudC5wcm9qZWN0c0J1dHRvbkxpc3RlbmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0UmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpXG4gICAgICAgICAgICBwcm9qZWN0SW5wdXQucmVtb3ZlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGlucHV0Q3JlYXRlLCBwcm9qZWN0RGlzcGxheSwgcHJvamVjdFJlbW92ZSB9O1xuICAgIH1cbikoKVxuXG5leHBvcnQgeyBmb3JtRGlzcGxheSwgcHJvamVjdElucHV0IH07IiwidmFyIEpTT05mbjtcbmlmICghSlNPTmZuKSB7XG4gICAgSlNPTmZuID0ge307XG59XG4oZnVuY3Rpb24oKSB7XG4gICAgSlNPTmZuLnN0cmluZ2lmeSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIvRnVuY3Rpb24oXCIgKyB2YWx1ZS50b1N0cmluZygpICsgXCIpL1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgSlNPTmZuLnBhcnNlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0ciwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIHZhbHVlLnN0YXJ0c1dpdGgoXCIvRnVuY3Rpb24oXCIpICYmXG4gICAgICAgICAgICAgICAgdmFsdWUuZW5kc1dpdGgoXCIpL1wiKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDEwLCB2YWx1ZS5sZW5ndGggLSAyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDAsIGV2YWwpKFwiKFwiICsgdmFsdWUgKyBcIilcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IEpTT05mbiIsImltcG9ydCB7IGlzVG9kYXksIGlzVGhpc1dlZWsgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IHNvcnRUYXNrcyB9IGZyb20gJy4vZm9ybUlucHV0cy5qcydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IGRhdGVzID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgVG9kYXkgPSBbXTtcbiAgICAgICAgbGV0IFRoaXNXZWVrID0gW107XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbSBpbiBzb3J0VGFza3MucHJvamVjdHNIb2xkZXIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltlbGVtXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUb2RheShuZXcgRGF0ZShzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbZWxlbV1baV0uZ2V0LkR1ZURhdGUoKSkpICYmIGVsZW0gIT09IFwiVG9kYXlcIiAmJiBlbGVtICE9PSAnVGhpcyBXZWVrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgVG9kYXkucHVzaChzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbZWxlbV1baV0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVGhpc1dlZWsobmV3IERhdGUoc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW2VsZW1dW2ldLmdldC5EdWVEYXRlKCkpKSAmJiBlbGVtICE9PSBcIlRvZGF5XCIgJiYgZWxlbSAhPT0gJ1RoaXMgV2VlaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXNXZWVrLnB1c2goc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW2VsZW1dW2ldKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc29ydFRhc2tzLnByb2plY3RzSG9sZGVyWydUb2RheSddID0gWy4uLlRvZGF5XTtcbiAgICAgICAgICAgIHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlclsnVGhpcyBXZWVrJ10gPSBbLi4uVGhpc1dlZWtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBfLnB1bGxBbGwoVG9kYXksIFsuLi5Ub2RheV0pO1xuICAgICAgICAgICAgXy5wdWxsQWxsKFRoaXNXZWVrLCBbLi4uVGhpc1dlZWtdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjcmVhdGUsIGNsZWFyIH1cbiAgICB9XG4pKClcblxuZXhwb3J0IHsgZGF0ZXMgfSIsImltcG9ydCB7IGZvcm1EaXNwbGF5LCBwcm9qZWN0SW5wdXQgfSBmcm9tICcuL0RvbURpc3BsYXkuanMnO1xuaW1wb3J0IHsgY29sbGVjdElucHV0cyB9IGZyb20gJy4vZm9ybUlucHV0cy5qcyc7XG5pbXBvcnQgeyByZW5kZXJUYXNrcyB9IGZyb20gJy4vdG9kb2xpc3REaXNwbGF5LmpzJztcbmltcG9ydCB7IHRhYlN3aXRjaExvZ2ljIH0gZnJvbSAnLi90YWItc3dpdGNoLmpzJztcblxuY29uc3QgYWRkRXZlbnQgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHdpbmRvd0xpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib2RBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjYm9kQWRkJyk7XG4gICAgICAgICAgICAgICAgYm9kQWRkLmNoaWxkcmVuWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZm9ybURpc3BsYXkuY3JlYXRlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3VibWl0TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG4gICAgICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmb3JtRGlzcGxheS5yZW1vdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJldmVudEVudGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWRpdG9yID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBmb3JtRGlzcGxheS5jcmVhdGUoKTtcbiAgICAgICAgICAgIGxldCBvYmogPSBjb2xsZWN0SW5wdXRzLnJldHJpZXZlVGFza3MoZXZlbnQpO1xuICAgICAgICAgICAgZm9ybURpc3BsYXkuZWRpdEZvcm0ob2JqKVxuICAgICAgICAgICAgY29sbGVjdElucHV0cy5kZWxldGVUYXNrcyhvYmouZ2V0LklkKCkpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXRCdXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRCdXR0b24uZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRvcilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsZXRlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29sbGVjdElucHV0cy5kZWxldGVUYXNrcyhldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgICAgICAgICAgcmVuZGVyVGFza3MucmVuZGVyKClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZUJ1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2InKVxuICAgICAgICAgICAgY29sbGVjdElucHV0cy5jaGFuZ2VTdGF0dXMoZXZlbnQpO1xuICAgICAgICAgICAgcmVuZGVyVGFza3MucmVuZGVyKClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlQnV0dG9uTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzbGlkZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyRGl2Jyk7XG4gICAgICAgICAgICBzbGlkZXJEaXYuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhJyk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29tcGxldGVyLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdHNCdXR0b25MaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG4gICAgICAgICAgICBwcm9qZWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RJbnB1dC5pbnB1dENyZWF0ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RzSW5wdXRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdElucHV0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0c0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElucHV0LnByb2plY3REaXNwbGF5KClcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElucHV0LnByb2plY3RSZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdExpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsaWNrYWJsZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xpY2thYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsaWNrYWJsZScpO1xuICAgICAgICAgICAgY2xpY2thYmxlLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhYlN3aXRjaExvZ2ljLmNoYW5nZURpc3BsYXkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RMaXN0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWJTd2l0Y2hMb2dpYy5jaGFuZ2VEaXNwbGF5KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHdpbmRvd0xpc3RlbmVyLCBzdWJtaXRMaXN0ZW5lciwgcHJldmVudEVudGVyLCBlZGl0QnV0dG9uTGlzdGVuZXIsIGRlbGV0ZUJ1dHRvbkxpc3RlbmVyLCBwcm9qZWN0c0J1dHRvbkxpc3RlbmVyLCBwcm9qZWN0c0lucHV0TGlzdGVuZXIsIGNvbXBsZXRlQnV0dG9uTGlzdGVuZXIsIGNsaWNrYWJsZUxpc3RlbmVyLCBwcm9qZWN0TGlzdExpc3RlbmVyIH07XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IGFkZEV2ZW50IH0iLCJpbXBvcnQgeyB0YXNrcyB9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgeyBpc0FmdGVyLCBpc0JlZm9yZSwgaXNFcXVhbCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgSlNPTmZuIGZyb20gJy4vSnNvbi1mdW5jdGlvbi5qcydcbmltcG9ydCB7IG9idGFpblZhbHVlcyB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJ1xuXG5jb25zdCBjb2xsZWN0SW5wdXRzID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgdG9kb2xpc3QgPSBbXTtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBbXTtcblxuICAgICAgICBjb25zdCBjcmVhdGVUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvdW50ZXIucHVzaChudWxsKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QnKTtcbiAgICAgICAgICAgIGlmICh0aXRsZS52YWx1ZSA9PT0gJycgfHwgZHVlRGF0ZS52YWx1ZSA9PT0gJycsIHByaW9yaXR5LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdObyBpbnB1dCBtdXN0IG5vdCBiZSBsZWZ0IGJsYW5rJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvbGlzdC5wdXNoKHRhc2tzKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUsIFwiaW5jb21wbGV0ZVwiLCBjb3VudGVyLmxlbmd0aC50b1N0cmluZygpKSk7XG4gICAgICAgICAgICBzb3J0VGFza3MuYWRkUHJvamVjdCgpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTmZuLnN0cmluZ2lmeShvYnRhaW5WYWx1ZXMoc29ydFRhc2tzLnByb2plY3RzSG9sZGVyKSkpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXRyaWV2ZVRhc2tzID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEhlYWQnKS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGxldCBpZGVudCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlkZW50ID09PSBzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdW2ldLmdldC5JZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucHVsbEFsbCh0b2RvbGlzdCwgWy4uLnRvZG9saXN0XSlcbiAgICAgICAgICAgICAgICAgICAgdG9kb2xpc3QucHVzaCguLi5zb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWxldGVUYXNrcyA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9kSGVhZCcpLmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdW2ldLmdldC5JZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBfLnB1bGxBbGwodG9kb2xpc3QsIFsuLi50b2RvbGlzdF0pO1xuICAgICAgICAgICAgICAgICAgICB0b2RvbGlzdC5wdXNoKC4uLnNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb2xpc3QnLCBKU09OZm4uc3RyaW5naWZ5KG9idGFpblZhbHVlcyhzb3J0VGFza3MucHJvamVjdHNIb2xkZXIpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hhbmdlU3RhdHVzID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEhlYWQnKS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGxldCBpZGVudCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpZGVudCA9PT0gc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXVtpXS5nZXQuSWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2xkU3RhdHVzID0gc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXVtpXS5nZXQuU3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRTdGF0dXMgPT09ICdpbmNvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXVtpXS5zZXQuU3RhdHVzKCdjb21wbGV0ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnB1bGxBbGwodG9kb2xpc3QsIFsuLi50b2RvbGlzdF0pXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvbGlzdC5wdXNoKC4uLnNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb2xpc3QnLCBKU09OZm4uc3RyaW5naWZ5KG9idGFpblZhbHVlcyhzb3J0VGFza3MucHJvamVjdHNIb2xkZXIpKSlcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9sZFN0YXR1cyA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXVtpXS5zZXQuU3RhdHVzKCdpbmNvbXBsZXRlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucHVsbEFsbCh0b2RvbGlzdCwgWy4uLnRvZG9saXN0XSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9saXN0LnB1c2goLi4uc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvbGlzdCcsIEpTT05mbi5zdHJpbmdpZnkob2J0YWluVmFsdWVzKHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcikpKVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiB7IGNyZWF0ZVRhc2tzLCB0b2RvbGlzdCwgcmV0cmlldmVUYXNrcywgZGVsZXRlVGFza3MsIGNoYW5nZVN0YXR1cyB9O1xuICAgIH1cbikoKVxuXG5jb25zdCBzb3J0VGFza3MgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzSG9sZGVyID0ge307XG5cbiAgICAgICAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEhlYWQnKS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGlmIChjb2xsZWN0SW5wdXRzLnRvZG9saXN0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdID0gWy4uLl8uZGlmZmVyZW5jZVdpdGgoWy4uLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXV0sIFsuLi5jb2xsZWN0SW5wdXRzLnRvZG9saXN0XSwgXy5pc0VxdWFsKSwgLi4uY29sbGVjdElucHV0cy50b2RvbGlzdF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdID0gWy4uLmNvbGxlY3RJbnB1dHMudG9kb2xpc3RdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RIZWFkJykuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0gPSBbLi4uY29sbGVjdElucHV0cy50b2RvbGlzdF07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKHBOYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXByb2plY3RzSG9sZGVyW3BOYW1lXSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzSG9sZGVyW3BOYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3JlYXRlU29ydGVkQXJyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNIb2xkZXIpXG4gICAgICAgICAgICBjb25zdCBOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEhlYWQnKS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0c0hvbGRlcltOYW1lXS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkID0gcHJvamVjdHNIb2xkZXJbTmFtZV0uc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FmdGVyKG5ldyBEYXRlKGEuZ2V0LkR1ZURhdGUoKSksIG5ldyBEYXRlKGIuZ2V0LkR1ZURhdGUoKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNCZWZvcmUobmV3IERhdGUoYS5nZXQuRHVlRGF0ZSgpKSwgbmV3IERhdGUoYi5nZXQuRHVlRGF0ZSgpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNFcXVhbChuZXcgRGF0ZShhLmdldC5EdWVEYXRlKCkpLCBuZXcgRGF0ZShiLmdldC5EdWVEYXRlKCkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBzb3J0ZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0c0hvbGRlcltOYW1lXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGFkZFByb2plY3QsIGNyZWF0ZVNvcnRlZEFyciwgY3JlYXRlTmV3UHJvamVjdCwgcHJvamVjdHNIb2xkZXIsIHByb2plY3RDaGFuZ2UgfTtcbiAgICB9XG4pKClcblxuZXhwb3J0IHsgY29sbGVjdElucHV0cywgc29ydFRhc2tzIH0iLCJpbXBvcnQgeyBzb3J0VGFza3MgfSBmcm9tICcuL2Zvcm1JbnB1dHMuanMnO1xuaW1wb3J0IHsgcmVuZGVyVGFza3MgfSBmcm9tICcuL3RvZG9saXN0RGlzcGxheS5qcydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBKU09OZm4gZnJvbSAnLi9Kc29uLWZ1bmN0aW9uLmpzJ1xuaW1wb3J0IHsgdGFza3MgfSBmcm9tICcuL3RvZG8uanMnO1xuXG5jb25zdCBzdG9yYWdlID0gKCkgPT4ge1xuICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvbGlzdCcpKSkge1xuICAgICAgICBsZXQgdmFsdWVzT2JqID0gSlNPTmZuLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvbGlzdCcpKTtcbiAgICAgICAgbGV0IG5ld09iaiA9IHt9O1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzT2JqKSB7XG4gICAgICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlc09ialtrZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2godGFza3ModmFsdWVzT2JqW2tleV1baV0uVGl0bGUsIHZhbHVlc09ialtrZXldW2ldLkRlc2NyaXB0aW9uLCB2YWx1ZXNPYmpba2V5XVtpXS5EdWVEYXRlLCB2YWx1ZXNPYmpba2V5XVtpXS5Qcmlvcml0eSwgdmFsdWVzT2JqW2tleV1baV0uU3RhdHVzLCB2YWx1ZXNPYmpba2V5XVtpXS5JZCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdPYmpba2V5XSA9IGFycjtcbiAgICAgICAgfVxuICAgICAgICBfLmFzc2lnbkluKHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlciwgbmV3T2JqKTtcbiAgICAgICAgcmVuZGVyVGFza3MucmVuZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgJ1tdJylcbiAgICB9XG59XG5cbmNvbnN0IG9idGFpblZhbHVlcyA9IChvYmopID0+IHtcbiAgICBjb25zdCBuZXdPYmogPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmpba2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV3T2JqW2tleV0ucHVzaChvYmpba2V5XVtpXS52YWx1ZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdPYmo7XG59XG5cbmV4cG9ydCB7IHN0b3JhZ2UsIG9idGFpblZhbHVlcyB9IiwiaW1wb3J0IHsgcmVuZGVyVGFza3MgfSBmcm9tICcuL3RvZG9saXN0RGlzcGxheS5qcydcbmltcG9ydCB7IGNvbGxlY3RJbnB1dHMsIHNvcnRUYXNrcyB9IGZyb20gJy4vZm9ybUlucHV0cy5qcyc7XG5pbXBvcnQgeyBkYXRlcyB9IGZyb20gJy4vZGF0ZVByb2plY3QuanMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuXG5jb25zdCB0YWJTd2l0Y2hMb2dpYyA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlRGlzcGxheSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGVhZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9kSGVhZCcpLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgY29uc3QgdGFza3NEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZFRhc2tzJyk7XG4gICAgICAgICAgICBjb25zdCBib2RBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9kQWRkJyk7XG4gICAgICAgICAgICBjb25zdCBjbGlja2FibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xpY2thYmxlJyk7XG4gICAgICAgICAgICBjb25zdCBjbGlja2FibGUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RMaXN0Jyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaWNrYWJsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjbGlja2FibGVbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlja2FibGUyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsaWNrYWJsZTJbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGUyW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzRGlzcGxheS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrc0Rpdi5jaGlsZHJlbltpXSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrc0Rpdi5jaGlsZHJlbltpXS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXSkge1xuICAgICAgICAgICAgICAgIGhlYWRUZXh0LnRleHRDb250ZW50ID0gZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZFRleHQudGV4dENvbnRlbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5pZCA9PT0gJ1RvZGF5JyB8fCBldmVudC5jdXJyZW50VGFyZ2V0LmlkID09PSAnVGhpcyBXZWVrJykge1xuICAgICAgICAgICAgICAgIGJvZEFkZC5jbGFzc0xpc3QuYWRkKCdub0Rpc3BsYXknKTtcbiAgICAgICAgICAgICAgICBkYXRlcy5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICBkYXRlcy5jbGVhcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9kQWRkLmNsYXNzTGlzdC5jb250YWlucygnbm9EaXNwbGF5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9kQWRkLmNsYXNzTGlzdC5yZW1vdmUoJ25vRGlzcGxheScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzb3J0VGFza3MuY3JlYXRlTmV3UHJvamVjdChldmVudC50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW5kZXJUYXNrcy5yZW5kZXIoKTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQgPT09ICdUb2RheScgfHwgZXZlbnQuY3VycmVudFRhcmdldC5pZCA9PT0gJ1RoaXMgV2VlaycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzbGlkZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyRGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b25zRGl2Jyk7XG4gICAgICAgICAgICAgICAgc2xpZGVyRGl2LmZvckVhY2goZWxlbSA9PiBlbGVtLnJlbW92ZSgpKTtcbiAgICAgICAgICAgICAgICBidXR0b25zRGl2LmZvckVhY2goZWxlbSA9PiBlbGVtLnJlbW92ZSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coc29ydFRhc2tzLnByb2plY3RzSG9sZGVyKTtcbiAgICAgICAgICAgIF8ucHVsbEFsbChjb2xsZWN0SW5wdXRzLnRvZG9saXN0LCBbLi4uY29sbGVjdElucHV0cy50b2RvbGlzdF0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY2hhbmdlRGlzcGxheSB9XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IHRhYlN3aXRjaExvZ2ljIH07IiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2VUb05vdyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCB0YXNrcyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIGlkKSA9PiB7XG4gICAgbGV0IF90aXRsZSA9IHRpdGxlO1xuICAgIGxldCBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBsZXQgX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIGxldCBfcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBsZXQgX3N0YXR1cyA9IHN0YXR1cztcbiAgICBsZXQgX2lkID0gaWQ7XG5cbiAgICBjb25zdCBnZXQgPSB7XG4gICAgICAgIFRpdGxlOiAoKSA9PiBfdGl0bGUsXG4gICAgICAgIERlc2NyaXB0aW9uOiAoKSA9PiBfZGVzY3JpcHRpb24sXG4gICAgICAgIER1ZURhdGU6ICgpID0+IF9kdWVEYXRlLFxuICAgICAgICBQcmlvcml0eTogKCkgPT4gX3ByaW9yaXR5LFxuICAgICAgICBTdGF0dXM6ICgpID0+IF9zdGF0dXMsXG4gICAgICAgIFRpbWVSZW1haW5pbmc6ICgpID0+IGZvcm1hdERpc3RhbmNlVG9Ob3cobmV3IERhdGUoX2R1ZURhdGUpLCB7IGFkZFN1ZmZpeDogdHJ1ZSB9KSxcbiAgICAgICAgSWQ6ICgpID0+IF9pZCxcbiAgICB9XG5cbiAgICBjb25zdCBzZXQgPSB7XG4gICAgICAgIFRpdGxlOiAobmV3VGl0bGUpID0+IF90aXRsZSA9IG5ld1RpdGxlLFxuICAgICAgICBEZXNjcmlwdGlvbjogKG5ld0Rlc2NyaXB0aW9uKSA9PiBfZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbixcbiAgICAgICAgRHVlRGF0ZTogKG5ld0R1ZURhdGUpID0+IF9kdWVEYXRlID0gbmV3RHVlRGF0ZSxcbiAgICAgICAgUHJpb3JpdHk6IChuZXdQcmlvcml0eSkgPT4gX3ByaW9yaXR5ID0gbmV3UHJpb3JpdHksXG4gICAgICAgIFN0YXR1czogKG5ld1N0YXR1cykgPT4gX3N0YXR1cyA9IG5ld1N0YXR1cyxcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICAgIFRpdGxlOiBfdGl0bGUsXG4gICAgICAgIERlc2NyaXB0aW9uOiBfZGVzY3JpcHRpb24sXG4gICAgICAgIER1ZURhdGU6IF9kdWVEYXRlLFxuICAgICAgICBQcmlvcml0eTogX3ByaW9yaXR5LFxuICAgICAgICBTdGF0dXM6IF9zdGF0dXMsXG4gICAgICAgIElkOiBfaWQsXG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXQsIHNldCwgdmFsdWVzIH1cblxufVxuXG5leHBvcnQgeyB0YXNrcyB9IiwiaW1wb3J0IHsgc29ydFRhc2tzIH0gZnJvbSAnLi9mb3JtSW5wdXRzLmpzJ1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwnXG5pbXBvcnQgeyBhZGRFdmVudCB9IGZyb20gJy4vZXZlbnRzLmpzJztcblxuY29uc3QgY3JlYXRlVGFza3NEaXZzID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjcmVhdGVTbGlkZXIgPSAobnVtLCBhcnIsIGRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2xpZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzbGlkZXJEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzbGlkZXJEaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICBpZiAoYXJyW251bV0uZ2V0LlN0YXR1cygpID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdzbGlkZXInKTtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgncm91bmQnKTtcbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgc2xpZGVyRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChzbGlkZXJEaXYpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCBjcmVhdGVJbmZvID0gKG51bSwgYXJyLCBkaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGluZm9EaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbmZvRGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBwYXJhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcGFyYTEudGV4dENvbnRlbnQgPSBhcnJbbnVtXS5nZXQuVGl0bGUoKSArICc6JztcbiAgICAgICAgICAgIHBhcmExLnN0eWxlWydmb250LXNpemUnXSA9ICcxLjVyZW0nO1xuICAgICAgICAgICAgcGFyYTIudGV4dENvbnRlbnQgPSBhcnJbbnVtXS5nZXQuVGltZVJlbWFpbmluZygpO1xuICAgICAgICAgICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChwYXJhMSk7XG4gICAgICAgICAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHBhcmEyKTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbmZvRGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbnMgPSAoZGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBidXR0b24xRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBidXR0b24yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBidXR0b24xRGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXRCdXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbjFEaXYuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmFzIGZhLWVkaXQnPjwvaT5cIjtcbiAgICAgICAgICAgIGJ1dHRvbjJEaXYuY2xhc3NMaXN0LmFkZCgnZGVsZXRlQnV0dG9uJylcbiAgICAgICAgICAgIGJ1dHRvbjJEaXYuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmFzIGZhLXRyYXNoLWFsdCc+PC9pPlwiXG4gICAgICAgICAgICBidXR0b25zRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnNEaXYnKVxuICAgICAgICAgICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChidXR0b24xRGl2KTtcbiAgICAgICAgICAgIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uMkRpdik7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uc0Rpdik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlZGl0Q29sb3JzID0gKG51bSwgYXJyLCBkaXYpID0+IHtcbiAgICAgICAgICAgIGlmIChhcnJbbnVtXS5nZXQuU3RhdHVzKCkgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gJ2dyZXknO1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZVsnZmlsdGVyJ10gPSAnYmx1cigxcHgpJztcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGVbJ29wYWNpdHknXSA9IDAuNztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyW251bV0uZ2V0LlByaW9yaXR5KCkgPT09ICdIaWdoJykge1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSAncmVkJ1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJbbnVtXS5nZXQuUHJpb3JpdHkoKSA9PT0gJ01lZGl1bScpIHtcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gJ3llbGxvdyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFycltudW1dLmdldC5Qcmlvcml0eSgpID09PSAnTG93Jykge1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSAnY3lhbic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBzdG9yZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tzRGl2Jyk7XG4gICAgICAgICAgICBsZXQgdGFza3MgPSBzb3J0VGFza3MuY3JlYXRlU29ydGVkQXJyKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFza0RpdicpO1xuICAgICAgICAgICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Rhc2tzW2ldLmdldC5JZCgpfWApO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVNsaWRlcihpLCB0YXNrcywgdGFza0Rpdik7XG4gICAgICAgICAgICAgICAgY3JlYXRlSW5mbyhpLCB0YXNrcywgdGFza0Rpdik7XG4gICAgICAgICAgICAgICAgY3JlYXRlQnV0dG9ucyh0YXNrRGl2KTtcbiAgICAgICAgICAgICAgICBlZGl0Q29sb3JzKGksIHRhc2tzLCB0YXNrRGl2KTtcbiAgICAgICAgICAgICAgICBzdG9yZS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdG9yZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlIH1cbiAgICB9XG4pKClcblxuY29uc3QgcmVuZGVyVGFza3MgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RUYXNrcycpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc0Rpc3BsYXkuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0YXNrc0Rpc3BsYXkuY2hpbGRyZW5baV0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGl2ID0gY3JlYXRlVGFza3NEaXZzLmNyZWF0ZSgpO1xuICAgICAgICAgICAgdGFza3NEaXNwbGF5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICBhZGRFdmVudC5lZGl0QnV0dG9uTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIGFkZEV2ZW50LmRlbGV0ZUJ1dHRvbkxpc3RlbmVyKCk7XG4gICAgICAgICAgICBhZGRFdmVudC5jb21wbGV0ZUJ1dHRvbkxpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcmVuZGVyIH1cbiAgICB9XG4pKClcblxuZXhwb3J0IHsgcmVuZGVyVGFza3MgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
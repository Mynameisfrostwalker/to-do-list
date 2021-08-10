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
        };

        const projectDisplay = () => {
            const projectName = document.querySelector('#projectInput').value;
            const projectList = document.querySelector('#projectList');
            const li = document.createElement('li');
            li.classList.add('projectList')
            li.textContent = projectName;
            const icon = document.createElement('i');
            const div = document.createElement('div');
            div.classList.add('removeButton')
            icon.classList.add('fas');
            icon.classList.add('fa-window-close');
            projectList.appendChild(li);
            div.appendChild(icon);
            li.appendChild(div);
            _events_js__WEBPACK_IMPORTED_MODULE_1__.addEvent.projectsButtonListener();
            _events_js__WEBPACK_IMPORTED_MODULE_1__.addEvent.removeButtonListener();
        };

        const projectInputRemove = () => {
            const projectInput = document.querySelector('#projectInput')
            projectInput.remove()
        };

        const projectRemove = (event) => {
            const pName = event.currentTarget.previousSibling.textContent;
            event.currentTarget.parentNode.remove();
            _formInputs_js__WEBPACK_IMPORTED_MODULE_2__.sortTasks.deleteProject(pName);
            event.stopPropagation();
        };

        return { inputCreate, projectDisplay, projectInputRemove, projectRemove };
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
                    _DomDisplay_js__WEBPACK_IMPORTED_MODULE_0__.projectInput.projectInputRemove()
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

        const removeButtonListener = () => {
            const removeButtons = document.querySelectorAll('.removeButton');
            removeButtons.forEach(elem => {
                elem.addEventListener('click', _DomDisplay_js__WEBPACK_IMPORTED_MODULE_0__.projectInput.projectRemove)
            })
        }

        return { windowListener, submitListener, preventEnter, editButtonListener, deleteButtonListener, projectsButtonListener, projectsInputListener, completeButtonListener, clickableListener, projectListListener, removeButtonListener };
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

        const deleteProject = (name) => {
            delete projectsHolder[name];
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
        return { addProject, createSortedArr, createNewProject, projectsHolder, projectChange, deleteProject };
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
        _todolistDisplay_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks.renderProjects();
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

        const renderProjects = () => {
            for (let elem in _formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.projectsHolder) {
                if (elem !== 'Default') {
                    const projectList = document.querySelector('#projectList');
                    const li = document.createElement('li');
                    li.classList.add('projectList')
                    li.textContent = elem;
                    const icon = document.createElement('i');
                    const div = document.createElement('div');
                    div.classList.add('removeButton');
                    icon.classList.add('fas');
                    icon.classList.add('fa-window-close');
                    projectList.appendChild(li);
                    div.appendChild(icon);
                    li.appendChild(div);
                    _events_js__WEBPACK_IMPORTED_MODULE_2__.addEvent.projectsButtonListener();
                    _events_js__WEBPACK_IMPORTED_MODULE_2__.addEvent.removeButtonListener();
                }
            }
            _events_js__WEBPACK_IMPORTED_MODULE_2__.addEvent.projectListListener();
        }

        return { render, renderProjects }
    }
)()



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUVBQXlCO0FBQ2pELDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBLDhDQUE4QyxrQkFBa0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtDQUFrQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUVBQTJCO0FBQ3ZDLFlBQVkscUVBQTZCO0FBQ3pDLFlBQVksdUVBQStCO0FBQzNDOztBQUVBO0FBQ0EsNkJBQTZCLG9FQUF3QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1RUFBK0I7QUFDbkQsb0JBQW9CLHFFQUE2QjtBQUNqRDtBQUNBO0FBQ0EsWUFBWSxvRUFBNEI7QUFDeEM7O0FBRUEsaUJBQWlCO0FBQ2pCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvRG9tRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvSnNvbi1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvZm9ybUlucHV0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy90YWItc3dpdGNoLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy90b2RvbGlzdERpc3BsYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsXCI7XG5pbXBvcnQgeyBhZGRFdmVudCB9IGZyb20gJy4vZXZlbnRzLmpzJztcbmltcG9ydCB7IGNvbGxlY3RJbnB1dHMsIHNvcnRUYXNrcyB9IGZyb20gJy4vZm9ybUlucHV0cy5qcyc7XG5pbXBvcnQgeyByZW5kZXJUYXNrcyB9IGZyb20gJy4vdG9kb2xpc3REaXNwbGF5LmpzJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgaW5wdXRzID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBjb25zdCBjcmVhdGVJbnB1dHMgPSAodHlwZSwgbmFtZSwgZGVzY3JpcHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgbmFtZSk7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGRlc2NyaXB0ICsgXCI6XCI7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJ0ZXh0YXJlYVwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiZGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCBgJHtmb3JtYXQobmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCBuZXcgRGF0ZSgpLmdldE1vbnRoKCksIG5ldyBEYXRlKCkuZ2V0RGF0ZSgpKSwgJ3l5eXktTU0tZGQnKX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgZGVzY3JpcHQpO1xuICAgICAgICAgICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVJbnB1dHMoJ3RleHQnLCAndGl0bGUnLCAnVGl0bGUnKTtcbiAgICAgICAgY3JlYXRlSW5wdXRzKCd0ZXh0YXJlYScsICdkZXNjcmlwdGlvbicsICdEZXNjcmlwdGlvbicpO1xuICAgICAgICBjcmVhdGVJbnB1dHMoJ2RhdGUnLCAnZHVlRGF0ZScsICdEdWVEYXRlJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBjb25zdCBzZWxlY3RsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHNlbGVjdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3RsYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonXG4gICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5JylcbiAgICAgICAgY29uc3QgY3JlYXRlT3B0aW9ucyA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIHZhbHVlKTtcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgXCJcIik7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlT3B0aW9ucygnJylcbiAgICAgICAgY3JlYXRlT3B0aW9ucygnSGlnaCcpO1xuICAgICAgICBjcmVhdGVPcHRpb25zKCdNZWRpdW0nKTtcbiAgICAgICAgY3JlYXRlT3B0aW9ucygnTG93Jyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1wYXBlci1wbGFuZVwiPic7XG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgICAgICBzdWJtaXQuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQnKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3RsYWJlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgICAgICByZXR1cm4geyBmb3JtIH1cbiAgICB9XG4pKClcblxuY29uc3QgYmFja2dyb3VuZCA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgYmx1ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGJsdXIuc2V0QXR0cmlidXRlKCdpZCcsICdibHVyJyk7XG4gICAgICAgIHJldHVybiB7IGJsdXIgfVxuICAgIH1cbikoKVxuXG5jb25zdCBmb3JtRGlzcGxheSA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRzLmZvcm0pO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tncm91bmQuYmx1cik7XG4gICAgICAgICAgICBhZGRFdmVudC5wcmV2ZW50RW50ZXIoKTtcbiAgICAgICAgICAgIGFkZEV2ZW50LnN1Ym1pdExpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29sbGVjdElucHV0cy5jcmVhdGVUYXNrcygpO1xuICAgICAgICAgICAgbGV0IGNoaWxkcmVucyA9IGlucHV0cy5mb3JtLmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbnNbaV0udmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGlucHV0cy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChiYWNrZ3JvdW5kLmJsdXIpO1xuICAgICAgICAgICAgcmVuZGVyVGFza3MucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWRpdEZvcm0gPSAodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZSA9IHZhbHVlcy5nZXQuVGl0bGUoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnZhbHVlID0gdmFsdWVzLmdldC5EZXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKS52YWx1ZSA9IHZhbHVlcy5nZXQuRHVlRGF0ZSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdCcpLnZhbHVlID0gdmFsdWVzLmdldC5Qcmlvcml0eSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSwgcmVtb3ZlLCBlZGl0Rm9ybSB9O1xuICAgIH1cbikoKVxuXG5jb25zdCBwcm9qZWN0SW5wdXQgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGlucHV0Q3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0SW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdElucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIHByb2plY3QgbmFtZScpO1xuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuICAgICAgICAgICAgcHJvamVjdHNCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbnB1dENyZWF0ZSk7XG4gICAgICAgICAgICBhZGRFdmVudC5wcm9qZWN0c0lucHV0TGlzdGVuZXIoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RGlzcGxheSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKTtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaXN0JylcbiAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncmVtb3ZlQnV0dG9uJylcbiAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnZmFzJyk7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXdpbmRvdy1jbG9zZScpO1xuICAgICAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIGFkZEV2ZW50LnByb2plY3RzQnV0dG9uTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIGFkZEV2ZW50LnJlbW92ZUJ1dHRvbkxpc3RlbmVyKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcHJvamVjdElucHV0UmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpXG4gICAgICAgICAgICBwcm9qZWN0SW5wdXQucmVtb3ZlKClcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0UmVtb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwTmFtZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucHJldmlvdXNTaWJsaW5nLnRleHRDb250ZW50O1xuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgc29ydFRhc2tzLmRlbGV0ZVByb2plY3QocE5hbWUpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHsgaW5wdXRDcmVhdGUsIHByb2plY3REaXNwbGF5LCBwcm9qZWN0SW5wdXRSZW1vdmUsIHByb2plY3RSZW1vdmUgfTtcbiAgICB9XG4pKClcblxuZXhwb3J0IHsgZm9ybURpc3BsYXksIHByb2plY3RJbnB1dCB9OyIsInZhciBKU09OZm47XG5pZiAoIUpTT05mbikge1xuICAgIEpTT05mbiA9IHt9O1xufVxuKGZ1bmN0aW9uKCkge1xuICAgIEpTT05mbi5zdHJpbmdpZnkgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaiwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiL0Z1bmN0aW9uKFwiICsgdmFsdWUudG9TdHJpbmcoKSArIFwiKS9cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEpTT05mbi5wYXJzZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICB2YWx1ZS5zdGFydHNXaXRoKFwiL0Z1bmN0aW9uKFwiKSAmJlxuICAgICAgICAgICAgICAgIHZhbHVlLmVuZHNXaXRoKFwiKS9cIikpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygxMCwgdmFsdWUubGVuZ3RoIC0gMik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBldmFsKShcIihcIiArIHZhbHVlICsgXCIpXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG59KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBKU09OZm4iLCJpbXBvcnQgeyBpc1RvZGF5LCBpc1RoaXNXZWVrIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBzb3J0VGFza3MgfSBmcm9tICcuL2Zvcm1JbnB1dHMuanMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBkYXRlcyA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IFRvZGF5ID0gW107XG4gICAgICAgIGxldCBUaGlzV2VlayA9IFtdO1xuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW0gaW4gc29ydFRhc2tzLnByb2plY3RzSG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbZWxlbV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVG9kYXkobmV3IERhdGUoc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW2VsZW1dW2ldLmdldC5EdWVEYXRlKCkpKSAmJiBlbGVtICE9PSBcIlRvZGF5XCIgJiYgZWxlbSAhPT0gJ1RoaXMgV2VlaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvZGF5LnB1c2goc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW2VsZW1dW2ldKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RoaXNXZWVrKG5ldyBEYXRlKHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltlbGVtXVtpXS5nZXQuRHVlRGF0ZSgpKSkgJiYgZWxlbSAhPT0gXCJUb2RheVwiICYmIGVsZW0gIT09ICdUaGlzIFdlZWsnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzV2Vlay5wdXNoKHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltlbGVtXVtpXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlclsnVG9kYXknXSA9IFsuLi5Ub2RheV07XG4gICAgICAgICAgICBzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbJ1RoaXMgV2VlayddID0gWy4uLlRoaXNXZWVrXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgICAgICAgICAgXy5wdWxsQWxsKFRvZGF5LCBbLi4uVG9kYXldKTtcbiAgICAgICAgICAgIF8ucHVsbEFsbChUaGlzV2VlaywgWy4uLlRoaXNXZWVrXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlLCBjbGVhciB9XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IGRhdGVzIH0iLCJpbXBvcnQgeyBmb3JtRGlzcGxheSwgcHJvamVjdElucHV0IH0gZnJvbSAnLi9Eb21EaXNwbGF5LmpzJztcbmltcG9ydCB7IGNvbGxlY3RJbnB1dHMgfSBmcm9tICcuL2Zvcm1JbnB1dHMuanMnO1xuaW1wb3J0IHsgcmVuZGVyVGFza3MgfSBmcm9tICcuL3RvZG9saXN0RGlzcGxheS5qcyc7XG5pbXBvcnQgeyB0YWJTd2l0Y2hMb2dpYyB9IGZyb20gJy4vdGFiLXN3aXRjaC5qcyc7XG5cbmNvbnN0IGFkZEV2ZW50ID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB3aW5kb3dMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9kQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2JvZEFkZCcpO1xuICAgICAgICAgICAgICAgIGJvZEFkZC5jaGlsZHJlblswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZvcm1EaXNwbGF5LmNyZWF0ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN1Ym1pdExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdCcpO1xuICAgICAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZm9ybURpc3BsYXkucmVtb3ZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXZlbnRFbnRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVkaXRvciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgZm9ybURpc3BsYXkuY3JlYXRlKCk7XG4gICAgICAgICAgICBsZXQgb2JqID0gY29sbGVjdElucHV0cy5yZXRyaWV2ZVRhc2tzKGV2ZW50KTtcbiAgICAgICAgICAgIGZvcm1EaXNwbGF5LmVkaXRGb3JtKG9iailcbiAgICAgICAgICAgIGNvbGxlY3RJbnB1dHMuZGVsZXRlVGFza3Mob2JqLmdldC5JZCgpKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0QnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0b3IpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbGxlY3RJbnB1dHMuZGVsZXRlVGFza3MoZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzLnJlbmRlcigpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b25MaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVCdXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wbGV0ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiJylcbiAgICAgICAgICAgIGNvbGxlY3RJbnB1dHMuY2hhbmdlU3RhdHVzKGV2ZW50KTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzLnJlbmRlcigpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wbGV0ZUJ1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2xpZGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlckRpdicpO1xuICAgICAgICAgICAgc2xpZGVyRGl2LmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYScpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbXBsZXRlciwge1xuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RzQnV0dG9uTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuICAgICAgICAgICAgcHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0SW5wdXQuaW5wdXRDcmVhdGUpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0c0lucHV0TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdHNJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RJbnB1dC5wcm9qZWN0RGlzcGxheSgpXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RJbnB1dC5wcm9qZWN0SW5wdXRSZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdExpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsaWNrYWJsZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xpY2thYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsaWNrYWJsZScpO1xuICAgICAgICAgICAgY2xpY2thYmxlLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhYlN3aXRjaExvZ2ljLmNoYW5nZURpc3BsYXkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RMaXN0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWJTd2l0Y2hMb2dpYy5jaGFuZ2VEaXNwbGF5KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmVCdXR0b24nKTtcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbnMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdElucHV0LnByb2plY3RSZW1vdmUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgd2luZG93TGlzdGVuZXIsIHN1Ym1pdExpc3RlbmVyLCBwcmV2ZW50RW50ZXIsIGVkaXRCdXR0b25MaXN0ZW5lciwgZGVsZXRlQnV0dG9uTGlzdGVuZXIsIHByb2plY3RzQnV0dG9uTGlzdGVuZXIsIHByb2plY3RzSW5wdXRMaXN0ZW5lciwgY29tcGxldGVCdXR0b25MaXN0ZW5lciwgY2xpY2thYmxlTGlzdGVuZXIsIHByb2plY3RMaXN0TGlzdGVuZXIsIHJlbW92ZUJ1dHRvbkxpc3RlbmVyIH07XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IGFkZEV2ZW50IH0iLCJpbXBvcnQgeyB0YXNrcyB9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgeyBpc0FmdGVyLCBpc0JlZm9yZSwgaXNFcXVhbCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgSlNPTmZuIGZyb20gJy4vSnNvbi1mdW5jdGlvbi5qcydcbmltcG9ydCB7IG9idGFpblZhbHVlcyB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJ1xuXG5jb25zdCBjb2xsZWN0SW5wdXRzID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgdG9kb2xpc3QgPSBbXTtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBbXTtcblxuICAgICAgICBjb25zdCBjcmVhdGVUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvdW50ZXIucHVzaChudWxsKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QnKTtcbiAgICAgICAgICAgIGlmICh0aXRsZS52YWx1ZSA9PT0gJycgfHwgZHVlRGF0ZS52YWx1ZSA9PT0gJycsIHByaW9yaXR5LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdObyBpbnB1dCBtdXN0IG5vdCBiZSBsZWZ0IGJsYW5rJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvbGlzdC5wdXNoKHRhc2tzKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUsIFwiaW5jb21wbGV0ZVwiLCBjb3VudGVyLmxlbmd0aC50b1N0cmluZygpKSk7XG4gICAgICAgICAgICBzb3J0VGFza3MuYWRkUHJvamVjdCgpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTmZuLnN0cmluZ2lmeShvYnRhaW5WYWx1ZXMoc29ydFRhc2tzLnByb2plY3RzSG9sZGVyKSkpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXRyaWV2ZVRhc2tzID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEhlYWQnKS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGxldCBpZGVudCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlkZW50ID09PSBzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdW2ldLmdldC5JZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucHVsbEFsbCh0b2RvbGlzdCwgWy4uLnRvZG9saXN0XSlcbiAgICAgICAgICAgICAgICAgICAgdG9kb2xpc3QucHVzaCguLi5zb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWxldGVUYXNrcyA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9kSGVhZCcpLmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdW2ldLmdldC5JZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBfLnB1bGxBbGwodG9kb2xpc3QsIFsuLi50b2RvbGlzdF0pO1xuICAgICAgICAgICAgICAgICAgICB0b2RvbGlzdC5wdXNoKC4uLnNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb2xpc3QnLCBKU09OZm4uc3RyaW5naWZ5KG9idGFpblZhbHVlcyhzb3J0VGFza3MucHJvamVjdHNIb2xkZXIpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hhbmdlU3RhdHVzID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEhlYWQnKS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGxldCBpZGVudCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpZGVudCA9PT0gc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXVtpXS5nZXQuSWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2xkU3RhdHVzID0gc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXVtpXS5nZXQuU3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRTdGF0dXMgPT09ICdpbmNvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXVtpXS5zZXQuU3RhdHVzKCdjb21wbGV0ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnB1bGxBbGwodG9kb2xpc3QsIFsuLi50b2RvbGlzdF0pXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvbGlzdC5wdXNoKC4uLnNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb2xpc3QnLCBKU09OZm4uc3RyaW5naWZ5KG9idGFpblZhbHVlcyhzb3J0VGFza3MucHJvamVjdHNIb2xkZXIpKSlcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9sZFN0YXR1cyA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXVtpXS5zZXQuU3RhdHVzKCdpbmNvbXBsZXRlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucHVsbEFsbCh0b2RvbGlzdCwgWy4uLnRvZG9saXN0XSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9saXN0LnB1c2goLi4uc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvbGlzdCcsIEpTT05mbi5zdHJpbmdpZnkob2J0YWluVmFsdWVzKHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcikpKVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiB7IGNyZWF0ZVRhc2tzLCB0b2RvbGlzdCwgcmV0cmlldmVUYXNrcywgZGVsZXRlVGFza3MsIGNoYW5nZVN0YXR1cyB9O1xuICAgIH1cbikoKVxuXG5jb25zdCBzb3J0VGFza3MgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzSG9sZGVyID0ge307XG5cbiAgICAgICAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEhlYWQnKS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGlmIChjb2xsZWN0SW5wdXRzLnRvZG9saXN0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdID0gWy4uLl8uZGlmZmVyZW5jZVdpdGgoWy4uLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXV0sIFsuLi5jb2xsZWN0SW5wdXRzLnRvZG9saXN0XSwgXy5pc0VxdWFsKSwgLi4uY29sbGVjdElucHV0cy50b2RvbGlzdF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdID0gWy4uLmNvbGxlY3RJbnB1dHMudG9kb2xpc3RdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RIZWFkJykuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0gPSBbLi4uY29sbGVjdElucHV0cy50b2RvbGlzdF07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKHBOYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXByb2plY3RzSG9sZGVyW3BOYW1lXSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzSG9sZGVyW3BOYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgcHJvamVjdHNIb2xkZXJbbmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVTb3J0ZWRBcnIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0hvbGRlcilcbiAgICAgICAgICAgIGNvbnN0IE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9kSGVhZCcpLmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgaWYgKHByb2plY3RzSG9sZGVyW05hbWVdLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBwcm9qZWN0c0hvbGRlcltOYW1lXS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQWZ0ZXIobmV3IERhdGUoYS5nZXQuRHVlRGF0ZSgpKSwgbmV3IERhdGUoYi5nZXQuRHVlRGF0ZSgpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0JlZm9yZShuZXcgRGF0ZShhLmdldC5EdWVEYXRlKCkpLCBuZXcgRGF0ZShiLmdldC5EdWVEYXRlKCkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0VxdWFsKG5ldyBEYXRlKGEuZ2V0LkR1ZURhdGUoKSksIG5ldyBEYXRlKGIuZ2V0LkR1ZURhdGUoKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvcnRlZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzSG9sZGVyW05hbWVdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgYWRkUHJvamVjdCwgY3JlYXRlU29ydGVkQXJyLCBjcmVhdGVOZXdQcm9qZWN0LCBwcm9qZWN0c0hvbGRlciwgcHJvamVjdENoYW5nZSwgZGVsZXRlUHJvamVjdCB9O1xuICAgIH1cbikoKVxuXG5leHBvcnQgeyBjb2xsZWN0SW5wdXRzLCBzb3J0VGFza3MgfSIsImltcG9ydCB7IHNvcnRUYXNrcyB9IGZyb20gJy4vZm9ybUlucHV0cy5qcyc7XG5pbXBvcnQgeyByZW5kZXJUYXNrcyB9IGZyb20gJy4vdG9kb2xpc3REaXNwbGF5LmpzJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IEpTT05mbiBmcm9tICcuL0pzb24tZnVuY3Rpb24uanMnXG5pbXBvcnQgeyB0YXNrcyB9IGZyb20gJy4vdG9kby5qcyc7XG5cbmNvbnN0IHN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9saXN0JykpKSB7XG4gICAgICAgIGxldCB2YWx1ZXNPYmogPSBKU09OZm4ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9saXN0JykpO1xuICAgICAgICBsZXQgbmV3T2JqID0ge307XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZXNPYmopIHtcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzT2JqW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaCh0YXNrcyh2YWx1ZXNPYmpba2V5XVtpXS5UaXRsZSwgdmFsdWVzT2JqW2tleV1baV0uRGVzY3JpcHRpb24sIHZhbHVlc09ialtrZXldW2ldLkR1ZURhdGUsIHZhbHVlc09ialtrZXldW2ldLlByaW9yaXR5LCB2YWx1ZXNPYmpba2V5XVtpXS5TdGF0dXMsIHZhbHVlc09ialtrZXldW2ldLklkKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld09ialtrZXldID0gYXJyO1xuICAgICAgICB9XG4gICAgICAgIF8uYXNzaWduSW4oc29ydFRhc2tzLnByb2plY3RzSG9sZGVyLCBuZXdPYmopO1xuICAgICAgICByZW5kZXJUYXNrcy5yZW5kZXIoKTtcbiAgICAgICAgcmVuZGVyVGFza3MucmVuZGVyUHJvamVjdHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb2xpc3QnLCAnW10nKVxuICAgIH1cbn1cblxuY29uc3Qgb2J0YWluVmFsdWVzID0gKG9iaikgPT4ge1xuICAgIGNvbnN0IG5ld09iaiA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICBuZXdPYmpba2V5XSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9ialtrZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdPYmpba2V5XS5wdXNoKG9ialtrZXldW2ldLnZhbHVlcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld09iajtcbn1cblxuZXhwb3J0IHsgc3RvcmFnZSwgb2J0YWluVmFsdWVzIH0iLCJpbXBvcnQgeyByZW5kZXJUYXNrcyB9IGZyb20gJy4vdG9kb2xpc3REaXNwbGF5LmpzJ1xuaW1wb3J0IHsgY29sbGVjdElucHV0cywgc29ydFRhc2tzIH0gZnJvbSAnLi9mb3JtSW5wdXRzLmpzJztcbmltcG9ydCB7IGRhdGVzIH0gZnJvbSAnLi9kYXRlUHJvamVjdC5qcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5cbmNvbnN0IHRhYlN3aXRjaExvZ2ljID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjaGFuZ2VEaXNwbGF5ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoZWFkVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RIZWFkJykuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICBjb25zdCB0YXNrc0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9kVGFza3MnKTtcbiAgICAgICAgICAgIGNvbnN0IGJvZEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RBZGQnKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbGlja2FibGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrYWJsZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdExpc3QnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpY2thYmxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsaWNrYWJsZVtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaWNrYWJsZTIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xpY2thYmxlMltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTJbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NEaXNwbGF5LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tzRGl2LmNoaWxkcmVuW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzRGl2LmNoaWxkcmVuW2ldLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdKSB7XG4gICAgICAgICAgICAgICAgaGVhZFRleHQudGV4dENvbnRlbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkVGV4dC50ZXh0Q29udGVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmlkID09PSAnVG9kYXknIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQgPT09ICdUaGlzIFdlZWsnKSB7XG4gICAgICAgICAgICAgICAgYm9kQWRkLmNsYXNzTGlzdC5hZGQoJ25vRGlzcGxheScpO1xuICAgICAgICAgICAgICAgIGRhdGVzLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIGRhdGVzLmNsZWFyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChib2RBZGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdub0Rpc3BsYXknKSkge1xuICAgICAgICAgICAgICAgICAgICBib2RBZGQuY2xhc3NMaXN0LnJlbW92ZSgnbm9EaXNwbGF5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNvcnRUYXNrcy5jcmVhdGVOZXdQcm9qZWN0KGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlbmRlclRhc2tzLnJlbmRlcigpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5pZCA9PT0gJ1RvZGF5JyB8fCBldmVudC5jdXJyZW50VGFyZ2V0LmlkID09PSAnVGhpcyBXZWVrJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsaWRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJEaXYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbnNEaXYnKTtcbiAgICAgICAgICAgICAgICBzbGlkZXJEaXYuZm9yRWFjaChlbGVtID0+IGVsZW0ucmVtb3ZlKCkpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbnNEaXYuZm9yRWFjaChlbGVtID0+IGVsZW0ucmVtb3ZlKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzb3J0VGFza3MucHJvamVjdHNIb2xkZXIpO1xuICAgICAgICAgICAgXy5wdWxsQWxsKGNvbGxlY3RJbnB1dHMudG9kb2xpc3QsIFsuLi5jb2xsZWN0SW5wdXRzLnRvZG9saXN0XSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjaGFuZ2VEaXNwbGF5IH1cbiAgICB9XG4pKClcblxuZXhwb3J0IHsgdGFiU3dpdGNoTG9naWMgfTsiLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IHRhc2tzID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgaWQpID0+IHtcbiAgICBsZXQgX3RpdGxlID0gdGl0bGU7XG4gICAgbGV0IF9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIGxldCBfZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgbGV0IF9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIGxldCBfc3RhdHVzID0gc3RhdHVzO1xuICAgIGxldCBfaWQgPSBpZDtcblxuICAgIGNvbnN0IGdldCA9IHtcbiAgICAgICAgVGl0bGU6ICgpID0+IF90aXRsZSxcbiAgICAgICAgRGVzY3JpcHRpb246ICgpID0+IF9kZXNjcmlwdGlvbixcbiAgICAgICAgRHVlRGF0ZTogKCkgPT4gX2R1ZURhdGUsXG4gICAgICAgIFByaW9yaXR5OiAoKSA9PiBfcHJpb3JpdHksXG4gICAgICAgIFN0YXR1czogKCkgPT4gX3N0YXR1cyxcbiAgICAgICAgVGltZVJlbWFpbmluZzogKCkgPT4gZm9ybWF0RGlzdGFuY2VUb05vdyhuZXcgRGF0ZShfZHVlRGF0ZSksIHsgYWRkU3VmZml4OiB0cnVlIH0pLFxuICAgICAgICBJZDogKCkgPT4gX2lkLFxuICAgIH1cblxuICAgIGNvbnN0IHNldCA9IHtcbiAgICAgICAgVGl0bGU6IChuZXdUaXRsZSkgPT4gX3RpdGxlID0gbmV3VGl0bGUsXG4gICAgICAgIERlc2NyaXB0aW9uOiAobmV3RGVzY3JpcHRpb24pID0+IF9kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uLFxuICAgICAgICBEdWVEYXRlOiAobmV3RHVlRGF0ZSkgPT4gX2R1ZURhdGUgPSBuZXdEdWVEYXRlLFxuICAgICAgICBQcmlvcml0eTogKG5ld1ByaW9yaXR5KSA9PiBfcHJpb3JpdHkgPSBuZXdQcmlvcml0eSxcbiAgICAgICAgU3RhdHVzOiAobmV3U3RhdHVzKSA9PiBfc3RhdHVzID0gbmV3U3RhdHVzLFxuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgICAgVGl0bGU6IF90aXRsZSxcbiAgICAgICAgRGVzY3JpcHRpb246IF9kZXNjcmlwdGlvbixcbiAgICAgICAgRHVlRGF0ZTogX2R1ZURhdGUsXG4gICAgICAgIFByaW9yaXR5OiBfcHJpb3JpdHksXG4gICAgICAgIFN0YXR1czogX3N0YXR1cyxcbiAgICAgICAgSWQ6IF9pZCxcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldCwgc2V0LCB2YWx1ZXMgfVxuXG59XG5cbmV4cG9ydCB7IHRhc2tzIH0iLCJpbXBvcnQgeyBzb3J0VGFza3MgfSBmcm9tICcuL2Zvcm1JbnB1dHMuanMnXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbCdcbmltcG9ydCB7IGFkZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMuanMnO1xuXG5jb25zdCBjcmVhdGVUYXNrc0RpdnMgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZVNsaWRlciA9IChudW0sIGFyciwgZGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzbGlkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNsaWRlckRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NsaWRlckRpdicpO1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3dpdGNoJylcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIGlmIChhcnJbbnVtXS5nZXQuU3RhdHVzKCkgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcicpO1xuICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdyb3VuZCcpO1xuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICBzbGlkZXJEaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNsaWRlckRpdik7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUluZm8gPSAobnVtLCBhcnIsIGRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW5mb0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luZm9EaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgcGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwYXJhMS50ZXh0Q29udGVudCA9IGFycltudW1dLmdldC5UaXRsZSgpICsgJzonO1xuICAgICAgICAgICAgcGFyYTEuc3R5bGVbJ2ZvbnQtc2l6ZSddID0gJzEuNXJlbSc7XG4gICAgICAgICAgICBwYXJhMi50ZXh0Q29udGVudCA9IGFycltudW1dLmdldC5UaW1lUmVtYWluaW5nKCk7XG4gICAgICAgICAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHBhcmExKTtcbiAgICAgICAgICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQocGFyYTIpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGluZm9EaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3JlYXRlQnV0dG9ucyA9IChkaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbjFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbjJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJ1dHRvbjFEaXYuY2xhc3NMaXN0LmFkZCgnZWRpdEJ1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uMURpdi5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYXMgZmEtZWRpdCc+PC9pPlwiO1xuICAgICAgICAgICAgYnV0dG9uMkRpdi5jbGFzc0xpc3QuYWRkKCdkZWxldGVCdXR0b24nKVxuICAgICAgICAgICAgYnV0dG9uMkRpdi5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYXMgZmEtdHJhc2gtYWx0Jz48L2k+XCJcbiAgICAgICAgICAgIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uc0RpdicpXG4gICAgICAgICAgICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGJ1dHRvbjFEaXYpO1xuICAgICAgICAgICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChidXR0b24yRGl2KTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVkaXRDb2xvcnMgPSAobnVtLCBhcnIsIGRpdikgPT4ge1xuICAgICAgICAgICAgaWYgKGFycltudW1dLmdldC5TdGF0dXMoKSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSAnZ3JleSc7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlWydmaWx0ZXInXSA9ICdibHVyKDFweCknO1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZVsnb3BhY2l0eSddID0gMC43O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJbbnVtXS5nZXQuUHJpb3JpdHkoKSA9PT0gJ0hpZ2gnKSB7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9ICdyZWQnXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFycltudW1dLmdldC5Qcmlvcml0eSgpID09PSAnTWVkaXVtJykge1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSAneWVsbG93JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyW251bV0uZ2V0LlByaW9yaXR5KCkgPT09ICdMb3cnKSB7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9ICdjeWFuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHN0b3JlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza3NEaXYnKTtcbiAgICAgICAgICAgIGxldCB0YXNrcyA9IHNvcnRUYXNrcy5jcmVhdGVTb3J0ZWRBcnIoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrRGl2Jyk7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGFza3NbaV0uZ2V0LklkKCl9YCk7XG4gICAgICAgICAgICAgICAgY3JlYXRlU2xpZGVyKGksIHRhc2tzLCB0YXNrRGl2KTtcbiAgICAgICAgICAgICAgICBjcmVhdGVJbmZvKGksIHRhc2tzLCB0YXNrRGl2KTtcbiAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b25zKHRhc2tEaXYpO1xuICAgICAgICAgICAgICAgIGVkaXRDb2xvcnMoaSwgdGFza3MsIHRhc2tEaXYpO1xuICAgICAgICAgICAgICAgIHN0b3JlLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBjcmVhdGUgfVxuICAgIH1cbikoKVxuXG5jb25zdCByZW5kZXJUYXNrcyA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza3NEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZFRhc2tzJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzRGlzcGxheS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRhc2tzRGlzcGxheS5jaGlsZHJlbltpXS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaXYgPSBjcmVhdGVUYXNrc0RpdnMuY3JlYXRlKCk7XG4gICAgICAgICAgICB0YXNrc0Rpc3BsYXkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIGFkZEV2ZW50LmVkaXRCdXR0b25MaXN0ZW5lcigpO1xuICAgICAgICAgICAgYWRkRXZlbnQuZGVsZXRlQnV0dG9uTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIGFkZEV2ZW50LmNvbXBsZXRlQnV0dG9uTGlzdGVuZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlbmRlclByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgZWxlbSBpbiBzb3J0VGFza3MucHJvamVjdHNIb2xkZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbSAhPT0gJ0RlZmF1bHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RMaXN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgncHJvamVjdExpc3QnKVxuICAgICAgICAgICAgICAgICAgICBsaS50ZXh0Q29udGVudCA9IGVsZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncmVtb3ZlQnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnZmFzJyk7XG4gICAgICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnZmEtd2luZG93LWNsb3NlJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgICAgICAgICBhZGRFdmVudC5wcm9qZWN0c0J1dHRvbkxpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGFkZEV2ZW50LnJlbW92ZUJ1dHRvbkxpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkRXZlbnQucHJvamVjdExpc3RMaXN0ZW5lcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgcmVuZGVyLCByZW5kZXJQcm9qZWN0cyB9XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IHJlbmRlclRhc2tzIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
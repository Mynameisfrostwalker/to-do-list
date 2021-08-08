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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var _formInputs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formInputs.js */ "./src/scripts/formInputs.js");



const dates = (
    function() {
        let Today = [];
        let ThisWeek = [];
        const create = () => {
            for (const elem in _formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.projectsHolder) {
                for (let i = 0; i < _formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.projectsHolder[elem].length; i++) {
                    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(new Date(_formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.projectsHolder[elem][i].get.DueDate()))) {
                        Today.push(_formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.projectsHolder[elem][i])
                    }
                    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(new Date(_formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.projectsHolder[elem][i].get.DueDate()))) {
                        ThisWeek.push(_formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.projectsHolder[elem][i])
                    }
                }
            }
            _formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.projectsHolder.Today = [...Today];
            _formInputs_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks.projectsHolder["This Week"] = [...ThisWeek];
        }

        const clear = () => {
            Today = [];
            ThisWeek = [];
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
            if (event.target.children[1]) {
                headText.textContent = event.target.children[1].textContent;
            } else {
                headText.textContent = event.target.textContent;
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

            console.log(_formInputs_js__WEBPACK_IMPORTED_MODULE_1__.sortTasks.projectsHolder);
            for (let i = 0; i < _formInputs_js__WEBPACK_IMPORTED_MODULE_1__.collectInputs.todolist.length; i++) {
                _formInputs_js__WEBPACK_IMPORTED_MODULE_1__.collectInputs.todolist.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfdG9kb2xpc3REaXNwbGF5X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNQO0FBQ1M7QUFDRztBQUNqQjs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsaURBQU0sZ0dBQWdHO0FBQ25KO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBcUI7QUFDakMsWUFBWSwrREFBdUI7QUFDbkM7QUFDQTtBQUNBLFlBQVkscUVBQXlCO0FBQ3JDO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUVBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzRUFBOEI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVFQUErQjtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFFQUF5QjtBQUNqRCw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7QUFDQSw4Q0FBOEMsa0JBQWtCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrQ0FBa0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1FQUEyQjtBQUN2QyxZQUFZLHFFQUE2QjtBQUN6QyxZQUFZLHVFQUErQjtBQUMzQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHRzL0RvbURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2RhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2Zvcm1JbnB1dHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3RhYi1zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3RvZG9saXN0RGlzcGxheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGxcIjtcbmltcG9ydCB7IGFkZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMuanMnO1xuaW1wb3J0IHsgY29sbGVjdElucHV0cyB9IGZyb20gJy4vZm9ybUlucHV0cy5qcyc7XG5pbXBvcnQgeyByZW5kZXJUYXNrcyB9IGZyb20gJy4vdG9kb2xpc3REaXNwbGF5LmpzJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgaW5wdXRzID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBjb25zdCBjcmVhdGVJbnB1dHMgPSAodHlwZSwgbmFtZSwgZGVzY3JpcHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgbmFtZSk7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGRlc2NyaXB0ICsgXCI6XCI7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJ0ZXh0YXJlYVwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiZGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCBgJHtmb3JtYXQobmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCBuZXcgRGF0ZSgpLmdldE1vbnRoKCksIG5ldyBEYXRlKCkuZ2V0RGF0ZSgpKSwgJ3l5eXktTU0tZGQnKX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgZGVzY3JpcHQpO1xuICAgICAgICAgICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVJbnB1dHMoJ3RleHQnLCAndGl0bGUnLCAnVGl0bGUnKTtcbiAgICAgICAgY3JlYXRlSW5wdXRzKCd0ZXh0YXJlYScsICdkZXNjcmlwdGlvbicsICdEZXNjcmlwdGlvbicpO1xuICAgICAgICBjcmVhdGVJbnB1dHMoJ2RhdGUnLCAnZHVlRGF0ZScsICdEdWVEYXRlJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBjb25zdCBzZWxlY3RsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHNlbGVjdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3RsYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonXG4gICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5JylcbiAgICAgICAgY29uc3QgY3JlYXRlT3B0aW9ucyA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIHZhbHVlKTtcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgXCJcIik7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlT3B0aW9ucygnJylcbiAgICAgICAgY3JlYXRlT3B0aW9ucygnSGlnaCcpO1xuICAgICAgICBjcmVhdGVPcHRpb25zKCdNZWRpdW0nKTtcbiAgICAgICAgY3JlYXRlT3B0aW9ucygnTG93Jyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1wYXBlci1wbGFuZVwiPic7XG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgICAgICBzdWJtaXQuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQnKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3RsYWJlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgICAgICByZXR1cm4geyBmb3JtIH1cbiAgICB9XG4pKClcblxuY29uc3QgYmFja2dyb3VuZCA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgYmx1ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGJsdXIuc2V0QXR0cmlidXRlKCdpZCcsICdibHVyJyk7XG4gICAgICAgIHJldHVybiB7IGJsdXIgfVxuICAgIH1cbikoKVxuXG5jb25zdCBmb3JtRGlzcGxheSA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRzLmZvcm0pO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tncm91bmQuYmx1cik7XG4gICAgICAgICAgICBhZGRFdmVudC5wcmV2ZW50RW50ZXIoKTtcbiAgICAgICAgICAgIGFkZEV2ZW50LnN1Ym1pdExpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29sbGVjdElucHV0cy5jcmVhdGVUYXNrcygpO1xuICAgICAgICAgICAgbGV0IGNoaWxkcmVucyA9IGlucHV0cy5mb3JtLmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbnNbaV0udmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGlucHV0cy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChiYWNrZ3JvdW5kLmJsdXIpO1xuICAgICAgICAgICAgcmVuZGVyVGFza3MucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWRpdEZvcm0gPSAodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZSA9IHZhbHVlcy5nZXQuVGl0bGUoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnZhbHVlID0gdmFsdWVzLmdldC5EZXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKS52YWx1ZSA9IHZhbHVlcy5nZXQuRHVlRGF0ZSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdCcpLnZhbHVlID0gdmFsdWVzLmdldC5Qcmlvcml0eSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSwgcmVtb3ZlLCBlZGl0Rm9ybSB9O1xuICAgIH1cbikoKVxuXG5jb25zdCBwcm9qZWN0SW5wdXQgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGlucHV0Q3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0SW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdElucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIHByb2plY3QgbmFtZScpO1xuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuICAgICAgICAgICAgcHJvamVjdHNCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbnB1dENyZWF0ZSk7XG4gICAgICAgICAgICBhZGRFdmVudC5wcm9qZWN0c0lucHV0TGlzdGVuZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3REaXNwbGF5ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdElucHV0JykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpO1xuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgncHJvamVjdExpc3QnKVxuICAgICAgICAgICAgbGkudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICAgIGFkZEV2ZW50LnByb2plY3RzQnV0dG9uTGlzdGVuZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RSZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdElucHV0JylcbiAgICAgICAgICAgIHByb2plY3RJbnB1dC5yZW1vdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgaW5wdXRDcmVhdGUsIHByb2plY3REaXNwbGF5LCBwcm9qZWN0UmVtb3ZlIH07XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IGZvcm1EaXNwbGF5LCBwcm9qZWN0SW5wdXQgfTsiLCJpbXBvcnQgeyBpc1RvZGF5LCBpc1RoaXNXZWVrIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBzb3J0VGFza3MgfSBmcm9tICcuL2Zvcm1JbnB1dHMuanMnXG5cbmNvbnN0IGRhdGVzID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgVG9kYXkgPSBbXTtcbiAgICAgICAgbGV0IFRoaXNXZWVrID0gW107XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbSBpbiBzb3J0VGFza3MucHJvamVjdHNIb2xkZXIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltlbGVtXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUb2RheShuZXcgRGF0ZShzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbZWxlbV1baV0uZ2V0LkR1ZURhdGUoKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUb2RheS5wdXNoKHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltlbGVtXVtpXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUaGlzV2VlayhuZXcgRGF0ZShzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbZWxlbV1baV0uZ2V0LkR1ZURhdGUoKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzV2Vlay5wdXNoKHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltlbGVtXVtpXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlclsnVG9kYXknXSA9IFsuLi5Ub2RheV07XG4gICAgICAgICAgICBzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbJ1RoaXMgV2VlayddID0gWy4uLlRoaXNXZWVrXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgICAgICAgICAgVG9kYXkgPSBbXTtcbiAgICAgICAgICAgIFRoaXNXZWVrID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlLCBjbGVhciB9XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IGRhdGVzIH0iLCJpbXBvcnQgeyBmb3JtRGlzcGxheSwgcHJvamVjdElucHV0IH0gZnJvbSAnLi9Eb21EaXNwbGF5LmpzJztcbmltcG9ydCB7IGNvbGxlY3RJbnB1dHMgfSBmcm9tICcuL2Zvcm1JbnB1dHMuanMnO1xuaW1wb3J0IHsgcmVuZGVyVGFza3MgfSBmcm9tICcuL3RvZG9saXN0RGlzcGxheS5qcyc7XG5pbXBvcnQgeyB0YWJTd2l0Y2hMb2dpYyB9IGZyb20gJy4vdGFiLXN3aXRjaC5qcyc7XG5cbmNvbnN0IGFkZEV2ZW50ID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB3aW5kb3dMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9kQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2JvZEFkZCcpO1xuICAgICAgICAgICAgICAgIGJvZEFkZC5jaGlsZHJlblswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZvcm1EaXNwbGF5LmNyZWF0ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN1Ym1pdExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdCcpO1xuICAgICAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZm9ybURpc3BsYXkucmVtb3ZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXZlbnRFbnRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVkaXRvciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgZm9ybURpc3BsYXkuY3JlYXRlKCk7XG4gICAgICAgICAgICBsZXQgb2JqID0gY29sbGVjdElucHV0cy5yZXRyaWV2ZVRhc2tzKGV2ZW50KTtcbiAgICAgICAgICAgIGZvcm1EaXNwbGF5LmVkaXRGb3JtKG9iailcbiAgICAgICAgICAgIGNvbGxlY3RJbnB1dHMuZGVsZXRlVGFza3Mob2JqLmdldC5JZCgpKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0QnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0b3IpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbGxlY3RJbnB1dHMuZGVsZXRlVGFza3MoZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzLnJlbmRlcigpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b25MaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVCdXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wbGV0ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiJylcbiAgICAgICAgICAgIGNvbGxlY3RJbnB1dHMuY2hhbmdlU3RhdHVzKGV2ZW50KTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzLnJlbmRlcigpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wbGV0ZUJ1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2xpZGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlckRpdicpO1xuICAgICAgICAgICAgc2xpZGVyRGl2LmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYScpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbXBsZXRlciwge1xuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RzQnV0dG9uTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuICAgICAgICAgICAgcHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0SW5wdXQuaW5wdXRDcmVhdGUpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0c0lucHV0TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdHNJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RJbnB1dC5wcm9qZWN0RGlzcGxheSgpXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RJbnB1dC5wcm9qZWN0UmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdExpc3RMaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbGlja2FibGVMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbGlja2FibGUnKTtcbiAgICAgICAgICAgIGNsaWNrYWJsZS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWJTd2l0Y2hMb2dpYy5jaGFuZ2VEaXNwbGF5KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0TGlzdCcpO1xuICAgICAgICAgICAgcHJvamVjdExpc3QuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFiU3dpdGNoTG9naWMuY2hhbmdlRGlzcGxheSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyB3aW5kb3dMaXN0ZW5lciwgc3VibWl0TGlzdGVuZXIsIHByZXZlbnRFbnRlciwgZWRpdEJ1dHRvbkxpc3RlbmVyLCBkZWxldGVCdXR0b25MaXN0ZW5lciwgcHJvamVjdHNCdXR0b25MaXN0ZW5lciwgcHJvamVjdHNJbnB1dExpc3RlbmVyLCBjb21wbGV0ZUJ1dHRvbkxpc3RlbmVyLCBjbGlja2FibGVMaXN0ZW5lciwgcHJvamVjdExpc3RMaXN0ZW5lciB9O1xuICAgIH1cbikoKVxuXG5leHBvcnQgeyBhZGRFdmVudCB9IiwiaW1wb3J0IHsgdGFza3MgfSBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IHsgaXNBZnRlciwgaXNCZWZvcmUsIGlzRXF1YWwgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBjb2xsZWN0SW5wdXRzID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgdG9kb2xpc3QgPSBbXTtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBbXTtcblxuICAgICAgICBjb25zdCBjcmVhdGVUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvdW50ZXIucHVzaChudWxsKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QnKTtcbiAgICAgICAgICAgIGlmICh0aXRsZS52YWx1ZSA9PT0gJycgfHwgZHVlRGF0ZS52YWx1ZSA9PT0gJycsIHByaW9yaXR5LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdObyBpbnB1dCBtdXN0IG5vdCBiZSBsZWZ0IGJsYW5rJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvbGlzdC5wdXNoKHRhc2tzKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUsIFwiaW5jb21wbGV0ZVwiLCBjb3VudGVyLmxlbmd0aC50b1N0cmluZygpKSk7XG4gICAgICAgICAgICBzb3J0VGFza3MuYWRkUHJvamVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmV0cmlldmVUYXNrcyA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RIZWFkJykuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBsZXQgaWRlbnQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpZGVudCA9PT0gc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXVtpXS5nZXQuSWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBfLnB1bGxBbGwodG9kb2xpc3QsIFsuLi50b2RvbGlzdF0pXG4gICAgICAgICAgICAgICAgICAgIHRvZG9saXN0LnB1c2goLi4uc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV1baV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsZXRlVGFza3MgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEhlYWQnKS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXVtpXS5nZXQuSWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgXy5wdWxsQWxsKHRvZG9saXN0LCBbLi4udG9kb2xpc3RdKVxuICAgICAgICAgICAgICAgICAgICB0b2RvbGlzdC5wdXNoKC4uLnNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hhbmdlU3RhdHVzID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEhlYWQnKS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGxldCBpZGVudCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpZGVudCA9PT0gc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXVtpXS5nZXQuSWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2xkU3RhdHVzID0gc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXVtpXS5nZXQuU3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRTdGF0dXMgPT09ICdpbmNvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXVtpXS5zZXQuU3RhdHVzKCdjb21wbGV0ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnB1bGxBbGwodG9kb2xpc3QsIFsuLi50b2RvbGlzdF0pXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvbGlzdC5wdXNoKC4uLnNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0pXG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvbGRTdGF0dXMgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV1baV0uc2V0LlN0YXR1cygnaW5jb21wbGV0ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnB1bGxBbGwodG9kb2xpc3QsIFsuLi50b2RvbGlzdF0pXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvbGlzdC5wdXNoKC4uLnNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0pXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlVGFza3MsIHRvZG9saXN0LCByZXRyaWV2ZVRhc2tzLCBkZWxldGVUYXNrcywgY2hhbmdlU3RhdHVzIH07XG4gICAgfVxuKSgpXG5cbmNvbnN0IHNvcnRUYXNrcyA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNIb2xkZXIgPSB7fTtcblxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9kSGVhZCcpLmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgaWYgKGNvbGxlY3RJbnB1dHMudG9kb2xpc3QubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0gPSBbLi4uXy5kaWZmZXJlbmNlV2l0aChbLi4ucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdXSwgWy4uLmNvbGxlY3RJbnB1dHMudG9kb2xpc3RdLCBfLmlzRXF1YWwpLCAuLi5jb2xsZWN0SW5wdXRzLnRvZG9saXN0XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0gPSBbLi4uY29sbGVjdElucHV0cy50b2RvbGlzdF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdENoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEhlYWQnKS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXSA9IFsuLi5jb2xsZWN0SW5wdXRzLnRvZG9saXN0XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSAocE5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmICghcHJvamVjdHNIb2xkZXJbcE5hbWVdKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNIb2xkZXJbcE5hbWVdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVTb3J0ZWRBcnIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0hvbGRlcilcbiAgICAgICAgICAgIGNvbnN0IE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9kSGVhZCcpLmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgaWYgKHByb2plY3RzSG9sZGVyW05hbWVdLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBwcm9qZWN0c0hvbGRlcltOYW1lXS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQWZ0ZXIobmV3IERhdGUoYS5nZXQuRHVlRGF0ZSgpKSwgbmV3IERhdGUoYi5nZXQuRHVlRGF0ZSgpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0JlZm9yZShuZXcgRGF0ZShhLmdldC5EdWVEYXRlKCkpLCBuZXcgRGF0ZShiLmdldC5EdWVEYXRlKCkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0VxdWFsKG5ldyBEYXRlKGEuZ2V0LkR1ZURhdGUoKSksIG5ldyBEYXRlKGIuZ2V0LkR1ZURhdGUoKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvcnRlZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzSG9sZGVyW05hbWVdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgYWRkUHJvamVjdCwgY3JlYXRlU29ydGVkQXJyLCBjcmVhdGVOZXdQcm9qZWN0LCBwcm9qZWN0c0hvbGRlciwgcHJvamVjdENoYW5nZSB9O1xuICAgIH1cbikoKVxuXG5leHBvcnQgeyBjb2xsZWN0SW5wdXRzLCBzb3J0VGFza3MgfSIsImltcG9ydCB7IHJlbmRlclRhc2tzIH0gZnJvbSAnLi90b2RvbGlzdERpc3BsYXkuanMnXG5pbXBvcnQgeyBjb2xsZWN0SW5wdXRzLCBzb3J0VGFza3MgfSBmcm9tICcuL2Zvcm1JbnB1dHMuanMnO1xuaW1wb3J0IHsgZGF0ZXMgfSBmcm9tICcuL2RhdGVQcm9qZWN0LmpzJztcblxuY29uc3QgdGFiU3dpdGNoTG9naWMgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNoYW5nZURpc3BsYXkgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEhlYWQnKS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RUYXNrcycpO1xuICAgICAgICAgICAgY29uc3QgYm9kQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEFkZCcpO1xuICAgICAgICAgICAgY29uc3QgY2xpY2thYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsaWNrYWJsZScpO1xuICAgICAgICAgICAgY29uc3QgY2xpY2thYmxlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0TGlzdCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlja2FibGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xpY2thYmxlW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpY2thYmxlMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjbGlja2FibGUyW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlMltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc0Rpc3BsYXkuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGFza3NEaXYuY2hpbGRyZW5baV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza3NEaXYuY2hpbGRyZW5baV0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGlsZHJlblsxXSkge1xuICAgICAgICAgICAgICAgIGhlYWRUZXh0LnRleHRDb250ZW50ID0gZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkVGV4dC50ZXh0Q29udGVudCA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQgPT09ICdUb2RheScgfHwgZXZlbnQuY3VycmVudFRhcmdldC5pZCA9PT0gJ1RoaXMgV2VlaycpIHtcbiAgICAgICAgICAgICAgICBib2RBZGQuY2xhc3NMaXN0LmFkZCgnbm9EaXNwbGF5Jyk7XG4gICAgICAgICAgICAgICAgZGF0ZXMuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgZGF0ZXMuY2xlYXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvZEFkZC5jbGFzc0xpc3QuY29udGFpbnMoJ25vRGlzcGxheScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZEFkZC5jbGFzc0xpc3QucmVtb3ZlKCdub0Rpc3BsYXknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc29ydFRhc2tzLmNyZWF0ZU5ld1Byb2plY3QoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVuZGVyVGFza3MucmVuZGVyKCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxlY3RJbnB1dHMudG9kb2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0SW5wdXRzLnRvZG9saXN0LnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNoYW5nZURpc3BsYXkgfVxuICAgIH1cbikoKVxuXG5leHBvcnQgeyB0YWJTd2l0Y2hMb2dpYyB9OyIsImltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgdGFza3MgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBpZCkgPT4ge1xuICAgIGxldCBfdGl0bGUgPSB0aXRsZTtcbiAgICBsZXQgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgbGV0IF9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBsZXQgX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgbGV0IF9zdGF0dXMgPSBzdGF0dXM7XG4gICAgbGV0IF9pZCA9IGlkO1xuXG4gICAgY29uc3QgZ2V0ID0ge1xuICAgICAgICBUaXRsZTogKCkgPT4gX3RpdGxlLFxuICAgICAgICBEZXNjcmlwdGlvbjogKCkgPT4gX2Rlc2NyaXB0aW9uLFxuICAgICAgICBEdWVEYXRlOiAoKSA9PiBfZHVlRGF0ZSxcbiAgICAgICAgUHJpb3JpdHk6ICgpID0+IF9wcmlvcml0eSxcbiAgICAgICAgU3RhdHVzOiAoKSA9PiBfc3RhdHVzLFxuICAgICAgICBUaW1lUmVtYWluaW5nOiAoKSA9PiBmb3JtYXREaXN0YW5jZVRvTm93KG5ldyBEYXRlKF9kdWVEYXRlKSwgeyBhZGRTdWZmaXg6IHRydWUgfSksXG4gICAgICAgIElkOiAoKSA9PiBfaWQsXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0ID0ge1xuICAgICAgICBUaXRsZTogKG5ld1RpdGxlKSA9PiBfdGl0bGUgPSBuZXdUaXRsZSxcbiAgICAgICAgRGVzY3JpcHRpb246IChuZXdEZXNjcmlwdGlvbikgPT4gX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24sXG4gICAgICAgIER1ZURhdGU6IChuZXdEdWVEYXRlKSA9PiBfZHVlRGF0ZSA9IG5ld0R1ZURhdGUsXG4gICAgICAgIFByaW9yaXR5OiAobmV3UHJpb3JpdHkpID0+IF9wcmlvcml0eSA9IG5ld1ByaW9yaXR5LFxuICAgICAgICBTdGF0dXM6IChuZXdTdGF0dXMpID0+IF9zdGF0dXMgPSBuZXdTdGF0dXMsXG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXQsIHNldCB9XG5cbn1cblxuZXhwb3J0IHsgdGFza3MgfSIsImltcG9ydCB7IHNvcnRUYXNrcyB9IGZyb20gJy4vZm9ybUlucHV0cy5qcydcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsJ1xuaW1wb3J0IHsgYWRkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy5qcyc7XG5cbmNvbnN0IGNyZWF0ZVRhc2tzRGl2cyA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY3JlYXRlU2xpZGVyID0gKG51bSwgYXJyLCBkaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNsaWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc2xpZGVyRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2xpZGVyRGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKVxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICAgICAgaWYgKGFycltudW1dLmdldC5TdGF0dXMoKSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnc2xpZGVyJyk7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3JvdW5kJyk7XG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgICAgIHNsaWRlckRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc2xpZGVyRGl2KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgY3JlYXRlSW5mbyA9IChudW0sIGFyciwgZGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpbmZvRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5mb0RpdicpO1xuICAgICAgICAgICAgY29uc3QgcGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHBhcmExLnRleHRDb250ZW50ID0gYXJyW251bV0uZ2V0LlRpdGxlKCkgKyAnOic7XG4gICAgICAgICAgICBwYXJhMS5zdHlsZVsnZm9udC1zaXplJ10gPSAnMS41cmVtJztcbiAgICAgICAgICAgIHBhcmEyLnRleHRDb250ZW50ID0gYXJyW251bV0uZ2V0LlRpbWVSZW1haW5pbmcoKTtcbiAgICAgICAgICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQocGFyYTEpO1xuICAgICAgICAgICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChwYXJhMik7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVCdXR0b25zID0gKGRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYnV0dG9uMURpdi5jbGFzc0xpc3QuYWRkKCdlZGl0QnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24xRGl2LmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhcyBmYS1lZGl0Jz48L2k+XCI7XG4gICAgICAgICAgICBidXR0b24yRGl2LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZUJ1dHRvbicpXG4gICAgICAgICAgICBidXR0b24yRGl2LmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhcyBmYS10cmFzaC1hbHQnPjwvaT5cIlxuICAgICAgICAgICAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25zRGl2JylcbiAgICAgICAgICAgIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uMURpdik7XG4gICAgICAgICAgICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGJ1dHRvbjJEaXYpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbnNEaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWRpdENvbG9ycyA9IChudW0sIGFyciwgZGl2KSA9PiB7XG4gICAgICAgICAgICBpZiAoYXJyW251bV0uZ2V0LlN0YXR1cygpID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9ICdncmV5JztcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGVbJ2ZpbHRlciddID0gJ2JsdXIoMXB4KSc7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlWydvcGFjaXR5J10gPSAwLjc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFycltudW1dLmdldC5Qcmlvcml0eSgpID09PSAnSGlnaCcpIHtcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gJ3JlZCdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyW251bV0uZ2V0LlByaW9yaXR5KCkgPT09ICdNZWRpdW0nKSB7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9ICd5ZWxsb3cnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJbbnVtXS5nZXQuUHJpb3JpdHkoKSA9PT0gJ0xvdycpIHtcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gJ2N5YW4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgc3RvcmUuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrc0RpdicpO1xuICAgICAgICAgICAgbGV0IHRhc2tzID0gc29ydFRhc2tzLmNyZWF0ZVNvcnRlZEFycigpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YXNrc1tpXS5nZXQuSWQoKX1gKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVTbGlkZXIoaSwgdGFza3MsIHRhc2tEaXYpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUluZm8oaSwgdGFza3MsIHRhc2tEaXYpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbnModGFza0Rpdik7XG4gICAgICAgICAgICAgICAgZWRpdENvbG9ycyhpLCB0YXNrcywgdGFza0Rpdik7XG4gICAgICAgICAgICAgICAgc3RvcmUuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IHJlbmRlclRhc2tzID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrc0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9kVGFza3MnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NEaXNwbGF5LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGFza3NEaXNwbGF5LmNoaWxkcmVuW2ldLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpdiA9IGNyZWF0ZVRhc2tzRGl2cy5jcmVhdGUoKTtcbiAgICAgICAgICAgIHRhc2tzRGlzcGxheS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgYWRkRXZlbnQuZWRpdEJ1dHRvbkxpc3RlbmVyKCk7XG4gICAgICAgICAgICBhZGRFdmVudC5kZWxldGVCdXR0b25MaXN0ZW5lcigpO1xuICAgICAgICAgICAgYWRkRXZlbnQuY29tcGxldGVCdXR0b25MaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHJlbmRlciB9XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IHJlbmRlclRhc2tzIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
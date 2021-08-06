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
            input.setAttribute('required', "");
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
                console.log('nb')
                button.addEventListener('click', deleter)
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
                    console.log('b')
                    e.preventDefault();
                    _DomDisplay_js__WEBPACK_IMPORTED_MODULE_0__.projectInput.projectDisplay()
                    _DomDisplay_js__WEBPACK_IMPORTED_MODULE_0__.projectInput.projectRemove()
                }
            })
        }

        return { windowListener, submitListener, preventEnter, editButtonListener, deleteButtonListener, projectsButtonListener, projectsInputListener };
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
        return { createTasks, todolist, retieveTasks, deleteTasks };
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
        const createSlider = (div) => {
            const sliderDiv = document.createElement('div');
            sliderDiv.setAttribute('class', 'sliderDiv');
            const label = document.createElement('label');
            label.classList.add('switch')
            const input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
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
            if (arr[num].get.Priority() === 'High') {
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
                createSlider(taskDiv);
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
        }
        return { render }
    }
)()



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfZXZlbnRzX2pzLXNyY19zY3JpcHRzX3RvZG9saXN0RGlzcGxheV9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDUDtBQUNTO0FBQ0c7QUFDakI7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGlEQUFNLGdHQUFnRztBQUNuSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkRBQXFCO0FBQ2pDLFlBQVksK0RBQXVCO0FBQ25DO0FBQ0E7QUFDQSxZQUFZLHFFQUF5QjtBQUNyQztBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1FQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0VBQThCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1RUFBK0I7QUFDM0M7O0FBRUE7QUFDQTtB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LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2Zvcm1JbnB1dHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3RvZG9saXN0RGlzcGxheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGxcIjtcbmltcG9ydCB7IGFkZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMuanMnO1xuaW1wb3J0IHsgY29sbGVjdElucHV0cyB9IGZyb20gJy4vZm9ybUlucHV0cy5qcyc7XG5pbXBvcnQgeyByZW5kZXJUYXNrcyB9IGZyb20gJy4vdG9kb2xpc3REaXNwbGF5LmpzJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgaW5wdXRzID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBjb25zdCBjcmVhdGVJbnB1dHMgPSAodHlwZSwgbmFtZSwgZGVzY3JpcHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgbmFtZSk7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGRlc2NyaXB0ICsgXCI6XCI7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJ0ZXh0YXJlYVwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiZGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCBgJHtmb3JtYXQobmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCBuZXcgRGF0ZSgpLmdldE1vbnRoKCksIG5ldyBEYXRlKCkuZ2V0RGF0ZSgpKSwgJ3l5eXktTU0tZGQnKX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgZGVzY3JpcHQpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIFwiXCIpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVJbnB1dHMoJ3RleHQnLCAndGl0bGUnLCAnVGl0bGUnKTtcbiAgICAgICAgY3JlYXRlSW5wdXRzKCd0ZXh0YXJlYScsICdkZXNjcmlwdGlvbicsICdEZXNjcmlwdGlvbicpO1xuICAgICAgICBjcmVhdGVJbnB1dHMoJ2RhdGUnLCAnZHVlRGF0ZScsICdEdWVEYXRlJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBjb25zdCBzZWxlY3RsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHNlbGVjdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3RsYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonXG4gICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5JylcbiAgICAgICAgY29uc3QgY3JlYXRlT3B0aW9ucyA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIHZhbHVlKTtcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgXCJcIik7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlT3B0aW9ucygnJylcbiAgICAgICAgY3JlYXRlT3B0aW9ucygnSGlnaCcpO1xuICAgICAgICBjcmVhdGVPcHRpb25zKCdNZWRpdW0nKTtcbiAgICAgICAgY3JlYXRlT3B0aW9ucygnTG93Jyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1wYXBlci1wbGFuZVwiPic7XG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgICAgICBzdWJtaXQuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQnKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3RsYWJlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgICAgICByZXR1cm4geyBmb3JtIH1cbiAgICB9XG4pKClcblxuY29uc3QgYmFja2dyb3VuZCA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgYmx1ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGJsdXIuc2V0QXR0cmlidXRlKCdpZCcsICdibHVyJyk7XG4gICAgICAgIHJldHVybiB7IGJsdXIgfVxuICAgIH1cbikoKVxuXG5jb25zdCBmb3JtRGlzcGxheSA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRzLmZvcm0pO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tncm91bmQuYmx1cik7XG4gICAgICAgICAgICBhZGRFdmVudC5wcmV2ZW50RW50ZXIoKTtcbiAgICAgICAgICAgIGFkZEV2ZW50LnN1Ym1pdExpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29sbGVjdElucHV0cy5jcmVhdGVUYXNrcygpO1xuICAgICAgICAgICAgbGV0IGNoaWxkcmVucyA9IGlucHV0cy5mb3JtLmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbnNbaV0udmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGlucHV0cy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChiYWNrZ3JvdW5kLmJsdXIpO1xuICAgICAgICAgICAgcmVuZGVyVGFza3MucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWRpdEZvcm0gPSAodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZSA9IHZhbHVlcy5nZXQuVGl0bGUoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnZhbHVlID0gdmFsdWVzLmdldC5EZXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKS52YWx1ZSA9IHZhbHVlcy5nZXQuRHVlRGF0ZSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdCcpLnZhbHVlID0gdmFsdWVzLmdldC5Qcmlvcml0eSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSwgcmVtb3ZlLCBlZGl0Rm9ybSB9O1xuICAgIH1cbikoKVxuXG5jb25zdCBwcm9qZWN0SW5wdXQgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGlucHV0Q3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0SW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdElucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIHByb2plY3QgbmFtZScpO1xuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuICAgICAgICAgICAgcHJvamVjdHNCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbnB1dENyZWF0ZSk7XG4gICAgICAgICAgICBhZGRFdmVudC5wcm9qZWN0c0lucHV0TGlzdGVuZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3REaXNwbGF5ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdElucHV0JykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpO1xuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgncHJvamVjdExpc3QnKVxuICAgICAgICAgICAgbGkudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICAgIGFkZEV2ZW50LnByb2plY3RzQnV0dG9uTGlzdGVuZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RSZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdElucHV0JylcbiAgICAgICAgICAgIHByb2plY3RJbnB1dC5yZW1vdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgaW5wdXRDcmVhdGUsIHByb2plY3REaXNwbGF5LCBwcm9qZWN0UmVtb3ZlIH07XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IGZvcm1EaXNwbGF5LCBwcm9qZWN0SW5wdXQgfTsiLCJpbXBvcnQgeyBmb3JtRGlzcGxheSwgcHJvamVjdElucHV0IH0gZnJvbSAnLi9Eb21EaXNwbGF5LmpzJztcbmltcG9ydCB7IGNvbGxlY3RJbnB1dHMgfSBmcm9tICcuL2Zvcm1JbnB1dHMuanMnXG5pbXBvcnQgeyByZW5kZXJUYXNrcyB9IGZyb20gJy4vdG9kb2xpc3REaXNwbGF5LmpzJ1xuXG5jb25zdCBhZGRFdmVudCA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3Qgd2luZG93TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvZEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNib2RBZGQnKTtcbiAgICAgICAgICAgICAgICBib2RBZGQuY2hpbGRyZW5bMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmb3JtRGlzcGxheS5jcmVhdGUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdWJtaXRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKTtcbiAgICAgICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZvcm1EaXNwbGF5LnJlbW92ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmV2ZW50RW50ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlZGl0b3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGZvcm1EaXNwbGF5LmNyZWF0ZSgpO1xuICAgICAgICAgICAgbGV0IG9iaiA9IGNvbGxlY3RJbnB1dHMucmV0aWV2ZVRhc2tzKGV2ZW50KTtcbiAgICAgICAgICAgIGZvcm1EaXNwbGF5LmVkaXRGb3JtKG9iailcbiAgICAgICAgICAgIGNvbGxlY3RJbnB1dHMuZGVsZXRlVGFza3Mob2JqLmdldC5JZCgpKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0QnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0b3IpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbGxlY3RJbnB1dHMuZGVsZXRlVGFza3MoZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzLnJlbmRlcigpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b25MaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVCdXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25iJylcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RzQnV0dG9uTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuICAgICAgICAgICAgcHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0SW5wdXQuaW5wdXRDcmVhdGUpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0c0lucHV0TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdHNJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYicpXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElucHV0LnByb2plY3REaXNwbGF5KClcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElucHV0LnByb2plY3RSZW1vdmUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyB3aW5kb3dMaXN0ZW5lciwgc3VibWl0TGlzdGVuZXIsIHByZXZlbnRFbnRlciwgZWRpdEJ1dHRvbkxpc3RlbmVyLCBkZWxldGVCdXR0b25MaXN0ZW5lciwgcHJvamVjdHNCdXR0b25MaXN0ZW5lciwgcHJvamVjdHNJbnB1dExpc3RlbmVyIH07XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IGFkZEV2ZW50IH0iLCJpbXBvcnQgeyB0YXNrcyB9IGZyb20gJy4vdG9kby5qcydcbmltcG9ydCB7IGlzQWZ0ZXIsIGlzQmVmb3JlLCBpc0VxdWFsIH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmNvbnN0IGNvbGxlY3RJbnB1dHMgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRvZG9saXN0ID0gW107XG4gICAgICAgIGNvbnN0IGNyZWF0ZVRhc2tzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdCcpO1xuICAgICAgICAgICAgdG9kb2xpc3QucHVzaCh0YXNrcyh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlLCBcImluY29tcGxldGVcIiwgdG9kb2xpc3QubGVuZ3RoLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXRpZXZlVGFza3MgPSAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGlkZW50ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlkZW50ID09PSB0b2RvbGlzdFtpXS5nZXQuSWQoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9kb2xpc3RbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2tzID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB0b2RvbGlzdFtpXS5nZXQuSWQoKSkge1xuICAgICAgICAgICAgICAgICAgICB0b2RvbGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZVRhc2tzLCB0b2RvbGlzdCwgcmV0aWV2ZVRhc2tzLCBkZWxldGVUYXNrcyB9O1xuICAgIH1cbikoKVxuXG5jb25zdCBzb3J0VGFza3MgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZVNvcnRlZEFyciA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChjb2xsZWN0SW5wdXRzLnRvZG9saXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBjb2xsZWN0SW5wdXRzLnRvZG9saXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBZnRlcihuZXcgRGF0ZShhLmdldC5EdWVEYXRlKCkpLCBuZXcgRGF0ZShiLmdldC5EdWVEYXRlKCkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQmVmb3JlKG5ldyBEYXRlKGEuZ2V0LkR1ZURhdGUoKSksIG5ldyBEYXRlKGIuZ2V0LkR1ZURhdGUoKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRXF1YWwobmV3IERhdGUoYS5nZXQuRHVlRGF0ZSgpKSwgbmV3IERhdGUoYi5nZXQuRHVlRGF0ZSgpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc29ydGVkO1xuICAgICAgICAgICAgfSBlbHNlIHsgcmV0dXJuIGNvbGxlY3RJbnB1dHMudG9kb2xpc3QgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZVNvcnRlZEFyciB9O1xuICAgIH1cbikoKVxuXG5leHBvcnQgeyBjb2xsZWN0SW5wdXRzLCBzb3J0VGFza3MgfSIsImltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgdGFza3MgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBpZCkgPT4ge1xuICAgIGxldCBfdGl0bGUgPSB0aXRsZTtcbiAgICBsZXQgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgbGV0IF9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBsZXQgX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgbGV0IF9zdGF0dXMgPSBzdGF0dXM7XG4gICAgbGV0IF9pZCA9IGlkO1xuXG4gICAgY29uc3QgZ2V0ID0ge1xuICAgICAgICBUaXRsZTogKCkgPT4gX3RpdGxlLFxuICAgICAgICBEZXNjcmlwdGlvbjogKCkgPT4gX2Rlc2NyaXB0aW9uLFxuICAgICAgICBEdWVEYXRlOiAoKSA9PiBfZHVlRGF0ZSxcbiAgICAgICAgUHJpb3JpdHk6ICgpID0+IF9wcmlvcml0eSxcbiAgICAgICAgU3RhdHVzOiAoKSA9PiBfc3RhdHVzLFxuICAgICAgICBUaW1lUmVtYWluaW5nOiAoKSA9PiBmb3JtYXREaXN0YW5jZVRvTm93KG5ldyBEYXRlKF9kdWVEYXRlKSwgeyBhZGRTdWZmaXg6IHRydWUgfSksXG4gICAgICAgIElkOiAoKSA9PiBfaWQsXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0ID0ge1xuICAgICAgICBUaXRsZTogKG5ld1RpdGxlKSA9PiBfdGl0bGUgPSBuZXdUaXRsZSxcbiAgICAgICAgRGVzY3JpcHRpb246IChuZXdEZXNjcmlwdGlvbikgPT4gX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24sXG4gICAgICAgIER1ZURhdGU6IChuZXdEdWVEYXRlKSA9PiBfZHVlRGF0ZSA9IG5ld0R1ZURhdGUsXG4gICAgICAgIFByaW9yaXR5OiAobmV3UHJpb3JpdHkpID0+IF9wcmlvcml0eSA9IG5ld1ByaW9yaXR5LFxuICAgICAgICBTdGF0dXM6IChuZXdTdGF0dXMpID0+IF9zdGF0dXMgPSBuZXdTdGF0dXMsXG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXQsIHNldCB9XG5cbn1cblxuZXhwb3J0IHsgdGFza3MgfSIsImltcG9ydCB7IHNvcnRUYXNrcyB9IGZyb20gJy4vZm9ybUlucHV0cy5qcydcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsJ1xuaW1wb3J0IHsgYWRkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy5qcyc7XG5cbmNvbnN0IGNyZWF0ZVRhc2tzRGl2cyA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY3JlYXRlU2xpZGVyID0gKGRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2xpZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzbGlkZXJEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzbGlkZXJEaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcicpO1xuICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdyb3VuZCcpO1xuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICBzbGlkZXJEaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNsaWRlckRpdik7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUluZm8gPSAobnVtLCBhcnIsIGRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW5mb0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luZm9EaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgcGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwYXJhMS50ZXh0Q29udGVudCA9IGFycltudW1dLmdldC5UaXRsZSgpICsgJzonO1xuICAgICAgICAgICAgcGFyYTEuc3R5bGVbJ2ZvbnQtc2l6ZSddID0gJzEuNXJlbSc7XG4gICAgICAgICAgICBwYXJhMi50ZXh0Q29udGVudCA9IGFycltudW1dLmdldC5UaW1lUmVtYWluaW5nKCk7XG4gICAgICAgICAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHBhcmExKTtcbiAgICAgICAgICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQocGFyYTIpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGluZm9EaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3JlYXRlQnV0dG9ucyA9IChkaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbjFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbjJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJ1dHRvbjFEaXYuY2xhc3NMaXN0LmFkZCgnZWRpdEJ1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uMURpdi5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYXMgZmEtZWRpdCc+PC9pPlwiO1xuICAgICAgICAgICAgYnV0dG9uMkRpdi5jbGFzc0xpc3QuYWRkKCdkZWxldGVCdXR0b24nKVxuICAgICAgICAgICAgYnV0dG9uMkRpdi5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYXMgZmEtdHJhc2gtYWx0Jz48L2k+XCJcbiAgICAgICAgICAgIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uc0RpdicpXG4gICAgICAgICAgICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGJ1dHRvbjFEaXYpO1xuICAgICAgICAgICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChidXR0b24yRGl2KTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVkaXRDb2xvcnMgPSAobnVtLCBhcnIsIGRpdikgPT4ge1xuICAgICAgICAgICAgaWYgKGFycltudW1dLmdldC5Qcmlvcml0eSgpID09PSAnSGlnaCcpIHtcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gJ3JlZCdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyW251bV0uZ2V0LlByaW9yaXR5KCkgPT09ICdNZWRpdW0nKSB7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9ICd5ZWxsb3cnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJbbnVtXS5nZXQuUHJpb3JpdHkoKSA9PT0gJ0xvdycpIHtcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gJ2N5YW4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgc3RvcmUuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrc0RpdicpO1xuICAgICAgICAgICAgbGV0IHRhc2tzID0gc29ydFRhc2tzLmNyZWF0ZVNvcnRlZEFycigpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YXNrc1tpXS5nZXQuSWQoKX1gKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVTbGlkZXIodGFza0Rpdik7XG4gICAgICAgICAgICAgICAgY3JlYXRlSW5mbyhpLCB0YXNrcywgdGFza0Rpdik7XG4gICAgICAgICAgICAgICAgY3JlYXRlQnV0dG9ucyh0YXNrRGl2KTtcbiAgICAgICAgICAgICAgICBlZGl0Q29sb3JzKGksIHRhc2tzLCB0YXNrRGl2KTtcbiAgICAgICAgICAgICAgICBzdG9yZS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdG9yZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlIH1cbiAgICB9XG4pKClcblxuY29uc3QgcmVuZGVyVGFza3MgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RUYXNrcycpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc0Rpc3BsYXkuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0YXNrc0Rpc3BsYXkuY2hpbGRyZW5baV0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGl2ID0gY3JlYXRlVGFza3NEaXZzLmNyZWF0ZSgpO1xuICAgICAgICAgICAgdGFza3NEaXNwbGF5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICBhZGRFdmVudC5lZGl0QnV0dG9uTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIGFkZEV2ZW50LmRlbGV0ZUJ1dHRvbkxpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcmVuZGVyIH1cbiAgICB9XG4pKClcblxuZXhwb3J0IHsgcmVuZGVyVGFza3MgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
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
/* harmony import */ var _DomDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomDisplay */ "./src/scripts/DomDisplay.js");
/* harmony import */ var _formInputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formInputs */ "./src/scripts/formInputs.js");
/* harmony import */ var _todolistDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolistDisplay */ "./src/scripts/todolistDisplay.js");
/* harmony import */ var _tab_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-switch */ "./src/scripts/tab-switch.js");
/* harmony import */ var _fireBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fireBase */ "./src/scripts/fireBase.js");
/* harmony import */ var _initialpage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initialpage.js */ "./src/scripts/initialpage.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localStorage.js */ "./src/scripts/localStorage.js");
/* harmony import */ var _signInPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signInPage */ "./src/scripts/signInPage.js");









const addEvent = (
    function() {
        const windowListener = () => {
                const bodAdd = document.querySelector('#bodAdd');
                bodAdd.addEventListener('click', _DomDisplay__WEBPACK_IMPORTED_MODULE_0__.formDisplay.create);
        }
        const submitListener = () => {
            const submit = document.querySelector('#submit');
            submit.addEventListener('click', _DomDisplay__WEBPACK_IMPORTED_MODULE_0__.formDisplay.remove);
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
            _DomDisplay__WEBPACK_IMPORTED_MODULE_0__.formDisplay.create();
            let obj = _formInputs__WEBPACK_IMPORTED_MODULE_1__.collectInputs.retrieveTasks(event);
            _DomDisplay__WEBPACK_IMPORTED_MODULE_0__.formDisplay.editForm(obj)
            _formInputs__WEBPACK_IMPORTED_MODULE_1__.collectInputs.deleteTasks(obj.get.Id())
        }

        const editButtonListener = () => {
            const editButton = document.querySelectorAll('.editButton');
            editButton.forEach(button => {
                button.addEventListener('click', editor)
            });
        }

        const deleter = (event) => {
            _formInputs__WEBPACK_IMPORTED_MODULE_1__.collectInputs.deleteTasks(event.currentTarget.parentNode.parentNode.getAttribute('id'));
            _todolistDisplay__WEBPACK_IMPORTED_MODULE_2__.renderTasks.render()
        }

        const deleteButtonListener = () => {
            const deleteButton = document.querySelectorAll('.deleteButton');
            deleteButton.forEach(button => {
                button.addEventListener('click', deleter)
            })
        }

        const completer = (event) => {
            _formInputs__WEBPACK_IMPORTED_MODULE_1__.collectInputs.changeStatus(event);
            _todolistDisplay__WEBPACK_IMPORTED_MODULE_2__.renderTasks.render()
        }

        const completeButtonListener = () => {
            const sliderDiv = document.querySelectorAll('.sliderDiv');
            sliderDiv.forEach(button => {
                button.addEventListener('click', completer, {
                    capture: false,
                    once: true,
                })
            })
        }

        const projectsButtonListener = () => {
            const projectsButton = document.querySelector('#projects');
            projectsButton.addEventListener('click', _DomDisplay__WEBPACK_IMPORTED_MODULE_0__.projectInput.inputCreate)
        }

        const projectsInputListener = () => {
            const projectsInput = document.querySelector('#projectInput');
            projectsInput.addEventListener('keypress', function(e) {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    _DomDisplay__WEBPACK_IMPORTED_MODULE_0__.projectInput.projectDisplay()
                    _DomDisplay__WEBPACK_IMPORTED_MODULE_0__.projectInput.projectRemove(e)
                    projectListListener();
                }
            })
        }

        const clickableListener = () => {
            const clickable = document.querySelectorAll('.clickable');
            clickable.forEach(elem => {
                elem.addEventListener('click', _tab_switch__WEBPACK_IMPORTED_MODULE_3__.tabSwitchLogic.changeDisplay)
            })
        }

        const projectListListener = () => {
            const projectList = document.querySelectorAll('.projectList');
            projectList.forEach(elem => {
                elem.addEventListener('click', _tab_switch__WEBPACK_IMPORTED_MODULE_3__.tabSwitchLogic.changeDisplay)
            })
        }

        const removeButtonListener = () => {
            const removeButtons = document.querySelectorAll('.removeButton');
            removeButtons.forEach(elem => {
                elem.addEventListener('click', _DomDisplay__WEBPACK_IMPORTED_MODULE_0__.projectInput.projectRemove)
            })
        }

        const intemediateSignIn = async () => {
            const { displayName, photoURL } = await (0,_fireBase__WEBPACK_IMPORTED_MODULE_4__.googleButtonSignIn)()
            const header = document.querySelector("#header");
            const infoDisplay = document.createElement('div');
            infoDisplay.id = "infoDisplay"
            const display = document.createElement('img');
            display.id = "display";
            display.src = photoURL;
            const name = document.createElement('p');
            name.id = "name";
            name.textContent = displayName;
            infoDisplay.appendChild(display);
            infoDisplay.appendChild(name);
            header.appendChild(infoDisplay);
            await (0,_fireBase__WEBPACK_IMPORTED_MODULE_4__.getData)()
        }

        const googleButtonListener = () => {
            const containerDiv = document.querySelector("#googleButton");
            containerDiv.addEventListener('click', intemediateSignIn)
        }

        const localStorageSignIn = () => {
            _signInPage__WEBPACK_IMPORTED_MODULE_7__.globalStorage.set("local");
            const containerDiv = document.querySelector("#signIn");
            containerDiv.remove()
            _initialpage_js__WEBPACK_IMPORTED_MODULE_5__.display.create()
            windowListener()
            clickableListener()
            projectsButtonListener()
            ;(0,_localStorage_js__WEBPACK_IMPORTED_MODULE_6__.storage)()
        }

        const localStorageButtonListener = () => {
            const containerDiv = document.querySelector("#localStorageButton");
            containerDiv.addEventListener('click', localStorageSignIn)
        }

        return { 
                windowListener, 
                submitListener, 
                preventEnter, 
                editButtonListener, 
                deleteButtonListener,
                projectsButtonListener,
                projectsInputListener,
                completeButtonListener,
                clickableListener,
                projectListListener,
                removeButtonListener,
                googleButtonListener,
                localStorageButtonListener,
            };
    }
)()



/***/ }),

/***/ "./src/scripts/fireBase.js":
/*!*********************************!*\
  !*** ./src/scripts/fireBase.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "googleButtonSignIn": () => (/* binding */ googleButtonSignIn),
/* harmony export */   "uploadTask": () => (/* binding */ uploadTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "updateStatus": () => (/* binding */ updateStatus),
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.js */ "./src/scripts/events.js");
/* harmony import */ var _initialpage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initialpage.js */ "./src/scripts/initialpage.js");
/* harmony import */ var _signInPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signInPage */ "./src/scripts/signInPage.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo.js */ "./src/scripts/todo.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _formInputs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formInputs.js */ "./src/scripts/formInputs.js");
/* harmony import */ var _todolistDisplay_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todolistDisplay.js */ "./src/scripts/todolistDisplay.js");











const firebaseConfig = {
    apiKey: "AIzaSyDIiq9QPO-5xaZ5rCyFbVPV8tlduboIrl4",
    authDomain: "to-do-list-2000.firebaseapp.com",
    projectId: "to-do-list-2000",
    storageBucket: "to-do-list-2000.appspot.com",
    messagingSenderId: "1058161618460",
    appId: "1:1058161618460:web:e7c26cb8e89c76ee68b9d9"
};

const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig)

const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)()

let displayName;
let photoURL;
let userId

const googleButtonSignIn = async () => {
    _signInPage__WEBPACK_IMPORTED_MODULE_5__.globalStorage.set("google");
    const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();
    await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)((0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(), provider);
    const containerDiv = document.querySelector("#signIn");
    _initialpage_js__WEBPACK_IMPORTED_MODULE_4__.display.create();
    _events_js__WEBPACK_IMPORTED_MODULE_3__.addEvent.windowListener();
    _events_js__WEBPACK_IMPORTED_MODULE_3__.addEvent.clickableListener();
    _events_js__WEBPACK_IMPORTED_MODULE_3__.addEvent.projectsButtonListener();
    containerDiv.remove()
    return {
        displayName,
        photoURL,
    }
}

const authStateObserver = (user) => {
    if(user) {
        displayName = user.displayName;
        photoURL = user.photoURL;
        userId = user.uid
    }else {
        const infoDisplay = document.querySelector("#infoDisplay");
        if(infoDisplay) {
            infoDisplay.remove();
        }
    }
}

;(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)((0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(), authStateObserver)

const uploadTask = async (obj) => {
    const projectName = document.querySelector('#bodHead').children[0].textContent;

    try {
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, displayName, projectName), {
            [`${obj.get.Title()}`]: {
                Title: obj.get.Title(),
                Description: obj.get.Description(),
                DueDate: obj.get.DueDate(),
                Priority: obj.get.Priority(),
                Status: obj.get.Status(),
                Id: obj.get.Id(),
            },
            userID: userId,
        }, { merge: true });
    }catch(err) {
        console.log("Document could not be uploaded", err);
    }
}

const deleteTask = async (obj) => {
    const projectName = document.querySelector('#bodHead').children[0].textContent;
    try {
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, displayName, projectName), {
            [`${obj.get.Title()}`]: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteField)()
        })
    }catch (err) {
        console.log("Document could not be deleted", err);
    }
}

const updateStatus = async (obj) => {
    const projectName = document.querySelector('#bodHead').children[0].textContent;
    try {
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, displayName, projectName), {
            [`${obj.get.Title()}`]: {
                Title: obj.get.Title(),
                Description: obj.get.Description(),
                DueDate: obj.get.DueDate(),
                Priority: obj.get.Priority(),
                Status: obj.get.Status(),
                Id: obj.get.Id(),
            }
        })
    }catch (err) {
        console.log("Document could not be updated", err);
    }
}

const getData = async () => {
    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, displayName))
    let newObj = {};

    querySnapshot.forEach((doc) => {
        let newarr = [];

        let keys = Object.keys(doc.data())
        for(let i = 0; i < keys.length; i++) {
            if(keys[i] !== "userID"){
                const currentObj = doc.data()[keys[i]]
                newarr.push((0,_todo_js__WEBPACK_IMPORTED_MODULE_6__.tasks)(currentObj.Title, currentObj.Description, currentObj.DueDate, currentObj.Priority, currentObj.Status, currentObj.Id))
            }
        }

       newObj[`${doc.id}`] = newarr
    })

    console.log(newObj)

    lodash__WEBPACK_IMPORTED_MODULE_7___default().assignIn(_formInputs_js__WEBPACK_IMPORTED_MODULE_8__.sortTasks.projectsHolder, newObj);
    _todolistDisplay_js__WEBPACK_IMPORTED_MODULE_9__.renderTasks.render();
    _todolistDisplay_js__WEBPACK_IMPORTED_MODULE_9__.renderTasks.renderProjects();

}

const removeProject = async (name) => {
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, displayName, name));
}








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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isBefore/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isEqual/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Json_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Json-function.js */ "./src/scripts/Json-function.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage.js */ "./src/scripts/localStorage.js");
/* harmony import */ var _signInPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signInPage */ "./src/scripts/signInPage.js");
/* harmony import */ var _fireBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fireBase */ "./src/scripts/fireBase.js");








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
            const currentTask = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.tasks)(title.value, description.value, dueDate.value, priority.value, "incomplete", counter.length.toString());
            todolist.push(currentTask);
            sortTasks.addProject();
            _signInPage__WEBPACK_IMPORTED_MODULE_4__.globalStorage.value === "local" ? localStorage.setItem('todolist', _Json_function_js__WEBPACK_IMPORTED_MODULE_2__.default.stringify((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.obtainValues)(sortTasks.projectsHolder))) : (0,_fireBase__WEBPACK_IMPORTED_MODULE_5__.uploadTask)(currentTask);
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
                    const removed = sortTasks.projectsHolder[projectName].splice(i, 1);
                    lodash__WEBPACK_IMPORTED_MODULE_1___default().pullAll(todolist, [...todolist]);
                    todolist.push(...sortTasks.projectsHolder[projectName]);
                    _signInPage__WEBPACK_IMPORTED_MODULE_4__.globalStorage.value === "local" ? localStorage.setItem('todolist', _Json_function_js__WEBPACK_IMPORTED_MODULE_2__.default.stringify((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.obtainValues)(sortTasks.projectsHolder))) :  (0,_fireBase__WEBPACK_IMPORTED_MODULE_5__.deleteTask)(removed[0]);
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
                        _signInPage__WEBPACK_IMPORTED_MODULE_4__.globalStorage.value === "local" ? localStorage.setItem('todolist', _Json_function_js__WEBPACK_IMPORTED_MODULE_2__.default.stringify((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.obtainValues)(sortTasks.projectsHolder))) : (0,_fireBase__WEBPACK_IMPORTED_MODULE_5__.updateStatus)(sortTasks.projectsHolder[projectName][i]);

                    } else if (oldStatus === 'complete') {
                        sortTasks.projectsHolder[projectName][i].set.Status('incomplete')
                        lodash__WEBPACK_IMPORTED_MODULE_1___default().pullAll(todolist, [...todolist])
                        todolist.push(...sortTasks.projectsHolder[projectName])
                        _signInPage__WEBPACK_IMPORTED_MODULE_4__.globalStorage.value === "local" ? localStorage.setItem('todolist', _Json_function_js__WEBPACK_IMPORTED_MODULE_2__.default.stringify((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.obtainValues)(sortTasks.projectsHolder))) : (0,_fireBase__WEBPACK_IMPORTED_MODULE_5__.updateStatus)(sortTasks.projectsHolder[projectName][i]);

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
            (0,_fireBase__WEBPACK_IMPORTED_MODULE_5__.removeProject)(name);
        }

        const createSortedArr = () => {
            const Name = document.querySelector('#bodHead').children[0].textContent;
            if (projectsHolder[Name].length > 1) {
                const sorted = projectsHolder[Name].sort(function(a, b) {
                    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(new Date(a.get.DueDate()), new Date(b.get.DueDate()))) {
                        return 1;
                    }
                    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.default)(new Date(a.get.DueDate()), new Date(b.get.DueDate()))) {
                        return -1;
                    }
                    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_8__.default)(new Date(a.get.DueDate()), new Date(b.get.DueDate()))) {
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

/***/ "./src/scripts/initialpage.js":
/*!************************************!*\
  !*** ./src/scripts/initialpage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "display": () => (/* binding */ display)
/* harmony export */ });
/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _signInPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signInPage */ "./src/scripts/signInPage.js");



const head = (
    function() {
        const header = document.createElement('div');
        const div = document.createElement('div');
        div.id = "begin";
        header.setAttribute('id', 'header');
        const myFan = document.createElement('i');
        myFan.innerHTML = '<i class="fas fa-fan"></i>'
        const para = document.createElement('p');
        para.textContent = 'Your To-Do-List';
        div.appendChild(myFan);
        div.appendChild(para);
        header.appendChild(div);
        return { header }
    }
)()

const aside = (
    function() {
        const sidebar = document.createElement('div');
        sidebar.setAttribute('id', 'sidebar');
        const oneli = document.createElement('ul');
        oneli.setAttribute("id", 'oneli');
        const init = undefined;
        const today = undefined;
        const thisWeek = undefined;
        const newProject = undefined;
        const plus = undefined;
        const createLi = (name, element, text) => {
            name = document.createElement('li');
            name.classList.add('nav');
            if (text !== 'Projects' && text !== '') {
                name.classList.add('clickable')
            }
            if (text === '') {
                name.setAttribute('id', 'new');
                const ul = document.createElement('ul');
                ul.setAttribute('id', 'projectList');
                name.appendChild(ul);
                name.classList.remove('nav');
            } else { name.setAttribute('id', text); }
            if (text === 'Default') {
                name.classList.add('active')
            }
            const i = document.createElement('i')
            i.innerHTML = element
            i.setAttribute('id', `${text}projects`)
            name.appendChild(i)
            const words = document.createElement('p');
            words.textContent = text;
            name.appendChild(words);
            oneli.appendChild(name);
        }
        createLi(init, '<i class="fas fa-tasks"></i>', 'Default');
        createLi(today, '<i class="fas fa-calendar-day"></i>', 'Today');
        createLi(thisWeek, '<i class="fas fa-calendar-week">', 'This Week');
        createLi(newProject, '<i class="fas fa-project-diagram">', 'Projects');
        createLi(plus, '<i class="fas fa-plus">', '')
        sidebar.appendChild(oneli)
        return { sidebar }
    }
)()

const body = (
    function() {
        const bod = document.createElement('div');
        bod.setAttribute('id', 'bod');
        const bodHead = document.createElement('div');
        bodHead.setAttribute('id', 'bodHead')
        const bodHeadp = document.createElement('p');
        bodHeadp.textContent = 'Default';
        bodHead.appendChild(bodHeadp);
        const tasks = document.createElement('div');
        tasks.setAttribute('id', 'bodTasks');
        const add = document.createElement('div');
        add.setAttribute('id', 'bodAdd');
        add.innerHTML = '<i class="fas fa-plus">';
        bod.appendChild(bodHead);
        bod.appendChild(tasks);
        bod.appendChild(add);
        return { bod }
    }
)()

const display = (
    function() {
        const container = document.querySelector('div#container');
        const create = () => {
            container.appendChild(head.header);
            container.appendChild(aside.sidebar);
            container.appendChild(body.bod);

        }
        return { create }
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

/***/ "./src/scripts/signInPage.js":
/*!***********************************!*\
  !*** ./src/scripts/signInPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globalStorage": () => (/* binding */ globalStorage),
/* harmony export */   "signIn": () => (/* binding */ signIn)
/* harmony export */ });

let globalStorage = {
    value: null,
    set(newValue) {
        this.value = newValue;
    }
};

const signIn = () => {
    const root =  document.querySelector("#container");
    const containerDiv = document.createElement("div");
    containerDiv.id = "signIn";
    const localStorageButton = document.createElement("button");
    localStorageButton.textContent = "Sign In With Local Storage";
    localStorageButton.id = "localStorageButton";
    const googleButton = document.createElement("button");
    googleButton.textContent = "Sign In With Google";
    googleButton.id = "googleButton";
    containerDiv.appendChild(localStorageButton);
    containerDiv.appendChild(googleButton);
    root.appendChild(containerDiv);
};






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
                if (elem !== 'Default' && elem !== 'Today' && elem !== 'This Week') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVFQUErQjtBQUNuRCxvQkFBb0IscUVBQTZCO0FBQ2pEO0FBQ0E7QUFDQSxZQUFZLG9FQUE0QjtBQUN4Qzs7QUFFQSxpQkFBaUI7QUFDakI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy9Eb21EaXNwbGF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy9Kc29uLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy9kYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy9maXJlQmFzZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvZm9ybUlucHV0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvaW5pdGlhbHBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvc2lnbkluUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvdGFiLXN3aXRjaC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvdG9kb2xpc3REaXNwbGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbFwiO1xuaW1wb3J0IHsgYWRkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy5qcyc7XG5pbXBvcnQgeyBjb2xsZWN0SW5wdXRzLCBzb3J0VGFza3MgfSBmcm9tICcuL2Zvcm1JbnB1dHMuanMnO1xuaW1wb3J0IHsgcmVuZGVyVGFza3MgfSBmcm9tICcuL3RvZG9saXN0RGlzcGxheS5qcyc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IGlucHV0cyA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgY3JlYXRlSW5wdXRzID0gKHR5cGUsIG5hbWUsIGRlc2NyaXB0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIG5hbWUpO1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBkZXNjcmlwdCArIFwiOlwiO1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwidGV4dGFyZWFcIikge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImRhdGVcIikge1xuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgYCR7Zm9ybWF0KG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgbmV3IERhdGUoKS5nZXRNb250aCgpLCBuZXcgRGF0ZSgpLmdldERhdGUoKSksICd5eXl5LU1NLWRkJyl9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBuYW1lKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGRlc2NyaXB0KTtcbiAgICAgICAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlSW5wdXRzKCd0ZXh0JywgJ3RpdGxlJywgJ1RpdGxlJyk7XG4gICAgICAgIGNyZWF0ZUlucHV0cygndGV4dGFyZWEnLCAnZGVzY3JpcHRpb24nLCAnRGVzY3JpcHRpb24nKTtcbiAgICAgICAgY3JlYXRlSW5wdXRzKCdkYXRlJywgJ2R1ZURhdGUnLCAnRHVlRGF0ZScpO1xuICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0bGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBzZWxlY3RsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0bGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6J1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpXG4gICAgICAgIGNvbnN0IGNyZWF0ZU9wdGlvbnMgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCB2YWx1ZSk7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIFwiXCIpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZU9wdGlvbnMoJycpXG4gICAgICAgIGNyZWF0ZU9wdGlvbnMoJ0hpZ2gnKTtcbiAgICAgICAgY3JlYXRlT3B0aW9ucygnTWVkaXVtJyk7XG4gICAgICAgIGNyZWF0ZU9wdGlvbnMoJ0xvdycpO1xuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtcGFwZXItcGxhbmVcIj4nO1xuICAgICAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgICAgc3VibWl0LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdidXR0b24nKTtcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0Jyk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0bGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgcmV0dXJuIHsgZm9ybSB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IGJhY2tncm91bmQgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBibHVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmx1cicpO1xuICAgICAgICByZXR1cm4geyBibHVyIH1cbiAgICB9XG4pKClcblxuY29uc3QgZm9ybURpc3BsYXkgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250YWluZXInKTtcbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0cy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kLmJsdXIpO1xuICAgICAgICAgICAgYWRkRXZlbnQucHJldmVudEVudGVyKCk7XG4gICAgICAgICAgICBhZGRFdmVudC5zdWJtaXRMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbGxlY3RJbnB1dHMuY3JlYXRlVGFza3MoKTtcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbnMgPSBpbnB1dHMuZm9ybS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5zW2ldLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChpbnB1dHMuZm9ybSk7XG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoYmFja2dyb3VuZC5ibHVyKTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVkaXRGb3JtID0gKHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWUgPSB2YWx1ZXMuZ2V0LlRpdGxlKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZSA9IHZhbHVlcy5nZXQuRGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJykudmFsdWUgPSB2YWx1ZXMuZ2V0LkR1ZURhdGUoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QnKS52YWx1ZSA9IHZhbHVlcy5nZXQuUHJpb3JpdHkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjcmVhdGUsIHJlbW92ZSwgZWRpdEZvcm0gfTtcbiAgICB9XG4pKClcblxuY29uc3QgcHJvamVjdElucHV0ID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBpbnB1dENyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdElucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RJbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBwcm9qZWN0IG5hbWUnKTtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbiAgICAgICAgICAgIHByb2plY3RzQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5wdXRDcmVhdGUpO1xuICAgICAgICAgICAgYWRkRXZlbnQucHJvamVjdHNJbnB1dExpc3RlbmVyKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcHJvamVjdERpc3BsYXkgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0SW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RMaXN0Jyk7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGlzdCcpXG4gICAgICAgICAgICBsaS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3JlbW92ZUJ1dHRvbicpXG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhcycpO1xuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdmYS13aW5kb3ctY2xvc2UnKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICBhZGRFdmVudC5wcm9qZWN0c0J1dHRvbkxpc3RlbmVyKCk7XG4gICAgICAgICAgICBhZGRFdmVudC5yZW1vdmVCdXR0b25MaXN0ZW5lcigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dFJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0SW5wdXQnKVxuICAgICAgICAgICAgcHJvamVjdElucHV0LnJlbW92ZSgpXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFJlbW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcE5hbWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnByZXZpb3VzU2libGluZy50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHNvcnRUYXNrcy5kZWxldGVQcm9qZWN0KHBOYW1lKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7IGlucHV0Q3JlYXRlLCBwcm9qZWN0RGlzcGxheSwgcHJvamVjdElucHV0UmVtb3ZlLCBwcm9qZWN0UmVtb3ZlIH07XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IGZvcm1EaXNwbGF5LCBwcm9qZWN0SW5wdXQgfTsiLCJ2YXIgSlNPTmZuO1xuaWYgKCFKU09OZm4pIHtcbiAgICBKU09OZm4gPSB7fTtcbn1cbihmdW5jdGlvbigpIHtcbiAgICBKU09OZm4uc3RyaW5naWZ5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmosIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIi9GdW5jdGlvbihcIiArIHZhbHVlLnRvU3RyaW5nKCkgKyBcIikvXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBKU09OZm4ucGFyc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgdmFsdWUuc3RhcnRzV2l0aChcIi9GdW5jdGlvbihcIikgJiZcbiAgICAgICAgICAgICAgICB2YWx1ZS5lbmRzV2l0aChcIikvXCIpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMTAsIHZhbHVlLmxlbmd0aCAtIDIpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgZXZhbCkoXCIoXCIgKyB2YWx1ZSArIFwiKVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgSlNPTmZuIiwiaW1wb3J0IHsgaXNUb2RheSwgaXNUaGlzV2VlayB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgc29ydFRhc2tzIH0gZnJvbSAnLi9mb3JtSW5wdXRzLmpzJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgZGF0ZXMgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBUb2RheSA9IFtdO1xuICAgICAgICBsZXQgVGhpc1dlZWsgPSBbXTtcbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtIGluIHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW2VsZW1dLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltlbGVtXVtpXS5nZXQuRHVlRGF0ZSgpKSkgJiYgZWxlbSAhPT0gXCJUb2RheVwiICYmIGVsZW0gIT09ICdUaGlzIFdlZWsnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUb2RheS5wdXNoKHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltlbGVtXVtpXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUaGlzV2VlayhuZXcgRGF0ZShzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbZWxlbV1baV0uZ2V0LkR1ZURhdGUoKSkpICYmIGVsZW0gIT09IFwiVG9kYXlcIiAmJiBlbGVtICE9PSAnVGhpcyBXZWVrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgVGhpc1dlZWsucHVzaChzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbZWxlbV1baV0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbJ1RvZGF5J10gPSBbLi4uVG9kYXldO1xuICAgICAgICAgICAgc29ydFRhc2tzLnByb2plY3RzSG9sZGVyWydUaGlzIFdlZWsnXSA9IFsuLi5UaGlzV2Vla107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICAgICAgICAgIF8ucHVsbEFsbChUb2RheSwgWy4uLlRvZGF5XSk7XG4gICAgICAgICAgICBfLnB1bGxBbGwoVGhpc1dlZWssIFsuLi5UaGlzV2Vla10pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSwgY2xlYXIgfVxuICAgIH1cbikoKVxuXG5leHBvcnQgeyBkYXRlcyB9IiwiaW1wb3J0IHsgZm9ybURpc3BsYXksIHByb2plY3RJbnB1dCB9IGZyb20gJy4vRG9tRGlzcGxheSc7XG5pbXBvcnQgeyBjb2xsZWN0SW5wdXRzIH0gZnJvbSAnLi9mb3JtSW5wdXRzJztcbmltcG9ydCB7IHJlbmRlclRhc2tzIH0gZnJvbSAnLi90b2RvbGlzdERpc3BsYXknO1xuaW1wb3J0IHsgdGFiU3dpdGNoTG9naWMgfSBmcm9tICcuL3RhYi1zd2l0Y2gnO1xuaW1wb3J0IHsgZ29vZ2xlQnV0dG9uU2lnbkluLCBnZXREYXRhIH0gZnJvbSBcIi4vZmlyZUJhc2VcIjtcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tICcuL2luaXRpYWxwYWdlLmpzJztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBnbG9iYWxTdG9yYWdlIH0gZnJvbSAnLi9zaWduSW5QYWdlJztcblxuY29uc3QgYWRkRXZlbnQgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHdpbmRvd0xpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvZEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RBZGQnKTtcbiAgICAgICAgICAgICAgICBib2RBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmb3JtRGlzcGxheS5jcmVhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN1Ym1pdExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdCcpO1xuICAgICAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZm9ybURpc3BsYXkucmVtb3ZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXZlbnRFbnRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVkaXRvciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgZm9ybURpc3BsYXkuY3JlYXRlKCk7XG4gICAgICAgICAgICBsZXQgb2JqID0gY29sbGVjdElucHV0cy5yZXRyaWV2ZVRhc2tzKGV2ZW50KTtcbiAgICAgICAgICAgIGZvcm1EaXNwbGF5LmVkaXRGb3JtKG9iailcbiAgICAgICAgICAgIGNvbGxlY3RJbnB1dHMuZGVsZXRlVGFza3Mob2JqLmdldC5JZCgpKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0QnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0b3IpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbGxlY3RJbnB1dHMuZGVsZXRlVGFza3MoZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzLnJlbmRlcigpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b25MaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVCdXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wbGV0ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbGxlY3RJbnB1dHMuY2hhbmdlU3RhdHVzKGV2ZW50KTtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzLnJlbmRlcigpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wbGV0ZUJ1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2xpZGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlckRpdicpO1xuICAgICAgICAgICAgc2xpZGVyRGl2LmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb21wbGV0ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0c0J1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcbiAgICAgICAgICAgIHByb2plY3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdElucHV0LmlucHV0Q3JlYXRlKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdHNJbnB1dExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0SW5wdXQnKTtcbiAgICAgICAgICAgIHByb2plY3RzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5wdXQucHJvamVjdERpc3BsYXkoKVxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5wdXQucHJvamVjdFJlbW92ZShlKVxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdExpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsaWNrYWJsZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xpY2thYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsaWNrYWJsZScpO1xuICAgICAgICAgICAgY2xpY2thYmxlLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhYlN3aXRjaExvZ2ljLmNoYW5nZURpc3BsYXkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RMaXN0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWJTd2l0Y2hMb2dpYy5jaGFuZ2VEaXNwbGF5KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmVCdXR0b24nKTtcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbnMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdElucHV0LnByb2plY3RSZW1vdmUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW50ZW1lZGlhdGVTaWduSW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGRpc3BsYXlOYW1lLCBwaG90b1VSTCB9ID0gYXdhaXQgZ29vZ2xlQnV0dG9uU2lnbkluKClcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpO1xuICAgICAgICAgICAgY29uc3QgaW5mb0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGluZm9EaXNwbGF5LmlkID0gXCJpbmZvRGlzcGxheVwiXG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBkaXNwbGF5LmlkID0gXCJkaXNwbGF5XCI7XG4gICAgICAgICAgICBkaXNwbGF5LnNyYyA9IHBob3RvVVJMO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIG5hbWUuaWQgPSBcIm5hbWVcIjtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBkaXNwbGF5TmFtZTtcbiAgICAgICAgICAgIGluZm9EaXNwbGF5LmFwcGVuZENoaWxkKGRpc3BsYXkpO1xuICAgICAgICAgICAgaW5mb0Rpc3BsYXkuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaW5mb0Rpc3BsYXkpO1xuICAgICAgICAgICAgYXdhaXQgZ2V0RGF0YSgpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnb29nbGVCdXR0b25MaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ29vZ2xlQnV0dG9uXCIpO1xuICAgICAgICAgICAgY29udGFpbmVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW50ZW1lZGlhdGVTaWduSW4pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2NhbFN0b3JhZ2VTaWduSW4gPSAoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWxTdG9yYWdlLnNldChcImxvY2FsXCIpO1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWduSW5cIik7XG4gICAgICAgICAgICBjb250YWluZXJEaXYucmVtb3ZlKClcbiAgICAgICAgICAgIGRpc3BsYXkuY3JlYXRlKClcbiAgICAgICAgICAgIHdpbmRvd0xpc3RlbmVyKClcbiAgICAgICAgICAgIGNsaWNrYWJsZUxpc3RlbmVyKClcbiAgICAgICAgICAgIHByb2plY3RzQnV0dG9uTGlzdGVuZXIoKVxuICAgICAgICAgICAgc3RvcmFnZSgpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2NhbFN0b3JhZ2VCdXR0b25MaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYWxTdG9yYWdlQnV0dG9uXCIpO1xuICAgICAgICAgICAgY29udGFpbmVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9jYWxTdG9yYWdlU2lnbkluKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICAgICAgd2luZG93TGlzdGVuZXIsIFxuICAgICAgICAgICAgICAgIHN1Ym1pdExpc3RlbmVyLCBcbiAgICAgICAgICAgICAgICBwcmV2ZW50RW50ZXIsIFxuICAgICAgICAgICAgICAgIGVkaXRCdXR0b25MaXN0ZW5lciwgXG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgcHJvamVjdHNCdXR0b25MaXN0ZW5lcixcbiAgICAgICAgICAgICAgICBwcm9qZWN0c0lucHV0TGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgY29tcGxldGVCdXR0b25MaXN0ZW5lcixcbiAgICAgICAgICAgICAgICBjbGlja2FibGVMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdExpc3RlbmVyLFxuICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvbkxpc3RlbmVyLFxuICAgICAgICAgICAgICAgIGdvb2dsZUJ1dHRvbkxpc3RlbmVyLFxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZUJ1dHRvbkxpc3RlbmVyLFxuICAgICAgICAgICAgfTtcbiAgICB9XG4pKClcblxuZXhwb3J0IHsgYWRkRXZlbnQgfSIsImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGRlbGV0ZUZpZWxkLCBjb2xsZWN0aW9uLCBnZXREb2NzLCBkb2MsIHNldERvYywgdXBkYXRlRG9jLCBkZWxldGVEb2N9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGdldEF1dGgsIHNpZ25JbldpdGhQb3B1cCwgR29vZ2xlQXV0aFByb3ZpZGVyLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgYWRkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSAnLi9pbml0aWFscGFnZS5qcyc7XG5pbXBvcnQgeyBnbG9iYWxTdG9yYWdlIH0gZnJvbSAnLi9zaWduSW5QYWdlJztcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBzb3J0VGFza3MgfSBmcm9tICcuL2Zvcm1JbnB1dHMuanMnO1xuaW1wb3J0IHsgcmVuZGVyVGFza3MgfSBmcm9tICcuL3RvZG9saXN0RGlzcGxheS5qcyc7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lESWlxOVFQTy01eGFaNXJDeUZiVlBWOHRsZHVib0lybDRcIixcbiAgICBhdXRoRG9tYWluOiBcInRvLWRvLWxpc3QtMjAwMC5maXJlYmFzZWFwcC5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwidG8tZG8tbGlzdC0yMDAwXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJ0by1kby1saXN0LTIwMDAuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMDU4MTYxNjE4NDYwXCIsXG4gICAgYXBwSWQ6IFwiMToxMDU4MTYxNjE4NDYwOndlYjplN2MyNmNiOGU4OWM3NmVlNjhiOWQ5XCJcbn07XG5cbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpXG5cbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKClcblxubGV0IGRpc3BsYXlOYW1lO1xubGV0IHBob3RvVVJMO1xubGV0IHVzZXJJZFxuXG5jb25zdCBnb29nbGVCdXR0b25TaWduSW4gPSBhc3luYyAoKSA9PiB7XG4gICAgZ2xvYmFsU3RvcmFnZS5zZXQoXCJnb29nbGVcIik7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG4gICAgYXdhaXQgc2lnbkluV2l0aFBvcHVwKGdldEF1dGgoKSwgcHJvdmlkZXIpO1xuICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lnbkluXCIpO1xuICAgIGRpc3BsYXkuY3JlYXRlKCk7XG4gICAgYWRkRXZlbnQud2luZG93TGlzdGVuZXIoKTtcbiAgICBhZGRFdmVudC5jbGlja2FibGVMaXN0ZW5lcigpO1xuICAgIGFkZEV2ZW50LnByb2plY3RzQnV0dG9uTGlzdGVuZXIoKTtcbiAgICBjb250YWluZXJEaXYucmVtb3ZlKClcbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5TmFtZSxcbiAgICAgICAgcGhvdG9VUkwsXG4gICAgfVxufVxuXG5jb25zdCBhdXRoU3RhdGVPYnNlcnZlciA9ICh1c2VyKSA9PiB7XG4gICAgaWYodXNlcikge1xuICAgICAgICBkaXNwbGF5TmFtZSA9IHVzZXIuZGlzcGxheU5hbWU7XG4gICAgICAgIHBob3RvVVJMID0gdXNlci5waG90b1VSTDtcbiAgICAgICAgdXNlcklkID0gdXNlci51aWRcbiAgICB9ZWxzZSB7XG4gICAgICAgIGNvbnN0IGluZm9EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmZvRGlzcGxheVwiKTtcbiAgICAgICAgaWYoaW5mb0Rpc3BsYXkpIHtcbiAgICAgICAgICAgIGluZm9EaXNwbGF5LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5vbkF1dGhTdGF0ZUNoYW5nZWQoZ2V0QXV0aCgpLCBhdXRoU3RhdGVPYnNlcnZlcilcblxuY29uc3QgdXBsb2FkVGFzayA9IGFzeW5jIChvYmopID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RIZWFkJykuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBzZXREb2MoZG9jKGRiLCBkaXNwbGF5TmFtZSwgcHJvamVjdE5hbWUpLCB7XG4gICAgICAgICAgICBbYCR7b2JqLmdldC5UaXRsZSgpfWBdOiB7XG4gICAgICAgICAgICAgICAgVGl0bGU6IG9iai5nZXQuVGl0bGUoKSxcbiAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogb2JqLmdldC5EZXNjcmlwdGlvbigpLFxuICAgICAgICAgICAgICAgIER1ZURhdGU6IG9iai5nZXQuRHVlRGF0ZSgpLFxuICAgICAgICAgICAgICAgIFByaW9yaXR5OiBvYmouZ2V0LlByaW9yaXR5KCksXG4gICAgICAgICAgICAgICAgU3RhdHVzOiBvYmouZ2V0LlN0YXR1cygpLFxuICAgICAgICAgICAgICAgIElkOiBvYmouZ2V0LklkKCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXNlcklEOiB1c2VySWQsXG4gICAgICAgIH0sIHsgbWVyZ2U6IHRydWUgfSk7XG4gICAgfWNhdGNoKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRvY3VtZW50IGNvdWxkIG5vdCBiZSB1cGxvYWRlZFwiLCBlcnIpO1xuICAgIH1cbn1cblxuY29uc3QgZGVsZXRlVGFzayA9IGFzeW5jIChvYmopID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RIZWFkJykuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdXBkYXRlRG9jKGRvYyhkYiwgZGlzcGxheU5hbWUsIHByb2plY3ROYW1lKSwge1xuICAgICAgICAgICAgW2Ake29iai5nZXQuVGl0bGUoKX1gXTogZGVsZXRlRmllbGQoKVxuICAgICAgICB9KVxuICAgIH1jYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnQgY291bGQgbm90IGJlIGRlbGV0ZWRcIiwgZXJyKTtcbiAgICB9XG59XG5cbmNvbnN0IHVwZGF0ZVN0YXR1cyA9IGFzeW5jIChvYmopID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RIZWFkJykuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdXBkYXRlRG9jKGRvYyhkYiwgZGlzcGxheU5hbWUsIHByb2plY3ROYW1lKSwge1xuICAgICAgICAgICAgW2Ake29iai5nZXQuVGl0bGUoKX1gXToge1xuICAgICAgICAgICAgICAgIFRpdGxlOiBvYmouZ2V0LlRpdGxlKCksXG4gICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IG9iai5nZXQuRGVzY3JpcHRpb24oKSxcbiAgICAgICAgICAgICAgICBEdWVEYXRlOiBvYmouZ2V0LkR1ZURhdGUoKSxcbiAgICAgICAgICAgICAgICBQcmlvcml0eTogb2JqLmdldC5Qcmlvcml0eSgpLFxuICAgICAgICAgICAgICAgIFN0YXR1czogb2JqLmdldC5TdGF0dXMoKSxcbiAgICAgICAgICAgICAgICBJZDogb2JqLmdldC5JZCgpLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1jYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnQgY291bGQgbm90IGJlIHVwZGF0ZWRcIiwgZXJyKTtcbiAgICB9XG59XG5cbmNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgZGlzcGxheU5hbWUpKVxuICAgIGxldCBuZXdPYmogPSB7fTtcblxuICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgIGxldCBuZXdhcnIgPSBbXTtcblxuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGRvYy5kYXRhKCkpXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihrZXlzW2ldICE9PSBcInVzZXJJRFwiKXtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50T2JqID0gZG9jLmRhdGEoKVtrZXlzW2ldXVxuICAgICAgICAgICAgICAgIG5ld2Fyci5wdXNoKHRhc2tzKGN1cnJlbnRPYmouVGl0bGUsIGN1cnJlbnRPYmouRGVzY3JpcHRpb24sIGN1cnJlbnRPYmouRHVlRGF0ZSwgY3VycmVudE9iai5Qcmlvcml0eSwgY3VycmVudE9iai5TdGF0dXMsIGN1cnJlbnRPYmouSWQpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICBuZXdPYmpbYCR7ZG9jLmlkfWBdID0gbmV3YXJyXG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKG5ld09iailcblxuICAgIF8uYXNzaWduSW4oc29ydFRhc2tzLnByb2plY3RzSG9sZGVyLCBuZXdPYmopO1xuICAgIHJlbmRlclRhc2tzLnJlbmRlcigpO1xuICAgIHJlbmRlclRhc2tzLnJlbmRlclByb2plY3RzKCk7XG5cbn1cblxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IGFzeW5jIChuYW1lKSA9PiB7XG4gICAgYXdhaXQgZGVsZXRlRG9jKGRvYyhkYiwgZGlzcGxheU5hbWUsIG5hbWUpKTtcbn1cblxuZXhwb3J0IHsgZ29vZ2xlQnV0dG9uU2lnbkluLCB1cGxvYWRUYXNrLCBkZWxldGVUYXNrLCB1cGRhdGVTdGF0dXMsIGdldERhdGEsIHJlbW92ZVByb2plY3QgfTtcblxuXG5cblxuIiwiaW1wb3J0IHsgdGFza3MgfSBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IHsgaXNBZnRlciwgaXNCZWZvcmUsIGlzRXF1YWwgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IEpTT05mbiBmcm9tICcuL0pzb24tZnVuY3Rpb24uanMnXG5pbXBvcnQgeyBvYnRhaW5WYWx1ZXMgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcydcbmltcG9ydCB7IGdsb2JhbFN0b3JhZ2UgfSBmcm9tICcuL3NpZ25JblBhZ2UnXG5pbXBvcnQgeyB1cGxvYWRUYXNrLCBkZWxldGVUYXNrLCB1cGRhdGVTdGF0dXMsIHJlbW92ZVByb2plY3QgfSAgZnJvbSBcIi4vZmlyZUJhc2VcIlxuXG5jb25zdCBjb2xsZWN0SW5wdXRzID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgdG9kb2xpc3QgPSBbXTtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBbXTtcblxuICAgICAgICBjb25zdCBjcmVhdGVUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvdW50ZXIucHVzaChudWxsKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QnKTtcbiAgICAgICAgICAgIGlmICh0aXRsZS52YWx1ZSA9PT0gJycgfHwgZHVlRGF0ZS52YWx1ZSA9PT0gJycsIHByaW9yaXR5LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdObyBpbnB1dCBtdXN0IG5vdCBiZSBsZWZ0IGJsYW5rJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGFzayA9IHRhc2tzKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUsIFwiaW5jb21wbGV0ZVwiLCBjb3VudGVyLmxlbmd0aC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRvZG9saXN0LnB1c2goY3VycmVudFRhc2spO1xuICAgICAgICAgICAgc29ydFRhc2tzLmFkZFByb2plY3QoKTtcbiAgICAgICAgICAgIGdsb2JhbFN0b3JhZ2UudmFsdWUgPT09IFwibG9jYWxcIiA/IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvbGlzdCcsIEpTT05mbi5zdHJpbmdpZnkob2J0YWluVmFsdWVzKHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcikpKSA6IHVwbG9hZFRhc2soY3VycmVudFRhc2spO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmV0cmlldmVUYXNrcyA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RIZWFkJykuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBsZXQgaWRlbnQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpZGVudCA9PT0gc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXVtpXS5nZXQuSWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBfLnB1bGxBbGwodG9kb2xpc3QsIFsuLi50b2RvbGlzdF0pXG4gICAgICAgICAgICAgICAgICAgIHRvZG9saXN0LnB1c2goLi4uc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV1baV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsZXRlVGFza3MgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEhlYWQnKS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXVtpXS5nZXQuSWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVkID0gc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIF8ucHVsbEFsbCh0b2RvbGlzdCwgWy4uLnRvZG9saXN0XSk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9saXN0LnB1c2goLi4uc29ydFRhc2tzLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFN0b3JhZ2UudmFsdWUgPT09IFwibG9jYWxcIiA/IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvbGlzdCcsIEpTT05mbi5zdHJpbmdpZnkob2J0YWluVmFsdWVzKHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcikpKSA6ICBkZWxldGVUYXNrKHJlbW92ZWRbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoYW5nZVN0YXR1cyA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RIZWFkJykuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBsZXQgaWRlbnQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWRlbnQgPT09IHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV1baV0uZ2V0LklkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9sZFN0YXR1cyA9IHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV1baV0uZ2V0LlN0YXR1cygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob2xkU3RhdHVzID09PSAnaW5jb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV1baV0uc2V0LlN0YXR1cygnY29tcGxldGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5wdWxsQWxsKHRvZG9saXN0LCBbLi4udG9kb2xpc3RdKVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb2xpc3QucHVzaCguLi5zb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdKVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsU3RvcmFnZS52YWx1ZSA9PT0gXCJsb2NhbFwiID8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTmZuLnN0cmluZ2lmeShvYnRhaW5WYWx1ZXMoc29ydFRhc2tzLnByb2plY3RzSG9sZGVyKSkpIDogdXBkYXRlU3RhdHVzKHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV1baV0pO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2xkU3RhdHVzID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdW2ldLnNldC5TdGF0dXMoJ2luY29tcGxldGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5wdWxsQWxsKHRvZG9saXN0LCBbLi4udG9kb2xpc3RdKVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb2xpc3QucHVzaCguLi5zb3J0VGFza3MucHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdKVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsU3RvcmFnZS52YWx1ZSA9PT0gXCJsb2NhbFwiID8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTmZuLnN0cmluZ2lmeShvYnRhaW5WYWx1ZXMoc29ydFRhc2tzLnByb2plY3RzSG9sZGVyKSkpIDogdXBkYXRlU3RhdHVzKHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV1baV0pO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiB7IGNyZWF0ZVRhc2tzLCB0b2RvbGlzdCwgcmV0cmlldmVUYXNrcywgZGVsZXRlVGFza3MsIGNoYW5nZVN0YXR1cyB9O1xuICAgIH1cbikoKVxuXG5jb25zdCBzb3J0VGFza3MgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzSG9sZGVyID0ge307XG5cbiAgICAgICAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZEhlYWQnKS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGlmIChjb2xsZWN0SW5wdXRzLnRvZG9saXN0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdID0gWy4uLl8uZGlmZmVyZW5jZVdpdGgoWy4uLnByb2plY3RzSG9sZGVyW3Byb2plY3ROYW1lXV0sIFsuLi5jb2xsZWN0SW5wdXRzLnRvZG9saXN0XSwgXy5pc0VxdWFsKSwgLi4uY29sbGVjdElucHV0cy50b2RvbGlzdF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNIb2xkZXJbcHJvamVjdE5hbWVdID0gWy4uLmNvbGxlY3RJbnB1dHMudG9kb2xpc3RdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RIZWFkJykuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcm9qZWN0c0hvbGRlcltwcm9qZWN0TmFtZV0gPSBbLi4uY29sbGVjdElucHV0cy50b2RvbGlzdF07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKHBOYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXByb2plY3RzSG9sZGVyW3BOYW1lXSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzSG9sZGVyW3BOYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgcHJvamVjdHNIb2xkZXJbbmFtZV07XG4gICAgICAgICAgICByZW1vdmVQcm9qZWN0KG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3JlYXRlU29ydGVkQXJyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RIZWFkJykuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBpZiAocHJvamVjdHNIb2xkZXJbTmFtZV0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRlZCA9IHByb2plY3RzSG9sZGVyW05hbWVdLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBZnRlcihuZXcgRGF0ZShhLmdldC5EdWVEYXRlKCkpLCBuZXcgRGF0ZShiLmdldC5EdWVEYXRlKCkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQmVmb3JlKG5ldyBEYXRlKGEuZ2V0LkR1ZURhdGUoKSksIG5ldyBEYXRlKGIuZ2V0LkR1ZURhdGUoKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRXF1YWwobmV3IERhdGUoYS5nZXQuRHVlRGF0ZSgpKSwgbmV3IERhdGUoYi5nZXQuRHVlRGF0ZSgpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc29ydGVkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdHNIb2xkZXJbTmFtZV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBhZGRQcm9qZWN0LCBjcmVhdGVTb3J0ZWRBcnIsIGNyZWF0ZU5ld1Byb2plY3QsIHByb2plY3RzSG9sZGVyLCBwcm9qZWN0Q2hhbmdlLCBkZWxldGVQcm9qZWN0IH07XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IGNvbGxlY3RJbnB1dHMsIHNvcnRUYXNrcyB9IiwiaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsXCI7XG5pbXBvcnQgeyBnbG9iYWxTdG9yYWdlIH0gZnJvbSAnLi9zaWduSW5QYWdlJztcblxuY29uc3QgaGVhZCA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaWQgPSBcImJlZ2luXCI7XG4gICAgICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuICAgICAgICBjb25zdCBteUZhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgbXlGYW4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLWZhblwiPjwvaT4nXG4gICAgICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSAnWW91ciBUby1Eby1MaXN0JztcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKG15RmFuKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgcmV0dXJuIHsgaGVhZGVyIH1cbiAgICB9XG4pKClcblxuY29uc3QgYXNpZGUgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZWJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NpZGViYXInKTtcbiAgICAgICAgY29uc3Qgb25lbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBvbmVsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCAnb25lbGknKTtcbiAgICAgICAgY29uc3QgaW5pdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgdG9kYXkgPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHRoaXNXZWVrID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBwbHVzID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBjcmVhdGVMaSA9IChuYW1lLCBlbGVtZW50LCB0ZXh0KSA9PiB7XG4gICAgICAgICAgICBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG4gICAgICAgICAgICBpZiAodGV4dCAhPT0gJ1Byb2plY3RzJyAmJiB0ZXh0ICE9PSAnJykge1xuICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0ZXh0ID09PSAnJykge1xuICAgICAgICAgICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICduZXcnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICAgICAgdWwuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0TGlzdCcpO1xuICAgICAgICAgICAgICAgIG5hbWUuYXBwZW5kQ2hpbGQodWwpO1xuICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnbmF2Jyk7XG4gICAgICAgICAgICB9IGVsc2UgeyBuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCB0ZXh0KTsgfVxuICAgICAgICAgICAgaWYgKHRleHQgPT09ICdEZWZhdWx0Jykge1xuICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICAgICAgICAgIGkuaW5uZXJIVE1MID0gZWxlbWVudFxuICAgICAgICAgICAgaS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGV4dH1wcm9qZWN0c2ApXG4gICAgICAgICAgICBuYW1lLmFwcGVuZENoaWxkKGkpXG4gICAgICAgICAgICBjb25zdCB3b3JkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHdvcmRzLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgICAgIG5hbWUuYXBwZW5kQ2hpbGQod29yZHMpO1xuICAgICAgICAgICAgb25lbGkuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlTGkoaW5pdCwgJzxpIGNsYXNzPVwiZmFzIGZhLXRhc2tzXCI+PC9pPicsICdEZWZhdWx0Jyk7XG4gICAgICAgIGNyZWF0ZUxpKHRvZGF5LCAnPGkgY2xhc3M9XCJmYXMgZmEtY2FsZW5kYXItZGF5XCI+PC9pPicsICdUb2RheScpO1xuICAgICAgICBjcmVhdGVMaSh0aGlzV2VlaywgJzxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLXdlZWtcIj4nLCAnVGhpcyBXZWVrJyk7XG4gICAgICAgIGNyZWF0ZUxpKG5ld1Byb2plY3QsICc8aSBjbGFzcz1cImZhcyBmYS1wcm9qZWN0LWRpYWdyYW1cIj4nLCAnUHJvamVjdHMnKTtcbiAgICAgICAgY3JlYXRlTGkocGx1cywgJzxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj4nLCAnJylcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChvbmVsaSlcbiAgICAgICAgcmV0dXJuIHsgc2lkZWJhciB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IGJvZHkgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGJvZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2Quc2V0QXR0cmlidXRlKCdpZCcsICdib2QnKTtcbiAgICAgICAgY29uc3QgYm9kSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2RIZWFkLnNldEF0dHJpYnV0ZSgnaWQnLCAnYm9kSGVhZCcpXG4gICAgICAgIGNvbnN0IGJvZEhlYWRwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBib2RIZWFkcC50ZXh0Q29udGVudCA9ICdEZWZhdWx0JztcbiAgICAgICAgYm9kSGVhZC5hcHBlbmRDaGlsZChib2RIZWFkcCk7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tzLnNldEF0dHJpYnV0ZSgnaWQnLCAnYm9kVGFza3MnKTtcbiAgICAgICAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JvZEFkZCcpO1xuICAgICAgICBhZGQuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj4nO1xuICAgICAgICBib2QuYXBwZW5kQ2hpbGQoYm9kSGVhZCk7XG4gICAgICAgIGJvZC5hcHBlbmRDaGlsZCh0YXNrcyk7XG4gICAgICAgIGJvZC5hcHBlbmRDaGlsZChhZGQpO1xuICAgICAgICByZXR1cm4geyBib2QgfVxuICAgIH1cbikoKVxuXG5jb25zdCBkaXNwbGF5ID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkLmhlYWRlcik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYXNpZGUuc2lkZWJhcik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9keS5ib2QpO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlIH1cbiAgICB9XG4pKClcblxuZXhwb3J0IHsgZGlzcGxheSB9IiwiaW1wb3J0IHsgc29ydFRhc2tzIH0gZnJvbSAnLi9mb3JtSW5wdXRzLmpzJztcbmltcG9ydCB7IHJlbmRlclRhc2tzIH0gZnJvbSAnLi90b2RvbGlzdERpc3BsYXkuanMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgSlNPTmZuIGZyb20gJy4vSnNvbi1mdW5jdGlvbi5qcydcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSAnLi90b2RvLmpzJztcblxuY29uc3Qgc3RvcmFnZSA9ICgpID0+IHtcbiAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb2xpc3QnKSkpIHtcbiAgICAgICAgbGV0IHZhbHVlc09iaiA9IEpTT05mbi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb2xpc3QnKSk7XG4gICAgICAgIGxldCBuZXdPYmogPSB7fTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlc09iaikge1xuICAgICAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXNPYmpba2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKHRhc2tzKHZhbHVlc09ialtrZXldW2ldLlRpdGxlLCB2YWx1ZXNPYmpba2V5XVtpXS5EZXNjcmlwdGlvbiwgdmFsdWVzT2JqW2tleV1baV0uRHVlRGF0ZSwgdmFsdWVzT2JqW2tleV1baV0uUHJpb3JpdHksIHZhbHVlc09ialtrZXldW2ldLlN0YXR1cywgdmFsdWVzT2JqW2tleV1baV0uSWQpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBhcnI7XG4gICAgICAgIH1cbiAgICAgICAgXy5hc3NpZ25Jbihzb3J0VGFza3MucHJvamVjdHNIb2xkZXIsIG5ld09iaik7XG4gICAgICAgIHJlbmRlclRhc2tzLnJlbmRlcigpO1xuICAgICAgICByZW5kZXJUYXNrcy5yZW5kZXJQcm9qZWN0cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvbGlzdCcsICdbXScpXG4gICAgfVxufVxuXG5jb25zdCBvYnRhaW5WYWx1ZXMgPSAob2JqKSA9PiB7XG4gICAgY29uc3QgbmV3T2JqID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIG5ld09ialtrZXldID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld09ialtrZXldLnB1c2gob2JqW2tleV1baV0udmFsdWVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3T2JqO1xufVxuXG5leHBvcnQgeyBzdG9yYWdlLCBvYnRhaW5WYWx1ZXMgfSIsIlxubGV0IGdsb2JhbFN0b3JhZ2UgPSB7XG4gICAgdmFsdWU6IG51bGwsXG4gICAgc2V0KG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9XG59O1xuXG5jb25zdCBzaWduSW4gPSAoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lckRpdi5pZCA9IFwic2lnbkluXCI7XG4gICAgY29uc3QgbG9jYWxTdG9yYWdlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsb2NhbFN0b3JhZ2VCdXR0b24udGV4dENvbnRlbnQgPSBcIlNpZ24gSW4gV2l0aCBMb2NhbCBTdG9yYWdlXCI7XG4gICAgbG9jYWxTdG9yYWdlQnV0dG9uLmlkID0gXCJsb2NhbFN0b3JhZ2VCdXR0b25cIjtcbiAgICBjb25zdCBnb29nbGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGdvb2dsZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2lnbiBJbiBXaXRoIEdvb2dsZVwiO1xuICAgIGdvb2dsZUJ1dHRvbi5pZCA9IFwiZ29vZ2xlQnV0dG9uXCI7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGxvY2FsU3RvcmFnZUJ1dHRvbik7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGdvb2dsZUJ1dHRvbik7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChjb250YWluZXJEaXYpO1xufTtcblxuZXhwb3J0IHsgZ2xvYmFsU3RvcmFnZSwgc2lnbkluIH1cblxuXG4iLCJpbXBvcnQgeyByZW5kZXJUYXNrcyB9IGZyb20gJy4vdG9kb2xpc3REaXNwbGF5LmpzJ1xuaW1wb3J0IHsgY29sbGVjdElucHV0cywgc29ydFRhc2tzIH0gZnJvbSAnLi9mb3JtSW5wdXRzLmpzJztcbmltcG9ydCB7IGRhdGVzIH0gZnJvbSAnLi9kYXRlUHJvamVjdC5qcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5cbmNvbnN0IHRhYlN3aXRjaExvZ2ljID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjaGFuZ2VEaXNwbGF5ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoZWFkVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RIZWFkJykuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICBjb25zdCB0YXNrc0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9kVGFza3MnKTtcbiAgICAgICAgICAgIGNvbnN0IGJvZEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2RBZGQnKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbGlja2FibGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrYWJsZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdExpc3QnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpY2thYmxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsaWNrYWJsZVtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaWNrYWJsZTIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xpY2thYmxlMltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTJbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NEaXNwbGF5LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tzRGl2LmNoaWxkcmVuW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzRGl2LmNoaWxkcmVuW2ldLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdKSB7XG4gICAgICAgICAgICAgICAgaGVhZFRleHQudGV4dENvbnRlbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkVGV4dC50ZXh0Q29udGVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmlkID09PSAnVG9kYXknIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQgPT09ICdUaGlzIFdlZWsnKSB7XG4gICAgICAgICAgICAgICAgYm9kQWRkLmNsYXNzTGlzdC5hZGQoJ25vRGlzcGxheScpO1xuICAgICAgICAgICAgICAgIGRhdGVzLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIGRhdGVzLmNsZWFyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChib2RBZGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdub0Rpc3BsYXknKSkge1xuICAgICAgICAgICAgICAgICAgICBib2RBZGQuY2xhc3NMaXN0LnJlbW92ZSgnbm9EaXNwbGF5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNvcnRUYXNrcy5jcmVhdGVOZXdQcm9qZWN0KGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlbmRlclRhc2tzLnJlbmRlcigpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5pZCA9PT0gJ1RvZGF5JyB8fCBldmVudC5jdXJyZW50VGFyZ2V0LmlkID09PSAnVGhpcyBXZWVrJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsaWRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJEaXYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbnNEaXYnKTtcbiAgICAgICAgICAgICAgICBzbGlkZXJEaXYuZm9yRWFjaChlbGVtID0+IGVsZW0ucmVtb3ZlKCkpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbnNEaXYuZm9yRWFjaChlbGVtID0+IGVsZW0ucmVtb3ZlKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnB1bGxBbGwoY29sbGVjdElucHV0cy50b2RvbGlzdCwgWy4uLmNvbGxlY3RJbnB1dHMudG9kb2xpc3RdKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNoYW5nZURpc3BsYXkgfVxuICAgIH1cbikoKVxuXG5leHBvcnQgeyB0YWJTd2l0Y2hMb2dpYyB9OyIsImltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgdGFza3MgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBpZCkgPT4ge1xuICAgIGxldCBfdGl0bGUgPSB0aXRsZTtcbiAgICBsZXQgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgbGV0IF9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBsZXQgX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgbGV0IF9zdGF0dXMgPSBzdGF0dXM7XG4gICAgbGV0IF9pZCA9IGlkO1xuXG4gICAgY29uc3QgZ2V0ID0ge1xuICAgICAgICBUaXRsZTogKCkgPT4gX3RpdGxlLFxuICAgICAgICBEZXNjcmlwdGlvbjogKCkgPT4gX2Rlc2NyaXB0aW9uLFxuICAgICAgICBEdWVEYXRlOiAoKSA9PiBfZHVlRGF0ZSxcbiAgICAgICAgUHJpb3JpdHk6ICgpID0+IF9wcmlvcml0eSxcbiAgICAgICAgU3RhdHVzOiAoKSA9PiBfc3RhdHVzLFxuICAgICAgICBUaW1lUmVtYWluaW5nOiAoKSA9PiBmb3JtYXREaXN0YW5jZVRvTm93KG5ldyBEYXRlKF9kdWVEYXRlKSwgeyBhZGRTdWZmaXg6IHRydWUgfSksXG4gICAgICAgIElkOiAoKSA9PiBfaWQsXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0ID0ge1xuICAgICAgICBUaXRsZTogKG5ld1RpdGxlKSA9PiBfdGl0bGUgPSBuZXdUaXRsZSxcbiAgICAgICAgRGVzY3JpcHRpb246IChuZXdEZXNjcmlwdGlvbikgPT4gX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24sXG4gICAgICAgIER1ZURhdGU6IChuZXdEdWVEYXRlKSA9PiBfZHVlRGF0ZSA9IG5ld0R1ZURhdGUsXG4gICAgICAgIFByaW9yaXR5OiAobmV3UHJpb3JpdHkpID0+IF9wcmlvcml0eSA9IG5ld1ByaW9yaXR5LFxuICAgICAgICBTdGF0dXM6IChuZXdTdGF0dXMpID0+IF9zdGF0dXMgPSBuZXdTdGF0dXMsXG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgICBUaXRsZTogX3RpdGxlLFxuICAgICAgICBEZXNjcmlwdGlvbjogX2Rlc2NyaXB0aW9uLFxuICAgICAgICBEdWVEYXRlOiBfZHVlRGF0ZSxcbiAgICAgICAgUHJpb3JpdHk6IF9wcmlvcml0eSxcbiAgICAgICAgU3RhdHVzOiBfc3RhdHVzLFxuICAgICAgICBJZDogX2lkLFxuICAgIH1cblxuICAgIHJldHVybiB7Z2V0LCBzZXQsIHZhbHVlcyB9XG5cbn1cblxuZXhwb3J0IHsgdGFza3MgfSIsImltcG9ydCB7IHNvcnRUYXNrcyB9IGZyb20gJy4vZm9ybUlucHV0cy5qcydcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsJ1xuaW1wb3J0IHsgYWRkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy5qcyc7XG5cbmNvbnN0IGNyZWF0ZVRhc2tzRGl2cyA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY3JlYXRlU2xpZGVyID0gKG51bSwgYXJyLCBkaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNsaWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc2xpZGVyRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2xpZGVyRGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKVxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICAgICAgaWYgKGFycltudW1dLmdldC5TdGF0dXMoKSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnc2xpZGVyJyk7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3JvdW5kJyk7XG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgICAgIHNsaWRlckRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc2xpZGVyRGl2KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgY3JlYXRlSW5mbyA9IChudW0sIGFyciwgZGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpbmZvRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5mb0RpdicpO1xuICAgICAgICAgICAgY29uc3QgcGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHBhcmExLnRleHRDb250ZW50ID0gYXJyW251bV0uZ2V0LlRpdGxlKCkgKyAnOic7XG4gICAgICAgICAgICBwYXJhMS5zdHlsZVsnZm9udC1zaXplJ10gPSAnMS41cmVtJztcbiAgICAgICAgICAgIHBhcmEyLnRleHRDb250ZW50ID0gYXJyW251bV0uZ2V0LlRpbWVSZW1haW5pbmcoKTtcbiAgICAgICAgICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQocGFyYTEpO1xuICAgICAgICAgICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChwYXJhMik7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVCdXR0b25zID0gKGRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYnV0dG9uMURpdi5jbGFzc0xpc3QuYWRkKCdlZGl0QnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24xRGl2LmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhcyBmYS1lZGl0Jz48L2k+XCI7XG4gICAgICAgICAgICBidXR0b24yRGl2LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZUJ1dHRvbicpXG4gICAgICAgICAgICBidXR0b24yRGl2LmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhcyBmYS10cmFzaC1hbHQnPjwvaT5cIlxuICAgICAgICAgICAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25zRGl2JylcbiAgICAgICAgICAgIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uMURpdik7XG4gICAgICAgICAgICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGJ1dHRvbjJEaXYpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbnNEaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWRpdENvbG9ycyA9IChudW0sIGFyciwgZGl2KSA9PiB7XG4gICAgICAgICAgICBpZiAoYXJyW251bV0uZ2V0LlN0YXR1cygpID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9ICdncmV5JztcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGVbJ2ZpbHRlciddID0gJ2JsdXIoMXB4KSc7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlWydvcGFjaXR5J10gPSAwLjc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFycltudW1dLmdldC5Qcmlvcml0eSgpID09PSAnSGlnaCcpIHtcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gJ3JlZCdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyW251bV0uZ2V0LlByaW9yaXR5KCkgPT09ICdNZWRpdW0nKSB7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9ICd5ZWxsb3cnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJbbnVtXS5nZXQuUHJpb3JpdHkoKSA9PT0gJ0xvdycpIHtcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gJ2N5YW4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgc3RvcmUuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrc0RpdicpO1xuICAgICAgICAgICAgbGV0IHRhc2tzID0gc29ydFRhc2tzLmNyZWF0ZVNvcnRlZEFycigpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YXNrc1tpXS5nZXQuSWQoKX1gKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVTbGlkZXIoaSwgdGFza3MsIHRhc2tEaXYpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUluZm8oaSwgdGFza3MsIHRhc2tEaXYpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbnModGFza0Rpdik7XG4gICAgICAgICAgICAgICAgZWRpdENvbG9ycyhpLCB0YXNrcywgdGFza0Rpdik7XG4gICAgICAgICAgICAgICAgc3RvcmUuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IHJlbmRlclRhc2tzID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrc0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9kVGFza3MnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NEaXNwbGF5LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGFza3NEaXNwbGF5LmNoaWxkcmVuW2ldLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpdiA9IGNyZWF0ZVRhc2tzRGl2cy5jcmVhdGUoKTtcbiAgICAgICAgICAgIHRhc2tzRGlzcGxheS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgYWRkRXZlbnQuZWRpdEJ1dHRvbkxpc3RlbmVyKCk7XG4gICAgICAgICAgICBhZGRFdmVudC5kZWxldGVCdXR0b25MaXN0ZW5lcigpO1xuICAgICAgICAgICAgYWRkRXZlbnQuY29tcGxldGVCdXR0b25MaXN0ZW5lcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVuZGVyUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBlbGVtIGluIHNvcnRUYXNrcy5wcm9qZWN0c0hvbGRlcikge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtICE9PSAnRGVmYXVsdCcgJiYgZWxlbSAhPT0gJ1RvZGF5JyAmJiBlbGVtICE9PSAnVGhpcyBXZWVrJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaXN0JylcbiAgICAgICAgICAgICAgICAgICAgbGkudGV4dENvbnRlbnQgPSBlbGVtO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3JlbW92ZUJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhcycpO1xuICAgICAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXdpbmRvdy1jbG9zZScpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkRXZlbnQucHJvamVjdHNCdXR0b25MaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgICAgICBhZGRFdmVudC5yZW1vdmVCdXR0b25MaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZEV2ZW50LnByb2plY3RMaXN0TGlzdGVuZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHJlbmRlciwgcmVuZGVyUHJvamVjdHMgfVxuICAgIH1cbikoKVxuXG5leHBvcnQgeyByZW5kZXJUYXNrcyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
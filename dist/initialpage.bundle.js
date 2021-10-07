/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"initialpage": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js"], () => (__webpack_require__("./src/scripts/initialpage.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbHBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ0Q7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEtBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0M7Ozs7Ozs7OztVQ3ZCaEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUU5Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2NyaXB0cy9pbml0aWFscGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvc2lnbkluUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbFwiO1xuaW1wb3J0IHsgZ2xvYmFsU3RvcmFnZSB9IGZyb20gJy4vc2lnbkluUGFnZSc7XG5cbmNvbnN0IGhlYWQgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlkID0gXCJiZWdpblwiO1xuICAgICAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbiAgICAgICAgY29uc3QgbXlGYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIG15RmFuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1mYW5cIj48L2k+J1xuICAgICAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gJ1lvdXIgVG8tRG8tTGlzdCc7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChteUZhbik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwYXJhKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIHJldHVybiB7IGhlYWRlciB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IGFzaWRlID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNpZGViYXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaWRlYmFyJyk7XG4gICAgICAgIGNvbnN0IG9uZWxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgb25lbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgJ29uZWxpJyk7XG4gICAgICAgIGNvbnN0IGluaXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCB0aGlzV2VlayA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgcGx1cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgY3JlYXRlTGkgPSAobmFtZSwgZWxlbWVudCwgdGV4dCkgPT4ge1xuICAgICAgICAgICAgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuICAgICAgICAgICAgaWYgKHRleHQgIT09ICdQcm9qZWN0cycgJiYgdGV4dCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2NsaWNrYWJsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGV4dCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgICAgIHVsLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdExpc3QnKTtcbiAgICAgICAgICAgICAgICBuYW1lLmFwcGVuZENoaWxkKHVsKTtcbiAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ25hdicpO1xuICAgICAgICAgICAgfSBlbHNlIHsgbmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGV4dCk7IH1cbiAgICAgICAgICAgIGlmICh0ZXh0ID09PSAnRGVmYXVsdCcpIHtcbiAgICAgICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgICAgICAgICBpLmlubmVySFRNTCA9IGVsZW1lbnRcbiAgICAgICAgICAgIGkuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RleHR9cHJvamVjdHNgKVxuICAgICAgICAgICAgbmFtZS5hcHBlbmRDaGlsZChpKVxuICAgICAgICAgICAgY29uc3Qgd29yZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICB3b3Jkcy50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICBuYW1lLmFwcGVuZENoaWxkKHdvcmRzKTtcbiAgICAgICAgICAgIG9uZWxpLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZUxpKGluaXQsICc8aSBjbGFzcz1cImZhcyBmYS10YXNrc1wiPjwvaT4nLCAnRGVmYXVsdCcpO1xuICAgICAgICBjcmVhdGVMaSh0b2RheSwgJzxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLWRheVwiPjwvaT4nLCAnVG9kYXknKTtcbiAgICAgICAgY3JlYXRlTGkodGhpc1dlZWssICc8aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhci13ZWVrXCI+JywgJ1RoaXMgV2VlaycpO1xuICAgICAgICBjcmVhdGVMaShuZXdQcm9qZWN0LCAnPGkgY2xhc3M9XCJmYXMgZmEtcHJvamVjdC1kaWFncmFtXCI+JywgJ1Byb2plY3RzJyk7XG4gICAgICAgIGNyZWF0ZUxpKHBsdXMsICc8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+JywgJycpXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQob25lbGkpXG4gICAgICAgIHJldHVybiB7IHNpZGViYXIgfVxuICAgIH1cbikoKVxuXG5jb25zdCBib2R5ID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBib2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9kLnNldEF0dHJpYnV0ZSgnaWQnLCAnYm9kJyk7XG4gICAgICAgIGNvbnN0IGJvZEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9kSGVhZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JvZEhlYWQnKVxuICAgICAgICBjb25zdCBib2RIZWFkcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgYm9kSGVhZHAudGV4dENvbnRlbnQgPSAnRGVmYXVsdCc7XG4gICAgICAgIGJvZEhlYWQuYXBwZW5kQ2hpbGQoYm9kSGVhZHApO1xuICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JvZFRhc2tzJyk7XG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGQuc2V0QXR0cmlidXRlKCdpZCcsICdib2RBZGQnKTtcbiAgICAgICAgYWRkLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+JztcbiAgICAgICAgYm9kLmFwcGVuZENoaWxkKGJvZEhlYWQpO1xuICAgICAgICBib2QuYXBwZW5kQ2hpbGQodGFza3MpO1xuICAgICAgICBib2QuYXBwZW5kQ2hpbGQoYWRkKTtcbiAgICAgICAgcmV0dXJuIHsgYm9kIH1cbiAgICB9XG4pKClcblxuY29uc3QgZGlzcGxheSA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZC5oZWFkZXIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFzaWRlLnNpZGViYXIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvZHkuYm9kKTtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSB9XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IGRpc3BsYXkgfSIsIlxubGV0IGdsb2JhbFN0b3JhZ2UgPSB7XG4gICAgdmFsdWU6IG51bGwsXG4gICAgc2V0KG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9XG59O1xuXG5jb25zdCBzaWduSW4gPSAoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lckRpdi5pZCA9IFwic2lnbkluXCI7XG4gICAgY29uc3QgbG9jYWxTdG9yYWdlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsb2NhbFN0b3JhZ2VCdXR0b24udGV4dENvbnRlbnQgPSBcIlNpZ24gSW4gV2l0aCBMb2NhbCBTdG9yYWdlXCI7XG4gICAgbG9jYWxTdG9yYWdlQnV0dG9uLmlkID0gXCJsb2NhbFN0b3JhZ2VCdXR0b25cIjtcbiAgICBjb25zdCBnb29nbGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGdvb2dsZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2lnbiBJbiBXaXRoIEdvb2dsZVwiO1xuICAgIGdvb2dsZUJ1dHRvbi5pZCA9IFwiZ29vZ2xlQnV0dG9uXCI7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGxvY2FsU3RvcmFnZUJ1dHRvbik7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGdvb2dsZUJ1dHRvbik7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChjb250YWluZXJEaXYpO1xufTtcblxuZXhwb3J0IHsgZ2xvYmFsU3RvcmFnZSwgc2lnbkluIH1cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5pdGlhbHBhZ2VcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b19kb19saXN0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RvX2RvX2xpc3RcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2ZvcnRhd2Vzb21lX2ZvbnRhd2Vzb21lLWZyZWVfanNfYWxsX2pzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvaW5pdGlhbHBhZ2UuanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
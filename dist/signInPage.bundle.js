/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/scripts/signInPage.js ***!
  \***********************************/
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





/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbkluUGFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NjcmlwdHMvc2lnbkluUGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxubGV0IGdsb2JhbFN0b3JhZ2UgPSB7XG4gICAgdmFsdWU6IG51bGwsXG4gICAgc2V0KG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9XG59O1xuXG5jb25zdCBzaWduSW4gPSAoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lckRpdi5pZCA9IFwic2lnbkluXCI7XG4gICAgY29uc3QgbG9jYWxTdG9yYWdlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsb2NhbFN0b3JhZ2VCdXR0b24udGV4dENvbnRlbnQgPSBcIlNpZ24gSW4gV2l0aCBMb2NhbCBTdG9yYWdlXCI7XG4gICAgbG9jYWxTdG9yYWdlQnV0dG9uLmlkID0gXCJsb2NhbFN0b3JhZ2VCdXR0b25cIjtcbiAgICBjb25zdCBnb29nbGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGdvb2dsZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2lnbiBJbiBXaXRoIEdvb2dsZVwiO1xuICAgIGdvb2dsZUJ1dHRvbi5pZCA9IFwiZ29vZ2xlQnV0dG9uXCI7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGxvY2FsU3RvcmFnZUJ1dHRvbik7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGdvb2dsZUJ1dHRvbik7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChjb250YWluZXJEaXYpO1xufTtcblxuZXhwb3J0IHsgZ2xvYmFsU3RvcmFnZSwgc2lnbkluIH1cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
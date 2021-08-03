/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/scripts/todo.js ***!
  \*****************************/
const tasks = (title, description, dueDate, priority, status) => {
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;
    let _status = status;

    const get = {
        Title: () => _title,
        Description: () => _description,
        DueDate: () => _dueDate,
        Priority: () => _priority,
        Status: () => _status,
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTs7QUFFWixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFza3MgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzKSA9PiB7XG4gICAgbGV0IF90aXRsZSA9IHRpdGxlO1xuICAgIGxldCBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBsZXQgX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIGxldCBfcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBsZXQgX3N0YXR1cyA9IHN0YXR1cztcblxuICAgIGNvbnN0IGdldCA9IHtcbiAgICAgICAgVGl0bGU6ICgpID0+IF90aXRsZSxcbiAgICAgICAgRGVzY3JpcHRpb246ICgpID0+IF9kZXNjcmlwdGlvbixcbiAgICAgICAgRHVlRGF0ZTogKCkgPT4gX2R1ZURhdGUsXG4gICAgICAgIFByaW9yaXR5OiAoKSA9PiBfcHJpb3JpdHksXG4gICAgICAgIFN0YXR1czogKCkgPT4gX3N0YXR1cyxcbiAgICB9XG5cbiAgICBjb25zdCBzZXQgPSB7XG4gICAgICAgIFRpdGxlOiAobmV3VGl0bGUpID0+IF90aXRsZSA9IG5ld1RpdGxlLFxuICAgICAgICBEZXNjcmlwdGlvbjogKG5ld0Rlc2NyaXB0aW9uKSA9PiBfZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbixcbiAgICAgICAgRHVlRGF0ZTogKG5ld0R1ZURhdGUpID0+IF9kdWVEYXRlID0gbmV3RHVlRGF0ZSxcbiAgICAgICAgUHJpb3JpdHk6IChuZXdQcmlvcml0eSkgPT4gX3ByaW9yaXR5ID0gbmV3UHJpb3JpdHksXG4gICAgICAgIFN0YXR1czogKG5ld1N0YXR1cykgPT4gX3N0YXR1cyA9IG5ld1N0YXR1cyxcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldCwgc2V0IH1cblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
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

export default JSONfn
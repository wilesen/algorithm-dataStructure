var obj = {
};

let temp = obj.name;
Object.defineProperty(obj, "name", {
    get: function () {
        return this._name
    },
    set: function (name) {
        this._name = name + 'xxx'
    }
})

obj.name = 222;
console.log(obj.name)
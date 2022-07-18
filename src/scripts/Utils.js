export const Utils = {
    createArray(stuff) {
        let rArray = Object.keys(stuff).map(function(key) {
            return stuff[key];
        })
        return rArray;
    },
    loadSave() {
        return JSON.parse(localStorage.getItem("nnpg"));
    }
}
export default (key) => {

    if (localStorage.getItem(key)){
        return localStorage.getItem(key);
    }

    return;
};
//Task 1: Function Declaration
function userProfile(name) {
    console.log("Hello, " + name + "!");
}
userProfile("Nadhiya");


//Task 2: Arrow Function
let double = (num) => {
    return num * 2;
};
console.log(double(5));


//Task 3: Anonymous Function with setTimeout
setTimeout(function () {
    console.log("This message is delayed by 2 seconds");
}, 2000);


//Task 4: Callback Function
function getUserData(callback) {
    setTimeout(function () {
        callback();
    }, 3000);
}


function showMessage() {
    console.log("Call Back Function");
}
getUserData(showMessage);

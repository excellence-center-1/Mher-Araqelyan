let pname = prompt("What is your name?");
let page = prompt("What is your age?");
console.log(typeof (page));
if (page < 0 || isNaN(page)) {
    alert("You enter a wrong age");
}

else {
    if (page >= 0 && page <= 12) {
        alert("Welcome, " + pname + ", You are a childhood.");
    }
    if (page >= 13 && page <= 19) {
        alert("Welcome, " + pname + ", You are a teenage years.");
    }
    if (page >= 20 && page <= 29) {
        alert("Welcome, " + pname + ", You are a young adult.");
    }
    if (page >= 30 && page <= 59) {
        alert("Welcome, " + pname + ", You are an adult.");
    }
    if (page >= 60) {
        alert("Welcome, " + pname + ", You are a senior.");
    }
}
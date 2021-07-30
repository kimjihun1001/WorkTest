const div = document.querySelectorAll(".question");
const div1 = document.querySelector(".start-page");
const div2 = document.querySelector(".first-page");
const ans = document.querySelectorAll(".b");
const ans11 = document.querySelector(".button11");
const ans12 = document.querySelector(".button12");
const ans21 = document.querySelector(".button21");
const ans22 = document.querySelector(".button22");
const startButton = document.querySelector(".start-button");

let A = 0;
let B = 0;

localStorage.setItem("장의존",A);
localStorage.setItem("장독립",B);

function click() {
    if (this.className === 'button11') {
        console.dir(this);
        A = A + 1;
        localStorage.setItem("장의존",A);
    } else {
        B = B + 1;
        localStorage.setItem("장독립",B);
    }
    div[Number(this.name)].classList.toggle("hidden");
    div[Number(this.name)+1].classList.toggle("hidden");
}

function goToNext() {
    console.log("Go to next page");
    // this class = 1 = A
    // divA 를 히든
    div1.classList.toggle("hidden");
    div2.classList.toggle("hidden");
}

function onMouse() {
    this.classList.toggle("on-mouseenter");
}

// ans.addEventListener("mouseenter",onMouse);

// ans.forEach(addEventListener("mouseenter",onMouse));
// ans.forEach(addEventListener("mouseleave",onMouse));
ans11.addEventListener("mouseenter",onMouse);
ans11.addEventListener("mouseleave",onMouse);
ans12.addEventListener("mouseenter",onMouse);
ans12.addEventListener("mouseleave",onMouse);

ans11.addEventListener("click",click);
ans12.addEventListener("click",click);
startButton.addEventListener("click", goToNext);
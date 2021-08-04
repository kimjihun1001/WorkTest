const div = document.querySelectorAll(".question");
const div1 = document.querySelector(".start-page");
const div2 = document.querySelector(".first-page");
const div21 = document.querySelector(".page20");
const ans = document.querySelectorAll(".b");
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

for(let i = 0; i < ans.length; i++) {
    ans[i].addEventListener("mouseenter",onMouse);
    ans[i].addEventListener("mouseleave",onMouse);
    ans[i].addEventListener("click",click);
}

// Q. while로 하면 11번 쯤부터 에러남... 왜 그러는 걸까... 그냥 for문 써야겠다
// let i = 0;
// while (i < 20) {
//     ans[i].addEventListener("mouseenter",onMouse);
//     ans[i].addEventListener("mouseleave",onMouse);
//     ans[i].addEventListener("click",click);
//     i = i + 1;
// }

startButton.addEventListener("click", goToNext);
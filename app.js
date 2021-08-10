const div = document.querySelectorAll(".question");
const div1 = document.querySelector(".start-page");
const div2 = document.querySelector(".first-page");

const divLoading = document.querySelector("div .loading");

const divResult = document.querySelectorAll(".result");

const ans = document.querySelectorAll(".b");
const startButton = document.querySelector(".start-button");

const body = document.querySelector("body");

let A = 0;
let B = 0;
let C = 0;
let D = 0;
let E = 0;
let F = 0;
let G = 0;
let H = 0;

localStorage.setItem("장의존",A);
localStorage.setItem("장독립",B);
localStorage.setItem("스트레스즉각",C);
localStorage.setItem("스트레스절제",D);
localStorage.setItem("워라밸",E);
localStorage.setItem("워라인",F);
localStorage.setItem("큰그림",G);
localStorage.setItem("디테일",H);

function click() {
    // DIV hidden 처리
    if (this.name !== '19') {
        div[Number(this.name)].classList.toggle("hidden");
        div[Number(this.name)+1].classList.toggle("hidden");
    } else {
        div[Number(this.name)].classList.toggle("hidden");
        divLoading.classList.toggle("hidden");
        body.classList.toggle("background20");
        setTimeout(showResult, 1000);
    }

    // DIV 배경색 설정
    if (this.name == '6') {
        body.classList.toggle("background7");
        ans[14].classList.toggle("button7");
        ans[15].classList.toggle("button7");
    } else if (this.name == '7') {
        body.classList.toggle("background7");
    } else if (this.name == '17') {
        body.classList.toggle("background19");
        ans[36].classList.toggle("button19");
        ans[37].classList.toggle("button19");
    } else if (this.name == '18') {
        body.classList.toggle("background20");
        ans[38].classList.toggle("button20");
        ans[39].classList.toggle("button20");
    } else if (this.name == '19') {
        body.classList.toggle("background20");
    } else {
    }

    // 점수 카운트
    if (this.id == 'A') {
        A = A + 1;
        localStorage.setItem("장의존",A);
    } else if (this.id == 'B') {
        B = B + 1;
        localStorage.setItem("장독립",B);
    } else if (this.id == 'C') {
        C = C + 1;
        localStorage.setItem("스트레스즉각",C);
    } else if (this.id == 'D') {
        D = D + 1;
        localStorage.setItem("스트레스절제",D);
    } else if (this.id == 'E') {
        E = E + 1;
        localStorage.setItem("워라밸",E);
    } else if (this.id == 'F') {
        F = F + 1;
        localStorage.setItem("워라인",F);
    } else if (this.id == 'G') {
        G = G + 1;
        localStorage.setItem("큰그림",G);
    } else if (this.id == 'H') {
        H = H + 1;
        localStorage.setItem("디테일",H);
    }
}

function goToNext() {
    console.log("Go to next page");
    div1.classList.toggle("hidden");
    div2.classList.toggle("hidden");
}

function onMouse() {
    this.classList.toggle("on-mouseenter");
}

// 버튼에 마우스 올리면 색 변하기
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

// 결과 DIV
function showResult () {
    divLoading.classList.toggle("hidden");
    if (A > B) {
        if (C > D) {
            if (E > F) {
                if (G > H) {
                    divResult[0].classList.toggle("hidden");
                } else {
                    divResult[1].classList.toggle("hidden");
                }
            } else if (E < F) {
                if (G > H) {
                    divResult[2].classList.toggle("hidden");
                } else {
                    divResult[3].classList.toggle("hidden");
                }
            } 
        } else if (C < D) {
            if (E > F) {
                if (G > H) {
                    divResult[4].classList.toggle("hidden");
                } else {
                    divResult[5].classList.toggle("hidden");
                }
            } else if (E < F) {
                if (G > H) {
                    divResult[6].classList.toggle("hidden");
                } else {
                    divResult[7].classList.toggle("hidden");
                }
            }
        }
    } else if (A < B) {
        if (C > D) {
            if (E > F) {
                if (G > H) {
                    divResult[8].classList.toggle("hidden");
                } else {
                    divResult[9].classList.toggle("hidden");
                }
            } else if (E < F) {
                if (G > H) {
                    divResult[10].classList.toggle("hidden");
                } else {
                    divResult[11].classList.toggle("hidden");
                }
            } 
        } else if (C < D) {
            if (E > F) {
                if (G > H) {
                    divResult[12].classList.toggle("hidden");
                } else {
                    divResult[13].classList.toggle("hidden");
                }
            } else if (E < F) {
                if (G > H) {
                    divResult[14].classList.toggle("hidden");
                } else {
                    divResult[15].classList.toggle("hidden");
                }
            }
        }
    }
}

startButton.addEventListener("click", goToNext);
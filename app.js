const whole = document.querySelector(".whole");

const div = document.querySelectorAll(".question");
const div1 = document.querySelector(".start-page");
const div2 = document.querySelector(".first-page");

const logo = document.querySelector(".logo");

const progressBar = document.querySelector(".progress-bar")
const progress = document.querySelector(".inside");
const thisPage = document.querySelector(".this-page");

const divLoading = document.querySelector("div .loading");

const divResult = document.querySelectorAll(".result");

const ans = document.querySelectorAll(".b");
const startButton = document.querySelector(".start-button");

const body = document.querySelector("body");

let backgroundList = [];
for(let a = 1; a <= 20; a++) {
    backgroundList.push("background" + a);
}

let buttonList = [];
for(let b = 1; b <= 20; b++) {
    buttonList.push("button" + b);
}

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
    console.log(this.name);
    console.log(Number(this.name));

    // progress bar
    let width = String((Number(this.name)+2)*16.4) + 'px';
    progress.style.width = width;
    progress.style.animation = "a"+String(Number(this.name)+2)+" 1s ease-in-out 1" ;
    thisPage.innerHTML = String(Number(this.name)+2);

    // DIV hidden 처리
    if (this.name !== '19') {
        div[Number(this.name)].classList.toggle("hidden");
        div[Number(this.name)+1].classList.toggle("hidden");
        let j = Number(this.name);
        body.classList.toggle(backgroundList[j+1]);
        ans[(j+1)*2].classList.toggle(buttonList[j+1]);
        ans[(j+1)*2+1].classList.toggle(buttonList[j+1]);
    } else {
        div[Number(this.name)].classList.toggle("hidden");
        progressBar.classList.toggle("hidden");
        divLoading.classList.toggle("hidden");
        body.classList.toggle("background-loading");
        setTimeout(showResult, 1000);
    }

    // 이렇게 하려면 너무 중복돼서 백그라운드, 버튼 배열 만들고 반복문으로 채워넣기. 그리고 위 코드로 대체
    // if (this.name == '6') {
    //     body.classList.toggle("background7");
    //     ans[14].classList.toggle("button7");
    //     ans[15].classList.toggle("button7");
    // } else if (this.name == '7') {
    //     body.classList.toggle("background7");
    // } else if (this.name == '17') {
    //     body.classList.toggle("background18");
    //     ans[36].classList.toggle("button18");
    //     ans[37].classList.toggle("button18");
    // } else if (this.name == '18') {
    //     body.classList.toggle("background19");
    //     ans[38].classList.toggle("button19");
    //     ans[39].classList.toggle("button19");
    // } else if (this.name == '19') {
    //     body.classList.toggle("background19");
    // } else {
    // }

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

function start() {
    console.log("Start test");
    div1.classList.toggle("hidden");
    div2.classList.toggle("hidden");

    whole.classList.remove("grid1");
    whole.classList.add("grid2");
    
    // 상단 로고 없애기
    logo.classList.add("hidden");

    // 진행바 나타내기
    progressBar.classList.remove("hidden");

    // 색 변경
    body.classList.toggle(backgroundList[0]);
    ans[0].classList.toggle(buttonList[0]);
    ans[1].classList.toggle(buttonList[0]);
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
    body.classList.toggle("background-result");
    body.classList.toggle("body2");
    whole.classList.remove("grid1");
    whole.classList.remove("grid2");
    whole.classList.add("grid3");
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

startButton.addEventListener("click", start);

// let data = [A,B,C,D,E,F,G,H];

// function sendData() {

// }

var shareLink = 'https://worktest1.netlify.app';

// Kakao.Link.sendDefault({
//     objectType: 'feed',
//     content: {
//       title: '디저트 사진',
//       description: '아메리카노, 빵, 케익',
//       imageUrl:
//         'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
//       link: {
//         mobileWebUrl: shareLink,
//         androidExecutionParams: 'test',
//       },
//     },
//     social: {
//       likeCount: 10,
//       commentCount: 20,
//       sharedCount: 30,
//     },
//     buttons: [
//       {
//         title: '웹으로 이동',
//         link: {
//           mobileWebUrl: shareLink,
//         },
//       },
//       {
//         title: '앱으로 이동',
//         link: {
//           mobileWebUrl: shareLink,
//         },
//       },
//     ]
//   });
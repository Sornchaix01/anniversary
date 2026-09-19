/* ================= PAGE ================= */

function nextPage(number) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(page => {

        page.classList.remove("active");

    });


    const target =
        document.getElementById(
            "page" + number
        );


    if (!target) {
        return;
    }


    target.classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    /* เปิดหน้า Quiz */

    if (number === 4) {

        currentQuestion = 0;

        score = 0;

        showQuestion();
    }


    /* เปิดหน้าของขวัญ */

    if (number === 7) {

        burstHearts(35);
    }


    /* เปิดหน้าสุดท้าย */

    if (number === 8) {

        burstHearts(45);
    }
}



/* ================= START WEBSITE ================= */

function startWebsite() {

    burstHearts(35);

    nextPage(2);
}



/* ================= HEART ================= */

const heartContainer =
    document.getElementById(
        "heart-container"
    );


const heartSymbols = [
    "♡",
    "♥",
    "❤",
    "💕",
    "💗"
];


function createHeart(fast = false) {

    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    heart.textContent =
        heartSymbols[
            Math.floor(
                Math.random()
                *
                heartSymbols.length
            )
        ];


    heart.style.left =
        Math.random()
        *
        100
        +
        "vw";


    heart.style.fontSize =
        15
        +
        Math.random()
        *
        28
        +
        "px";


    const drift =
        -80
        +
        Math.random()
        *
        160;


    heart.style.setProperty(
        "--drift",
        drift + "px"
    );


    const duration =
        fast
            ? 3 + Math.random() * 2
            : 5 + Math.random() * 4;


    heart.style.animationDuration =
        duration + "s";


    heartContainer.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, (duration + 1) * 1000);
}



function burstHearts(amount) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(() => {

            createHeart(true);

        }, i * 40);
    }
}



/* =================
   HEARTS ON START
================= */

for (
    let i = 0;
    i < 45;
    i++
) {

    setTimeout(() => {

        createHeart(true);

    }, i * 65);
}



/* หัวใจลอยเรื่อย ๆ */

setInterval(() => {

    createHeart();

}, 500);



/* ================= MEMORIES ================= */

const memories = [

    {
        image:
            "images/1.png",

        text:
            "รูปแรก ๆ ตอนที่เราเป็นแฟนกันแล้วว ♡"
    },


    {
        image:
            "images/2.png",

        text:
            "ตอนนั้นเล่นด้วยกันบ่อยมากกก คิดถึงเหมือนกันนะ ♡"
    },


    {
        image:
            "images/3.png",

        text:
            "ถึงจะอยู่ไกลกัน แต่ก็ยังได้อยู่ด้วยกันนะ ♡"
    },


    {
        image:
            "images/4.png",

        text:
            "เล่นด้วยกันทีไรก็มีเรื่องให้ขำตลอด 555 ♡"
    },


    {
        image:
            "images/5.png",

        text:
            "รูปนี้เป็นอีกรูปที่เค้าชอบมาก เพราะอ้วนน่ารักมากก ♡"
    },


    {
        image:
            "images/6.png",

        text:
            "ขอบคุณที่มาเล่นด้วยกันนะอ้วน ♡"
    },


    {
        image:
            "images/7.png",

        text:
            "หวังว่าจะมีรูปของเราเพิ่มขึ้นอีกเยอะ ๆ เลย ♡"
    }

];


let currentMemoryIndex = 0;



function updateMemory() {

    const memory =
        memories[currentMemoryIndex];


    const image =
        document.getElementById(
            "memoryImage"
        );


    const text =
        document.getElementById(
            "memoryText"
        );


    const counter =
        document.getElementById(
            "currentMemory"
        );


    image.src =
        memory.image;


    text.textContent =
        memory.text;


    counter.textContent =
        currentMemoryIndex + 1;


    const thumbnails =
        document.querySelectorAll(
            ".thumbnails img"
        );


    thumbnails.forEach(img => {

        img.classList.remove(
            "selected"
        );

    });


    if (
        thumbnails[
            currentMemoryIndex
        ]
    ) {

        thumbnails[
            currentMemoryIndex
        ].classList.add(
            "selected"
        );
    }
}



function nextMemory() {

    currentMemoryIndex =
        (
            currentMemoryIndex + 1
        )
        %
        memories.length;


    updateMemory();
}



function previousMemory() {

    currentMemoryIndex--;


    if (
        currentMemoryIndex < 0
    ) {

        currentMemoryIndex =
            memories.length - 1;
    }


    updateMemory();
}



function selectMemory(index) {

    currentMemoryIndex =
        index;


    updateMemory();
}



/* ================= QUIZ ================= */

const questions = [

    {
        question:
            "เรารู้จักกันจากอะไร?",

        answers: [
            "Roblox",
            "MLBB",
            "เพื่อนแนะนำ",
            "อื่น ๆ"
        ],

        correct: 0
    },


    {
        question:
            "วันที่เราเริ่มคบกันคือวันไหน?",

        answers: [
            "20 มิถุนายน",
            "20 กรกฎาคม",
            "20 สิงหาคม",
            "จำไม่ได้แล้ว 555"
        ],

        correct: 0
    },


    {
        question:
            "เวลาอยู่ด้วยกัน เราทำอะไรบ่อย?",

        answers: [
            "เล่นเกมด้วยกัน",
            "คุยกัน",
            "งอนกัน 555",
            "ทั้งหมดเลย"
        ],

        correct: 3
    },


    {
        question:
            "ใครงอนเก่งกว่ากัน?",

        answers: [
            "เค้า",
            "อ้วน",
            "พอ ๆ กัน 555",
            "ไม่มีใครงอนเลย"
        ],

        correct: 1
    },


    {
        question:
            "เค้ารักใครที่สุด?",

        answers: [
            "อ้วน",
            "อ้วนอีกแล้ว",
            "ก็ยังเป็นอ้วน",
            "ถูกทุกข้อ ♡"
        ],

        correct: 3
    }

];


let currentQuestion = 0;

let score = 0;



function showQuestion() {

    const q =
        questions[currentQuestion];


    document
        .getElementById(
            "questionNumber"
        )
        .textContent =
        `ข้อ ${currentQuestion + 1} / ${questions.length}`;


    document
        .getElementById(
            "question"
        )
        .textContent =
        q.question;


    const answerContainer =
        document.getElementById(
            "answers"
        );


    answerContainer.innerHTML = "";


    q.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer";


            button.textContent =
                answer;


            button.onclick =
                () => {

                    answerQuestion(
                        index
                    );

                };


            answerContainer
                .appendChild(
                    button
                );
        }
    );
}



function answerQuestion(index) {

    const q =
        questions[currentQuestion];


    if (
        index ===
        q.correct
    ) {

        score++;
    }


    currentQuestion++;


    if (
        currentQuestion
        <
        questions.length
    ) {

        showQuestion();

    }

    else {

        showResult();
    }
}



function showResult() {

    nextPage(5);


    document
        .getElementById(
            "score"
        )
        .textContent =
        `${score} / ${questions.length}`;


    const result =
        document.getElementById(
            "resultMessage"
        );


    if (
        score ===
        questions.length
    ) {

        result.innerHTML =
            "เก่งมากกก ♡<br>รู้จักกันดีจริง ๆ นะเนี่ย 555";


        burstHearts(30);

    }


    else if (
        score >= 3
    ) {

        result.innerHTML =
            "เก่งงง ♡<br>มีบางข้อที่ต้องจำใหม่แล้วนะ 555";

    }


    else {

        result.innerHTML =
            "โอ้โหอ้วน 555 😂<br>ต้องกลับไปทบทวนเรื่องของเราแล้วนะ ♡";

    }
}



/* ================= GIFT ================= */

let giftOpening = false;


function openGift() {

    if (giftOpening) {
        return;
    }


    giftOpening = true;


    const gift =
        document.querySelector(
            ".gift-box"
        );


    gift.classList.add(
        "open"
    );


    burstHearts(50);


    setTimeout(() => {

        gift.classList.remove(
            "open"
        );


        giftOpening = false;


        nextPage(7);

    }, 1000);
}



/* ================= START ================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateMemory();

    }
);
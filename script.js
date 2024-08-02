const section = document.querySelector("section");
const editable = document.querySelector(".editable");
const textareaHTML = document.querySelector(".playable-html");
const textareaCSS = document.querySelector(".playable-css");
const reset = document.getElementById("reset");
const radial = document.getElementById("radial");
const conic = document.getElementById("conic");

let htmlCode = textareaHTML.value;
let cssCode = textareaCSS.value;

function fillCode() {
    section.innerHTML = textareaHTML.value;
    editable.innerHTML = textareaCSS.value;
}

const radialHtmlSolution = `<p class="radial">放射グラデーションでボーダーを作成</p>`;
const radialCssSolution = `p {
    margin: 0 auto;
    padding: 0.5em;
    width: 50%;
    border: 1em solid;
    text-align: center;
}

p.radial {
    border-image: repeating-radial-gradient(
        ellipse,
        hsl(278, 100%, 50%) 0 40px,
        hsl(0, 7%, 97%) 40px 80px) 30;
}
`;

const conicHtmlSolution = `<p class="conic">扇形グラデーションでボーダーを作成</p>`;
const conicCssSolution = `p {
    margin: 0 auto;
    padding: 0.5em;
    width: 50%;
    border: 1em solid;
    text-align: center;
}

p.conic {
    border-image: conic-gradient(
        hsl(330, 100%, 71%),
        hsl(270, 50%, 40%),
        hsl(240, 44%, 67%),
        hsl(270, 50%, 40%),
        hsl(330, 100%, 71%),
        hsl(270, 50%, 40%),
        hsl(240, 44%, 67%),
        hsl(270, 50%, 40%),
        hsl(330, 100%, 71%)) 30;
}
`;

let radialHtmlSolutionEntry = radialHtmlSolution;
let radialCssSolutionEntry = radialCssSolution;

let conicHtmlSolutionEntry = conicHtmlSolution;
let conicCssSolutionEntry = conicCssSolution;

reset.addEventListener("click", () => {
    textareaHTML.value = htmlCode;
    textareaCSS.value = cssCode;
    radial.value = "放射グラデーションに変更";
    conic.value = "扇形グラデーションに変更";
    fillCode();
});

radial.addEventListener("click", () => {
    if (radial.value === "放射グラデーションに変更") {
        textareaHTML.value = radialHtmlSolutionEntry;
        textareaCSS.value = radialCssSolutionEntry;
        radial.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        radial.value = "放射グラデーションに変更";
    }
    fillCode();
});

conic.addEventListener("click", () => {
    if (conic.value === "扇形グラデーションに変更") {
        textareaHTML.value = conicHtmlSolutionEntry;
        textareaCSS.value = conicCssSolutionEntry;
        conic.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        conic.value = "扇形グラデーションに変更";
    }
    fillCode();
});

textareaHTML.addEventListener("input", fillCode);
textareaCSS.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);

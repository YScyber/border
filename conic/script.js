const section = document.querySelector("section");
const editable = document.querySelector(".editable");
const textareaHTML = document.querySelector(".playable-html");
const textareaCSS = document.querySelector(".playable-css");
const conic = document.getElementById("conic");
const reset = document.getElementById("reset");

let htmlCode = textareaHTML.value;
let cssCode = textareaCSS.value;

function fillCode() {
    section.innerHTML = textareaHTML.value;
    editable.innerHTML = textareaCSS.value;
}

const conicHtmlSolution = `<h2>扇形グラデーション</h2>

<p class="conic">扇形グラデーションでボーダーを作成</p>
`;
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

let conicHtmlSolutionEntry = conicHtmlSolution;
let conicCssSolutionEntry = conicCssSolution;

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

reset.addEventListener("click", () => {
    textareaHTML.value = htmlCode;
    textareaCSS.value = cssCode;
    conic.value = "扇形グラデーションに変更";
    fillCode();
});

textareaHTML.addEventListener("input", fillCode);
textareaCSS.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);
const section = document.querySelector("section");
const editable = document.querySelector(".editable");
const textareaHTML = document.querySelector(".playable-html");
const textareaCSS = document.querySelector(".playable-css");
const linear = document.getElementById("linear");
const reset = document.getElementById("reset");

let htmlCode = textareaHTML.value;
let cssCode = textareaCSS.value;

function fillCode() {
    section.innerHTML = textareaHTML.value;
    editable.innerHTML = textareaCSS.value;
}

const linearHtmlSolution = `<h2>線形グラデーション</h2>

<p class="linear">線形グラデーションでボーダーを作成</p>
`;
const linearCssSolution = `p {
    margin: 0 auto;
    padding: 0.5em;
    width: 50%;
    border: 1em solid;
    text-align: center;
}

p.linear {
    border-image: repeating-linear-gradient(
        -20deg,
        hsl(239, 100%, 50%),
        hsl(225, 78%, 82%),
        hsl(180, 100%, 50%) 30px) 30;
}
`;

let linearHtmlSolutionEntry = linearHtmlSolution;
let linearCssSolutionEntry = linearCssSolution;

linear.addEventListener("click", () => {
    if (linear.value === "線形グラデーションに変更") {
        textareaHTML.value = linearHtmlSolutionEntry;
        textareaCSS.value = linearCssSolutionEntry;
        linear.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        linear.value = "線形グラデーションに変更";
    }
    fillCode();
});

reset.addEventListener("click", () => {
    textareaHTML.value = htmlCode;
    textareaCSS.value = cssCode;
    linear.value = "線形グラデーションに変更";
    fillCode();
});

textareaHTML.addEventListener("input", fillCode);
textareaCSS.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);

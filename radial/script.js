const section = document.querySelector("section");
const editable = document.querySelector(".editable");
const textareaHTML = document.querySelector(".playable-html");
const textareaCSS = document.querySelector(".playable-css");
const radial = document.getElementById("radial");
const reset = document.getElementById("reset");

let htmlCode = textareaHTML.value;
let cssCode = textareaCSS.value;

function fillCode() {
    section.innerHTML = textareaHTML.value;
    editable.innerHTML = textareaCSS.value;
}

const radialHtmlSolution = `<h2>放射グラデーション</h2>

<p class="radial">放射グラデーションでボーダーを作成</p>
`;
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
        hsl(278, 100%, 50%) 0 10px,
        hsl(0, 7%, 97%) 10px 20px) 10;
}
`;

let radialHtmlSolutionEntry = radialHtmlSolution;
let radialCssSolutionEntry = radialCssSolution;

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

reset.addEventListener("click", () => {
    textareaHTML.value = htmlCode;
    textareaCSS.value = cssCode;
    radial.value = "放射グラデーションに変更";
    fillCode();
});

textareaHTML.addEventListener("input", fillCode);
textareaCSS.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);
const select = document.querySelector("select");
const iframe = document.querySelector("iframe");

select.addEventListener("change", setIframe)

function setIframe() {
    const choice = select.value;

    if (choice === "gradation/index.html") {
        iframe.src = this.value;
        iframe.style.height = "550px";
    } else if (choice === "image/index.html") {
        iframe.src = this.value;
        iframe.style.height = "550px";
    } else {
        iframe.src = "";
    }
}
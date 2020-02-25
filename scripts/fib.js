TIMEOUT = 4000;

window.addEventListener("load", function () {
    setTimeout(simulateClick, TIMEOUT);
});

function onReadMoreButtonClicked() {
    window.location = "https://my.fibank.bg/redirect/psd2/";
    // document.getElementById('btnReadMoreId').click()
}

function simulateClick() {
    const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    const cb = document.getElementById('btnReadMoreId');  //whichever element you want to click
    const cancelled = !cb.dispatchEvent(event);
    if (cancelled) {
        console.log("A handler called preventDefault.")
    } else {
        console.log("None of the handlers called preventDefault.")
    }
}
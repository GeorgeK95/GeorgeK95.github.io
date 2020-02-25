TIMEOUT = 4_000;

window.addEventListener("load", function () {
    setTimeout(onReadMoreButtonClicked, TIMEOUT);
});

function onReadMoreButtonClicked() {
    document.getElementById('btnReadMoreId').click()
}

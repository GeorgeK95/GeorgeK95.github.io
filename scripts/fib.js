TIMEOUT = 4000;

window.addEventListener("load", function () {
    setTimeout(onReadMoreButtonClicked, TIMEOUT);
});

function onReadMoreButtonClicked() {
    // window.location.replace("https://my.fibank.bg/redirect");
    window.location = "MyFibank://";
    // document.getElementById('btnReadMoreId').click()
}

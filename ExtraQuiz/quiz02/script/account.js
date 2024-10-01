const params = new URLSearchParams(location.search);

const userId = params.get("userId");
document.querySelector("#userId").value = userId;
function winClose() {
    window.close();
}
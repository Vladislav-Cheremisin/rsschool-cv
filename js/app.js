let modal = document.getElementById(`modalblock`);
let modalButton = document.getElementById(`modalbutton`);
let modalClose = document.getElementsByClassName(`modal-content--close`)[0];
modalButton.onclick = () => $(`#modalblock`).fadeIn(500);
modalClose.onclick = () => $(`#modalblock`).fadeOut(500);
window.onclick = (Event) => {
    if (Event.target == modal) {
        $(`#modalblock`).fadeOut(500);
    }
}
function openModal(jobTitle) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("jobTitle").innerText = jobTitle;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
    if (event.target === document.getElementById("modal")) {
        closeModal();
    }
};

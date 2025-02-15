document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("freebieModal");
    const closeModalBtn = document.getElementById("closeModalBtn");

    // closing modal when clicking outside of it
    modal.addEventListener("click", function (event) {
        if (event.target === modal || event.target === closeModalBtn) {
            modal.style.display = "none";
        }
    });
});
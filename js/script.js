function toggleMeny() {

    document.querySelector(".burger").classList.toggle("toggle");
    document.querySelector(".navLinks").classList.toggle("active");
}

document.querySelector(".burger").addEventListener("click", toggleMeny);
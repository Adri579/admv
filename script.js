let page = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
    pages[page].classList.remove("active");
    page++;
    pages[page].classList.add("active");
}

function yes() {
    document.getElementById("respuesta").innerHTML =
        "💖 Sabía que dirías que sí. Te amooo 💖, la renovación de votos acuerda durar otros 51 meses mas como minimo jejeje";
}

function mover() {
    const btn = document.getElementById("noBtn");
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 500 + "px";
    btn.style.top = Math.random() * 400 + "px";
}

setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}, 500);

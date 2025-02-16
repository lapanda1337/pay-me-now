const noBtn = document.getElementById("no-btn");

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Для ПК: кнопка убегает при наведении
noBtn.addEventListener("mouseover", moveButton);

// Для iPhone: кнопка убегает при нажатии
noBtn.addEventListener("click", moveButton);
// Criar o container do pop-up
const popup = document.createElement("div");
popup.id = "meu-sistema-popup";
popup.style.position = "fixed"; // Melhor usar fixed para popups
popup.style.zIndex = "9999";
popup.innerHTML = `
  <div class="header" id="popup-header" style="cursor: move;">
    <span>ChatZon</span>
    <button id="close-popup">X</button>
  </div>
  <iframe src="https://chat-zon.vercel.app" id="view-app-chatzon" frameborder="0"></iframe>
`;

document.body.appendChild(popup);

const app = document.getElementById("view-app-chatzon");
const popupBox = document.getElementById("meu-sistema-popup");
const header = document.getElementById("popup-header");
const btnPopUp = document.getElementById("close-popup")

btnPopUp.onclick = () => {
  if (app.style.display !== "none") {
    btnPopUp.innerHTML = "-";
    app.style.display = "none";
    popupBox.style.height = "auto";
  } else {
    btnPopUp.innerHTML = "X";
    app.style.display = "block";
    popupBox.style.height = "540px";
  }
};

// Drag drop logic
let isDragging = false;
let offset = { x: 0, y: 0 };

header.addEventListener("mousedown", (e) => {
  isDragging = true;

  offset.x = e.clientX - popupBox.offsetLeft;
  offset.y = e.clientY - popupBox.offsetTop;

  app.style.pointerEvents = "none";
  document.body.style.userSelect = "none";
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  // Atualiza a posição
  popupBox.style.left = `${e.clientX - offset.x}px`;
  popupBox.style.top = `${e.clientY - offset.y}px`;
  popupBox.style.bottom = "auto";
  popupBox.style.right = "auto";
});

// Finaliza o arrasto
window.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    app.style.pointerEvents = "auto";
    document.body.style.userSelect = "auto";
  }
});

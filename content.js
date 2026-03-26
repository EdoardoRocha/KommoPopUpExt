// Criar o container do pop-up
const popup = document.createElement("div");
popup.id = "meu-sistema-popup";
popup.style.position = "fixed"; // Melhor usar fixed para popups
popup.style.zIndex = "9999";
popup.innerHTML = `
  <div class="header" id="popup-header" style="cursor: move;">
    <span>ChatZon</span>
    <button id="close-popup">-</button>
  </div>
  <iframe src="https://chatzonweb.vercel.app" id="view-app-chatzon" frameborder="0"></iframe>
`;

document.body.appendChild(popup);

const app = document.getElementById("view-app-chatzon");
const popupBox = document.getElementById("meu-sistema-popup");
const header = document.getElementById("popup-header");
const btnPopUp = document.getElementById("close-popup");

btnPopUp.onclick = (e) => {
  e.stopPropagation(); // Evita conflitos com o drag

  const isMinimized = popupBox.classList.toggle("minimized");

  if (isMinimized) {
    btnPopUp.innerHTML = "+";
    // Limpa posições do drag para a aba colar na direita via CSS
    popupBox.style.left = "";
    popupBox.style.top = "";
    popupBox.style.bottom = "";
  } else {
    btnPopUp.innerHTML = "X";
    // Restaura posição padrão se desejar, ou mantém onde o CSS definir
    popupBox.style.top = "auto";
    popupBox.style.bottom = "20px";
    popupBox.style.right = "20px";
  }
};

// Ajuste na lógica de Drag para não bugar quando minimizado
header.addEventListener("mousedown", (e) => {
  if (popupBox.classList.contains("minimized")) return; // Opcional: desativa drag se estiver minimizado

  isDragging = true;
  offset.x = e.clientX - popupBox.offsetLeft;
  offset.y = e.clientY - popupBox.offsetTop;

  app.style.pointerEvents = "none";
  document.body.style.userSelect = "none";
});

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

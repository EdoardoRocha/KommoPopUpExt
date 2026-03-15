// Criar o container do pop-up
const popup = document.createElement('div');
const popupclosed = document.createElement("div");
popupclosed.id = 'meu-sistema-popup-fechado'
popupclosed.style.display = 'none';
popup.id = 'meu-sistema-popup';
popup.innerHTML = `
  <div class="header">
    <span>ChatZon</span>
    <button id="close-popup">X</button>
  </div>
  <iframe src="https://chat-zon.vercel.app" frameborder="0"></iframe>
`;
popupclosed.innerHTML = `
  <div class="header">
    <span>ChatZon</span>
    <button id="open-popup">-</button>
  </div>
`

document.body.appendChild(popup);
document.body.appendChild(popupclosed);


document.getElementById('close-popup').onclick = () => {
  popup.style.display = 'none';
  popupclosed.style.display = 'block';
};
  
document.getElementById('close-popup').onclick = () => {
  popup.style.display = 'none';
  popupclosed.style.display = 'block';
};
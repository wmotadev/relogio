let is24h = true;

function updateClock() {
  const clockElement = document.getElementById("relogio");
  const now = new Date();

  let horas = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  let period = "";

  if (!is24h) {
    period = horas >= 12 ? " PM" : " AM";
    horas = horas % 12 || 12;
  }

  horas = String(horas).padStart(2, "0");
  clockElement.textContent = `${horas}:${minutes}:${seconds}${period}`;
}

function toggleFormat() {
  const trocar = document.getElementById("botao");
  is24h = !is24h;

  if (is24h) {
    trocar.textContent = "Alterar Formato (12H)";
  } else {
    trocar.textContent = "Alterar Formato (24H)";
  }
    updateClock();
}

document.getElementById("botao").addEventListener("click", toggleFormat);
setInterval(updateClock, 1000);
updateClock();

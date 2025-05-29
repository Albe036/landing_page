const list_tooltip = [];

function toggleTooltip(event, id = undefined) {
  const list_ids = [1, 2, 3, 4, 5, 6, 7];
  for (let e of list_ids) {
    document.getElementById(`tooltip${e}`).style.display = "none";
  }
  const id_selected = `tooltip${id}`;
  list_tooltip.push(id_selected);
  document.getElementById(id_selected).style.display = "block";
}

const texto = "descúbrela aquí";
const target = document.getElementById("type-target");

function escribir(i = 0) {
  if (i <= texto.length) {
    target.textContent = texto.slice(0, i);
    setTimeout(() => escribir(i + 1), 100);
  } else {
    // Espera 1s, borra y repite
    setTimeout(() => {
      target.textContent = "";
      escribir(0);
    }, 1000); // 1s después de escribir completo
  }
}

escribir();

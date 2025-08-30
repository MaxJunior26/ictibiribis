// Aplica o modo salvo ao carregar
document.addEventListener('DOMContentLoaded', () => {
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'true') {
    document.body.classList.add('dark-mode');
    document.documentElement.classList.add('dark-mode');
    // Atualiza ícones e cores
    document.getElementById("claro-escuro").src = "assets/sol.png";
    document.getElementById("logo-ictilab-escuro").src = "assets/ictilab-claro.png";
    document.querySelectorAll('.azul').forEach(el => {
      el.style.color = "#add8e6";
    });
  }
});

// Atualiza o localStorage ao trocar o modo
function changeDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.documentElement.classList.toggle("dark-mode");

  const claroEscuro = document.getElementById("claro-escuro");
  const imagemIctiClaro = document.getElementById("logo-ictilab-escuro");
  const modoEscuroAtivo = document.body.classList.contains("dark-mode");
  document.querySelectorAll('.azul').forEach(el => {
    el.style.color = modoEscuroAtivo ? "#add8e6" : "#125bb3";
  });

  claroEscuro.src = modoEscuroAtivo ? "assets/sol.png" : "assets/lua.png";
  imagemIctiClaro.src = modoEscuroAtivo ? "assets/ictilab-claro.png" : "assets/ictilab.png";

  localStorage.setItem('darkMode', modoEscuroAtivo); // Salva escolha

  contador++;
  console.log(contador);

  if (contador >= 5) {
    document.body.style.cursor = "url('assets/banana.ico'), auto";
    console.log("ihu");
  }
}
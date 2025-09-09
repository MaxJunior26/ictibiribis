document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-botao");
  const menu = document.getElementById("menu");
  
  

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
console.log("Teste Inicial");

const usuarios = {
  macaxwell: "senha123",
  ingridiane: "senha456",
  cingrid: "senha789"
};

function validacao() {
  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;

  if (usuarios[login] && usuarios[login] === senha) {
	window.location.href = "../Ictilab/pagina_inicial.html";
  } else {
	alert("Login ou senha inválidos.");
  }

	//https://youtu.be/1tjuhCdWPB4
}

function changeDarkMode() {
	document.body.classList.toggle("dark-mode");
	document.documentElement.classList.toggle("dark-mode");

	const claroEscuro = document.getElementById("claro-escuro");
	const imagemIctiClaro = document.getElementById("logo-ictilab-escuro");
	const modoEscuroAtivo = document.body.classList.contains("dark-mode"); //valida se o modo escuro está ativo
	document.querySelectorAll('.azul').forEach(el => {
		el.style.color = modoEscuroAtivo ? "#add8e6" : "#125bb3";
	})

  claroEscuro.src = modoEscuroAtivo ? "assets/sol.png" : "assets/lua.png";
  imagemIctiClaro.src = modoEscuroAtivo ? "assets/ictilab-claro-removebg-preview.png" : "assets/ictilab.png";
}
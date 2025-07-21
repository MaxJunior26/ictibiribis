console.log("Teste Inicial");

const usuarios = {
  macaxwell: "senha123",
  sabrinei: "senha456"
};

function validacao() {
  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;

  if (usuarios[login] && usuarios[login] === senha) {
	window.location.href = "file:///C:/Users/maxwell.fernandes/Desktop/Ictilab/pagina_inicial.html";
  } else {
    alert("Login ou senha inválidos.");
  }

	//https://youtu.be/1tjuhCdWPB4

}
//https://youtu.be/1tjuhCdWPB4
console.log("Teste Inicial");

const inputUsername = document.querySelector('input[name="login"]');
const inputPassword = document.querySelector('input[name="senha"]');
const submitButton = document.querySelector('button[type="submit"]');

const usuarios = {
  macaxwell: "senha123",
  ingridiane: "senha456",
  cingrid: "senha789"
};

let contador=0;

function validacao() {
  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;
  const mensagemErro = document.getElementById("mensagemErro");

  if (!login) {
	document.getElementById("login").placeholder="Favor preencher login";
	mensagemErro.innerHTML="<font color='red'></font>";
  } else if (!senha) {
	document.getElementById("senha").placeholder="Favor preencher senha";
	mensagemErro.innerHTML="<font color='red'></font>";
  } else if (usuarios[login] && usuarios[login] === senha) {
	window.location.href = "../Ictilab/pagina_inicial.html";
  } else {
	mensagemErro.innerHTML="<font color='red' border-radius='10px' background-color='white'>Usuário ou senha inválido(s)</font>";
	
	document.getElementById("login").value="";
	document.getElementById("login").placeholder="Usuário";
	document.getElementById("senha").value="";
	document.getElementById("senha").placeholder="Senha";
  }
}

function logamentos(){
	// Lógica de login aqui (ex: enviar dados para o servidor)
    console.log('Login em andamento...');
}

[inputUsername, inputPassword].forEach(input => {
	input.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			event.preventDefault(); // Evita o comportamento padrão do Enter (que pode ser pular para o próximo campo)
            submitButton.click(); // Simula o clique no botão de login
		}
	});
});

submitButton.addEventListener('click', (event) => {
	event.preventDefault(); // Evita o envio padrão do formulário
	logamentos(); // Chama a função de login
});

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
  imagemIctiClaro.src = modoEscuroAtivo ? "assets/ictilab-claro.png" : "assets/ictilab.png";
  
  contador++;
  console.log(contador);
  
  if(contador>=5){
	document.body.style.cursor = "url('assets/banana.ico'), auto"; 
	console.log("ihu");	
  }
}

function visivelSenha() {
	const icone = document.getElementById("icon-visibility");
	const senha = document.getElementById("senha");
	const eSenha = senha.type === "password";
	
	senha.type = eSenha ? "text" : "password";
	icone.textContent = eSenha ? "visibility" : "visibility_off";
}
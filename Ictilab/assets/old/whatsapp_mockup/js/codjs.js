//https://youtu.be/1tjuhCdWPB4

console.log("Teste Inicial");

const inputUsername = document.querySelector('input[name="login"]');
const inputPassword = document.querySelector('input[name="senha"]');
const submitButton = document.querySelector('button[type="submit"]');

const usuarios = {
  macaxwell: "senha123",
  ingridiane: "senha456",
  cingrid: "senha789",
  alexandre: "cuteCuddleCozy2309"
};

let contador=0;

//Valida se o login e senha estão preenchidos e corretos
function validacao() {
  let login = document.getElementById("login").value;
  let senha = document.getElementById("senha").value;
  const mensagemErro = document.getElementById("mensagemErro");

  if (!login) {
	document.getElementById("login").placeholder="Favor preencher usuário";
	mensagemErro.innerHTML=`<span style='color:red; border-radius:10px; background:rgba(255,255,255,0.6); padding:4px;'>Favor preencher usuário</span>`;
  } else if (!senha) {
	document.getElementById("senha").placeholder="Favor preencher senha";
	mensagemErro.innerHTML=`<span style='color:red; border-radius:10px; background:rgba(255,255,255,0.6); padding:4px;'>Favor preencher senha</span>`;
  } else if (login === 'alexandre' && usuarios[login] === senha){
	window.location.href = "../Ictilab/assets/old/whatsapp_mockup/index.html";  
  } else if (usuarios[login] && usuarios[login] === senha) {
	window.location.href = "../Ictilab/pagina_inicial.html";
  } else {
	mensagemErro.innerHTML = `<span style='color:red; border-radius:10px; background:rgba(255,255,255,0.6); padding:4px;'>Usuário ou senha inválido(s)</span>`;
	
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

//Realiza o login com a tecla Enter
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


// Lembra Usuário e Senha preechidos para o próximo acesso
document.addEventListener('DOMContentLoaded', () => {
	const lembrarDados = localStorage.getItem('lembrarDados');
	if (lembrarDados) {
		const { login, senha } = JSON.parse(lembrarDados);
		document.getElementById("login").value = login;
		document.getElementById("senha").value = senha;
		document.getElementById("lembrar").checked = true; // Marca a checkbox
	}
	document.getElementById("lembrar").addEventListener('change', function () {
		if (this.checked) {
			const login = document.getElementById("login").value;
			const senha = document.getElementById("senha").value;
			localStorage.setItem('lembrarDados', JSON.stringify({ login, senha }));
		} else {
			localStorage.removeItem('lembrarDados'); // Remove os dados se a checkbox for desmarcada
		}
	});
});


// Aplica o modo escuro salvo ao carregar
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

//Deixa vísivel o campo de senha como um texto legível
function visivelSenha() {
	const icone = document.getElementById("icon-visibility");
	const senha = document.getElementById("senha");
	const eSenha = senha.type === "password";
	
	senha.type = eSenha ? "text" : "password";
	icone.textContent = eSenha ? "visibility" : "visibility_off";
}
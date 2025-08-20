function sendMessage() {
  const input = document.getElementById('msgInput');
  const chat = document.getElementById('chat');
  const msg = input.value.trim();
  if (!msg) return;

  // Cria mensagem enviada
  const div = document.createElement('div');
  div.className = 'message sent';
  div.innerHTML = msg + ' <span class="time">' + new Date().toLocaleTimeString().slice(0,5) + '</span>';
  chat.appendChild(div);

  // Resposta automática
  setTimeout(() => {
    const reply = document.createElement('div');
    reply.className = 'message received';
    reply.innerHTML = 'Resposta automática 😉 <span class="time">' + new Date().toLocaleTimeString().slice(0,5) + '</span>';
    chat.appendChild(reply);
    chat.scrollTop = chat.scrollHeight;
  }, 1000);

  input.value = '';
  chat.scrollTop = chat.scrollHeight;
}
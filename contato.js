console.log("contato.js carregou");
emailjs.init({ publicKey: "z1u4x5quIvEDkLiPi" });

const CHAVE = "mensagens";

function lerMensagens() {
  const texto = localStorage.getItem(CHAVE);
  if (texto === null) {
    return [];
  }
  return JSON.parse(texto);
}

function salvarMensagens(lista) {
  localStorage.setItem(CHAVE, JSON.stringify(lista));
}

function gerarDadosTeste() {
  if (localStorage.getItem(CHAVE) === null) {
    const lista = [];

    for (let i = 1; i <= 20; i++) {
      lista.push({
        id: i,
        nome: "Pessoa " + i,
        email: "pessoa" + i + "@teste.com",
        mensagem: "Mensagem de teste número " + i
      });
    }

    salvarMensagens(lista);
  }
}

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const novaMensagem = {
    id: Date.now(),
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    mensagem: document.getElementById("mensagem").value
  };

  const lista = lerMensagens();
  lista.push(novaMensagem);
  salvarMensagens(lista);

    emailjs.send("service_em47m4j", "template_pf5sspe", {
    nome: novaMensagem.nome,
    email: novaMensagem.email,
    mensagem: novaMensagem.mensagem
  })
  .then(function () {
    alert("Mensagem enviada e e-mail disparado!");
  })
  .catch(function (erro) {
    console.log(erro);
    alert("Mensagem salva, mas o e-mail falhou.");
  });

  mostrarMensagens();
  formulario.reset();
});

function mostrarMensagens() {
  const lista = lerMensagens();
  const tabela = document.getElementById("listaMensagens");
  tabela.innerHTML = "";

  for (let i = 0; i < lista.length; i++) {
    const m = lista[i];
    tabela.innerHTML += `
      <tr>
        <td>${m.nome}</td>
        <td>${m.email}</td>
        <td>${m.mensagem}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editar(${m.id})">Editar</button>
          <button class="btn btn-sm btn-danger" onclick="excluir(${m.id})">Excluir</button>
        </td>
      </tr>
    `;
  }
}

function excluir(id) {
  let lista = lerMensagens();
  lista = lista.filter(function (m) {
    return m.id !== id;
  });
  salvarMensagens(lista);
  mostrarMensagens();
}

function editar(id) {
  const lista = lerMensagens();
  const mensagem = lista.find(function (m) {
    return m.id === id;
  });

  const novoTexto = prompt("Edite a mensagem:", mensagem.mensagem);

  if (novoTexto !== null) {
    mensagem.mensagem = novoTexto;
    salvarMensagens(lista);
    mostrarMensagens();
  }
}

const SENHA_ADMIN = "HbtJJ98Io";

document.getElementById("btnAdmin").addEventListener("click", function () {
  const painel = document.getElementById("painelAdmin");

  // Se o painel já está aberto, só fecha
  if (!painel.classList.contains("d-none")) {
    painel.classList.add("d-none");
    return;
  }

  const digitada = prompt("Digite a senha de administrador:");

  if (digitada === SENHA_ADMIN) {
    painel.classList.remove("d-none");
  } else if (digitada !== null) {
    alert("Senha incorreta!");
  }
});

gerarDadosTeste();
mostrarMensagens();
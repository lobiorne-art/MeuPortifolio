Portfólio

Portfólio desenvolvido do zero com HTML5, CSS3, JavaScript e Bootstrap, como atividade final do 4º bimestre.

# 1. Ferramenta de automação escolhida (Etapa 2.2)

Para a notificação do formulário de contato, foi escolhido o EmailJS.

Por que a escolha do EmailJS:

- Não precisa de servidor (backend): o e-mail é enviado direto pelo JavaScript do navegador, o que combina com a proposta do projeto de não utilizar um banco de dados nem servidor próprio.
- Integração simples: basta carregar a biblioteca por CDN e chamar `emailjs.send(...)` quando o formulário é enviado.
- Notificação real: o serviço é conectado ao e-mail do autor e entrega uma mensagem a cada contato recebido.
- Template com variáveis: o e-mail pode ser montado com os campos `{{nome}}`, `{{email}}` e `{{mensagem}}`, preenchidos com o que o visitante digitou.
- Plano gratuito, suficiente para um projeto simples.

Fluxo: o visitante envia o formulário em `Contato.html` → o JavaScript salva a mensagem no LocalStorage (em JSON) → o EmailJS dispara o e-mail para o autor → a tabela do painel administrativo é atualizada.

# 2. Como acessar a área administrativa oculta e testar o CRUD

1. Abra a página **Contato** (`Contato.html`).
2. Role até o fim e clique no botão **Admin**.
3. Digite a senha: `HbtJJ98Io`
4. O painel Mensagens recebidas será exibido. No primeiro acesso, o sistema injeta automaticamente 20 registros de teste no LocalStorage.
5. Teste o CRUD:
   - Criar: preencha o formulário de contato e clique em **Enviar**. A mensagem aparece na tabela.
   - Ler: a tabela lista todas as mensagens salvas.
   - Atualizar: clique em Editar na linha desejada e altere o texto da mensagem.
   - Deletar: clique em Excluir na linha desejada.

Para simular o primeiro acesso novamente: abra o navegador, pressione F12, vá em Application > Local Storage, apague a chave `mensagens` e recarregue a página. Os 20 registros de teste serão gerados de novo.

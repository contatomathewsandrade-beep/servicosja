# Kit de GIT para trabalhar no PI

Fala pessoal

🚫 NUNCA, NUNCA trabalhem diretamente na branch main. 🚫

A main é a versão oficial e funcional do nosso projeto. Vocês vão trabalhar em uma "faixa de trabalho" (uma branch) separada de vocẽs mesmo e só é juntada à main depois de ser revisada e aprovada (através de um Pull Request - PR).

<h1>Git - Trabalhando com Fork no GitHub</h1>



**Fork** é uma prática comum no GitHub para copiar um repositório de um outro usuário para o seu repositório no Github. Esta prática permite que você faça mudanças livremente sem afetar o repositório original. Este tutorial irá guiá-lo pelos passos para fazer um fork de um repositório, clonar o repositório "forkado", fazer mudanças e criar um pull request para contribuir de volta no repositório original.

<br />

**Clone x Fork**

A imagem abaixo, ilustra a diferença entre o Clone o Fork:

<div align="center"><img src="https://i.imgur.com/aqnalbT.png" title="source: imgur.com" /></div>

Quando você **clona** um repositório Git, você está baixando uma cópia do repositório para sua máquina local. É como pegar uma foto do momento do código do GitHub e fazer o download na máquina. 

Por outro lado, o **forking** é feito diretamente no GitHub. Quando você faz um fork de um repositório, você cria uma cópia do repositório original em sua conta do GitHub. Este repositório **"forkado"** permanece vinculado ao original, permitindo que você faça alterações e contribua de volta. No entanto, quaisquer alterações que você fizer no seu fork não afetarão automaticamente o repositório original — você precisará criar explicitamente uma solicitação de pull para mesclar suas alterações. 

<br />

<h2>👣 Passo 1: Fazer Fork do Repositório</h2>



1. **Acesse o Repositório Original**:
   - Vá para o repositório que você deseja forkar no GitHub.

<div align="center"><img src="https://i.imgur.com/17Ucb99.png" title="source: imgur.com" /></div>

2. **Clique em "Fork"**:
   - No canto superior direito da página do repositório, clique no menu **Fork 🡪 Create a new fork**.

<div align="center"><img src="https://i.imgur.com/Iv99Sax.png" title="source: imgur.com" /></div>

3. Selecione a **Sua Conta**:
   - Selecione sua conta GitHub onde o fork será criado. Isso criará uma cópia do repositório original na sua conta GitHub.
   - Na sequência clique no botão **Create fork** para concluir.

<div align="center"><img src="https://i.imgur.com/cfBihTA.png" title="source: imgur.com" /></div>

<br />

<h2>👣 Passo 2: Clonar o Repositório Fork</h2>



1. **Navegue até Seu Repositório Fork**:
   - Vá para a página do repositório que você fez o fork no seu GitHub.

<div align="center"><img src="https://i.imgur.com/UZzuRHD.png" title="source: imgur.com" /></div>

2. **Copie a URL do Repositório**:
   - Clique no botão **Code** e copie a URL HTTPS do repositório (usualmente termina com `.git`).

<div align="center"><img src="https://i.imgur.com/R9HxgoJ.png" title="source: imgur.com" /></div>

3. **Clone o Repositório para Seu Computador**:

   - Abra um terminal ou prompt de comando.


   - Execute o comando:

     ```bash
     git clone <URL-do-repositório>
     ```
     
     Substitua a **<URL-do-repositório>** pela URL copiada.

<br />

<h2>👣 Passo 3: Fazer Mudanças no Código</h2>



1. **Navegue para o Diretório do Repositório Clonado**:

   ```bash
   cd <nome-do-repositório>
   ```
   
2. **Crie uma Nova Branch**:

   - É uma boa prática criar uma nova branch para suas mudanças.

   ```bash
   git checkout -b minha-branch
   ```
   
3. **Faça Suas Mudanças**:

   - Edite os arquivos conforme necessário.

4. **Adicione e Comite Suas Mudanças**:

   ```bash
   git add .
   git commit -m "Descrição das mudanças"
   ```

<br />

<h2>👣 Passo 4: Enviar Mudanças para o GitHub</h2>



1. Envie a nova Branch para o seu Repositório Fork:

   ```bash
   git push origin minha-branch
   ```

<br />

<h2>👣 Passo 5: Criar um Pull Request</h2>



1. **Navegue até o Repositório Fork no GitHub**.
2. **Clique no Botão "Compare & pull request"**:
   - Este botão aparece após você fazer push de uma nova branch.
3. **Preencha os Detalhes do Pull Request**:
   - Adicione um título e uma descrição detalhada do que foi alterado.
4. **Submeta o Pull Request**:
   - Clique no botão **"Create pull request"**.

<br />

<h2>👣 Passo 6: Manter seu Fork Atualizado</h2>



1. **Adicione o Repositório Original como um Remoto**:

   - No terminal, navegue até o diretório do repositório clonado e execute:

   ```bash
   git remote add upstream <URL-do-repositório-original>
   ```
   
2. **Busque Atualizações do Repositório Original**:

   ```bash
   git fetch upstream
   ```
   
3. **Mescle as Atualizações na Sua Branch**:

   ```bash
   git checkout main
   git merge upstream/main
   ```
   
4. **Envie as Atualizações para o seu repositório Fork no GitHub**:

   ```bash
   git push origin main
   ```

<br />

<br />

<div align="left"><a href="../README.md"><img src="https://i.imgur.com/XMgF3gl.png" title="source: imgur.com" width="3%"/>Voltar</a></div>








duplas:



lider : abner / dupla: marcos e Gustavo / designer: abner e patrícia (2paginas)

lider :Marcos / dupla: Miguel e cicero / designer: Matheus e batista (3 paginas)

lider : ana /dupla: Fernanda e vinicius / designer:/lukas (2paginas)

lider :bruno / dupla: cailane e vericimo /designer:/alana (2paginas)

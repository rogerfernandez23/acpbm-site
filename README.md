<p  align="center">
  <img width="250px" src="https://raw.githubusercontent.com/gist/rogerfernandez23/eefdd7a8cfc082c4a6a62ca0c991834a/raw/25eda0a493ccd4925d061e4d91b663e309cf08e4/facpbm.svg" alt="logo-projeto"/>
</p>

<h1 align="center">FEDERAÇÃO ACPBM - SITE 🖥️</h1>
<p align="center">Um site que gerência notícias, informações, campeonatos e clubes de maneira prática e objetiva</p>

<p  align="center">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/rogerfernandez23/acpbm-site?display_timestamp=author&style=for-the-badge">&nbsp;
  <img alt="GitHub License" src="https://img.shields.io/github/license/rogerfernandez23/acpbm-site?style=for-the-badge">
</p>

<p align="center">
 <a href="#features">Features</a> •
 <a href="#deploy">Deploy</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#instalacao">Instalação</a> • 
 <a href="#autor">Autor</a> • 
</p>

 <br /><h4 align="center"> 
	🚧  Projeto ainda em Desenvolvimento  🚧
</h4>

 <br /><h2>Sobre o Projeto</h2>

<p align="justify">
Este projeto foi desenvolvido no padrão MVC de arquitetura com foco em boas práticas de desenvolvimento de maneira que permite o crescimento e implantação escalável de novas funcionalidades, buscando ao máximo 
uma melhor experiência do usuário.
	
Dentro de suas funcionalidades, a ferramenta permite o cadastro e gerenciamento de contas pessoais com autenticação no ambiente frontend (utilizando o [React-Hook-Form](https://react-hook-form.com/)) e no backend (utilizando o [Yup](https://www.npmjs.com/package/yup)) 
diminuindo ao máximo a incidência de erros ou tentativas maliciosas. O tratamento e armazenamento de dados dos usuários é feito com o banco relacional [PostgreSQL](https://www.postgresql.org/) em conexão com o
[Sequelize](https://sequelize.org/) que envia os dados validados salvado um hash de senha (criptografada) do usuário através do [Bcrypt](https://www.npmjs.com/package/bcrypt).

A permissão para acesso do usuário à sua conta depende inicialmente do cadastro de uma equipe única por parte dos administradores da página. Mesmo que esteja logado, a lógica de rotas privadas impede o acesso
ao verificar que o cadastro ainda não foi realizado. O mesmo se aplica aos usuários não "admin", que não conseguem acessar a pagina admin sendo que a conta admin, não acessa dados na rota de perfil de usuário.
E por último, a utilização do [JWT Token](https://jwt.io/), impede que não cadastrados, tenham acesso a quaisquer páginas que necessitam de login na ferramenta.
</p>
 
 <br /><h2 id="features">Features 🔄</h2>

<h3>Implementadas ✔️</h3>

✅ Login/Cadastro de Usuários<br />
✅ Autenticação com token JWT<br />
✅ Acesso restrito ao Administrador<br />
✅ Criação, Edição e Deleção de equipes<br />
✅ Gerenciamento de usuários<br />
✅ Tela de edição usuário<br />

<h3>Futuras 🔧</h3>

- [ ] Reset de senha de acesso (em breve ⏳)
- [ ] Aprovação/reprovação de novos usuários
- [ ] Aba de Campeonatos
- [ ] Gerenciador e criador de Campeonatos
- [ ] Integração ao Marketplace


 <br /><h2 id="deploy">Deploy 🔐</h2>
 
<p align="center">	
  <a href="https://facpbm.netlify.app/"><img width="600px" src="https://rogeriofernandes.netlify.app/static/media/model.3fcb9ac8740c1bdb858b.jpg" alt="logo-deploy"/></a>
</p>
<p align="center">
  <a href="https://facpbm.netlify.app/">Veja o projeto aqui</a>
</p>

 <br /><h2 id="tecnologias">Tecnologias 📚</h2>

Utilizei estas ferramentas para o desenvolvimento do projeto:

- [JavaScript](https://devdocs.io/javascript/)
- [React](https://pt-br.reactjs.org/)
- [Context API](https://legacy.reactjs.org/docs/context.html)
- [React Carrousel](https://www.npmjs.com/package/react-elastic-carousel)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Yup](https://www.npmjs.com/package/yup)
- [UUID](https://www.uuidgenerator.net/version4)
- [Styled Components](https://www.styled-components.com/)
- [Bootstrap](https://getbootstrap.com/)
- [JWT Auth](https://jwt.io/)
- [Swal Alert](https://sweetalert2.github.io/)
- [React-Hook-Form](https://react-hook-form.com/)
- [Multer](https://www.npmjs.com/package/multer)
- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)

 <br /><h2 id="instalacao">Instalação ⚙️</h2>

### 📊 Rodando o Front-End

```bash
# Clone este repositório
$ git clone <https://github.com/rogerfernandez23/acpbm-site>

# Acesse a pasta do projeto no terminal/cmd
$ cd acpbm-site

# Instale as dependências
$ yarn install 

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

### 🗂️ Rodando o Back-End

```bash
# Clone o repositório
$ git clone <https://github.com/rogerfernandez23/acpbm-site-backend>

# Acesse a pasta do projeto no terminal/cmd
$ cd acpbm-site-backend

# Instale as dependências
$ yarn install 

# Execute a aplicação em modo de desenvolvimento
$ yarn run dev

# O servidor inciará na porta:8080 - acesse <http://localhost:8080>
```
<a href="https://github.com/rogerfernandez23/acpbm-site-backend">Repositório Backend</a>

 <br /><h2 id="autor">Autor ✏️</h2>
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/135080702?v=4" width="100px;" alt="foto-autor"/>
 <p>Projetado e desenvolvido por <b>Rogério Fernandes 🐙</b></p>

<a href="https://www.linkedin.com/in/roger-fernandez22/" target="_blank"><img  width="28px;" src="https://raw.githubusercontent.com/gist/rogerfernandez23/877f716e9a0e5a9e295c04e43e982181/raw/a2e2df4cee96397536d5116c57935ec81d809294/linkedincard.svg" alt="linkedin"></a>
<a href="https://www.instagram.com/rogerfernandez_" target="_blank"><img width="30px;" src="https://raw.githubusercontent.com/gist/rogerfernandez23/6862b94f7227b9d19fc4d30cfdd6c115/raw/47884127e0d2f1bb2831a2065bd5cc228dc2b4e9/instacard.svg" alt="instagram"></a>










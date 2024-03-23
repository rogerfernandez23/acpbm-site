<p align="center">	
  <a href="https://facpbm.netlify.app/"><img width="80%" src="https://rogeriofernandes.netlify.app/static/media/model.3fcb9ac8740c1bdb858b.jpg" alt="logo-deploy"/></a>
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
	🚧  <i>Projeto ainda em Desenvolvimento</i>  🚧
</h4>

 <br /><h2>Sobre o Projeto</h2>

<p>
Este projeto foi desenvolvido seguindo o padrão de arquitetura <b>MVC</b>, com foco em boas práticas de desenvolvimento, possibilitando o crescimento e implantação escalável de novas funcionalidades. O objetivo principal é proporcionar uma melhor experiência ao usuário. Ao adotar o MVC, o código está estruturado de forma organizada, com a separação clara de responsabilidades entre <b>Model</b>, <b>View</b> (frontend) e <b>Controller</b>. Isso facilita a manutenção do código, permitindo a adição de novos recursos de forma eficiente e minimizando o impacto em outras partes do sistema. Dessa forma, o projeto está preparado para evoluir ao longo do tempo, adaptando-se às necessidades dos usuários e futuras ideias que pretendo adicionar, proporcionando uma experiência cada vez mais satisfatória.

Dentro de suas funcionalidades, a ferramenta permite o cadastro e gerenciamento de contas pessoais com autenticação tanto no ambiente frontend (utilizando o [React-Hook-Form](https://react-hook-form.com/)), quanto no backend (utilizando o [Yup](https://www.npmjs.com/package/yup)), reduzindo a incidência de erros ou tentativas de login maliciosas. A escolha dessas ferramentas visa a segurança e a facilidade de uso para os usuários. O tratamento e armazenamento de dados dos usuários são realizados em um banco de dados relacional, utilizando o [PostgreSQL](https://www.postgresql.org/), em conexão com o [Sequelize](https://sequelize.org/). Essa combinação proporciona uma estrutura sólida e confiável para a manipulação de dados, fornecendo uma camada de abstração poderosa e fácil de usar sobre o SQL tradicional.
Para garantir a segurança das informações dos usuários, as senhas são armazenadas de forma criptografada. O [Bcrypt](https://www.npmjs.com/package/bcrypt) é utilizado para gerar hashes de senha, o que dificulta a sua decodificação em caso de acesso não autorizado ao banco de dados. Como parte da experiência do navegação, ao se cadastrar com sucesso, o usuário recebe automaticamente um e-mail de boas-vindas. Esse processo é automatizado utilizando [Python](https://www.python.org/), garantindo uma comunicação eficaz e personalizada com os novos usuários.

A permissão para o acesso do usuário so seu perfil fica pendente inicialmente após o cadastro. É necessário a associação de uma equipe aos seus dados por parte dos administradores da página. Mesmo que esteja logado, a lógica implementada de rotas privadas verifica se tal cadastro de sua equipe foi localizada ou não, para assim redirecioná-lo a seu perfil. Da mesma forma, os usuários que <b>não</b> são "admin", não conseguem acessar a página de administração, enquanto os administradores não têm acesso a página de perfil de usuário <b>único</b>. Essa abordagem garante a segurança e a integridade dos dados, mantendo a separação adequada de funções e permissões. Além disso, a utilização do [JWT Token](https://jwt.io/) é fundamental para garantir que apenas usuários autenticados tenham acesso às páginas que exigem login na ferramenta. O JWT fornece uma maneira segura de transmitir informações de autenticação entre o cliente e o servidor, evitando que usuários não cadastrados acessem recursos protegidos.

No seu perfil pessoal, o usuário pode editar sua equipe cadastrada, alterando o nome e o logotipo do escudo. Os Administradores, além de gerenciar todos os usuários e suas equipes, têm permissão para criar, editar e excluir clubes registrados. As informações são requisitadas ao banco de dados e disponibilizadas nestas páginas. Além disso, a implementação do [Context API](https://legacy.reactjs.org/docs/context.html) oferece uma forma eficiente e organizada de compartilhar estados e dados entre os componentes da aplicação, garantindo uma experiência consistente para o usuário em todas as partes do sistema.

Na tela inicial, disponível para todos os visitantes, são apresentadas informações de notícias que podem ser acessadas e lidas, além de carrosséis com composição de clubes e campeonatos. Esses elementos proporcionam uma visão abrangente das atividades e eventos da federação, permitindo que os usuários se mantenham atualizados sobre as últimas novidades e acontecimentos. Em breve, farei adições que contribuirão para uma melhor navegação e experiência de qualquer pessoa não cadastrada que esteja interessada em saber mais sobre a federação. Essas futuras adições podem ser visualizadas nas <a href="#features">Features</a>.

Sobre os estilos visuais, optei predominantemente pelo uso do [Styled Components](https://www.styled-components.com/). Porém, fiz algumas pequenas adições com [Bootstrap](https://getbootstrap.com/) em um dos carrosséis, aproveitando seus recursos de layout responsivo e componentes predefinidos para uma experiência visual mais consistente. Para fornecer feedback ao usuário de uma forma visualmente atraente e interativa fiz uso do [Swal Alert](https://sweetalert2.github.io/). Os demais conteúdos visuais (logotipos e vídeos), produzi utilizando ferramentas como o Adobe [Photoshop](https://www.adobe.com/products/photoshop.html) e [Illustrator](https://www.adobe.com/products/illustrator.html). Essas ferramentas oferecem recursos avançados para a criação e edição de elementos gráficos, garantindo uma apresentação visualmente mais atraente e profissional em toda a plataforma, além de promover uma identidade visual forte e reconhecível.

<b><i>Estou entusiasmado em continuar trabalhando para fornecer mais funcionalidades e aprimorar ainda mais meus conhecimentos. Este projeto é uma oportunidade para explorar novas tecnologias, desenvolver minhas habilidades e contribuir para uma experiência do usuário ainda melhor. Além disso, estou comprometido em buscar constantemente melhorias no desempenho, segurança e usabilidade. Isso inclui aprender com feedbacks dos usuários, estudar as últimas tendências e implementar as melhores práticas. Estou confiante de que as futuras adições e aprimoramentos tornarão esta plataforma ainda mais valiosa e impactante.

att. Roger Fernandes
</i></b>
</p>
 
 <br /><h2 id="features">Features 🔄</h2>

<h3>Implementadas ✔️</h3>

✅ Login/Cadastro de Usuários<br />
✅ Validação de dados no Login/Cadastro<br />
✅ Autenticação com token JWT<br />
✅ Acesso restrito por hierarquia<br />
✅ Criação, Visualização, Edição e Deleção de equipes<br />
✅ Upload de imagens<br />
✅ Gerenciamento de usuários<br />
✅ Edição individual do usuário<br />
✅ Envio de e-mail para novos cadastros<br />
✅ Feedbacks interativos ao usuário<br />

<h3>Futuras 🔧</h3>

- [ ] Responsividade para diferentes dispositivos (em produção 👨‍🔧)
- [ ] Reset de senha de acesso (em breve ⏳)
- [ ] Ação de compartilhamento de notícias (em breve ⏳)
- [ ] Criador e editor de Campeonatos
- [ ] Tela de campeonatos e equipes
- [ ] Tela de informações por equipe no perfil do usuário
- [ ] Ferramenta de aprovação/reprovação de novos cadastros
- [ ] Tela de listagem de equipes ao Administrador
- [ ] Integração ao Marketplace


 <br /><h2 id="deploy">Deploy 🔐</h2>
 
 <a href="https://facpbm.netlify.app/">Veja o projeto aqui</a>

 <h3>Acessos para testes:</h3>

<p>
Administrador:<br/>
Login - <b>admteste@login.com</b><br/>
Senha - <b>testeadmin</b><br/>

Usuário:<br/>
Login - <b>usuarioteste@login.com</b><br/>
Senha - <b>testeusuario</b><br/>
</p>
  <br /><h2 id="tecnologias">Tecnologias 📚</h2>

Utilizei estas ferramentas para o desenvolvimento do projeto:

- [JavaScript](https://devdocs.io/javascript/)
- [React](https://pt-br.reactjs.org/)
- [Context API](https://legacy.reactjs.org/docs/context.html)
- [React Carrousel](https://www.npmjs.com/package/react-elastic-carousel)
- [Node.js](https://nodejs.org/en/)
- [Python](https://www.python.org/)
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










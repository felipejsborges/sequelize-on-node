<div align="center">
	<h1>happy</h1>
	<img src="/.github/banner.png" alt="banner" width="80%" />
</div>

<p align="center">
	<img alt="Repository size" src="https://img.shields.io/github/repo-size/felipejsborges/happy">
	<a href="https://www.linkedin.com/in/felipejsborges/">
	  <img alt="made by" src="https://img.shields.io/badge/made%20by-Felipe%20Borges-orange">
	</a>
	<a href="https://github.com/felipejsborges/happy/commits/master">
	  <img alt="last commit" src="https://img.shields.io/github/last-commit/felipejsborges/happy">
	</a>
	<a href="https://github.com/felipejsborges/happy/issues">
		<img alt="issues" src="https://img.shields.io/github/issues/felipejsborges/happy">
	</a>
	<a href="https://github.com/felipejsborges/happy/network/members">	
		<img alt="forks" src="https://img.shields.io/github/forks/felipejsborges/happy">	
	</a>
	<a href="https://github.com/felipejsborges/happy/stargazers">
		<img alt="stars" src="https://img.shields.io/github/stars/felipejsborges/happy">
	</a>
	<a href="https://github.com/felipejsborges/happy/blob/master/LICENSE.md">
		<img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT">	
	</a>
	<!-- version, status da build, status dos testes -->
</p>

<br>

<h4 align="center">   
	<a href="#description-">Description 📄</a>		|    
	<a href="#technologies-">Technologies 🚀</a>		|    
  <a href="#routes-">Routes 📡</a>		|   
	<a href="#how-to-run-it-on-your-computer-">How to run it on your computer 🖥️</a>
</h4>

<hr>

<h4>Description 📄</h4>
  
This application was developed in order to learn and practice Sequelize ORM. How to setup the environment, the models, manage migrations, with relations between entities (OneToMany, ManyToMany, ...) and soft delete records on the database. Check the [.json file]() with details of the routes.

<hr>

<h4>Technologies 🚀</h4>

- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/docs/)
- [Sequelize ORM](https://sequelize.org/master/) + [MySQL](https://www.mysql.com/)
- [Express](https://expressjs.com/)

<hr>

<h4>Routes</h4>

- [Click here](.github/insomnia.json), copy the content, create .json with it, and import it on [Insomnia](https://insomnia.rest/)

<hr>

<h4>How to run it on your computer</h4>

- Install [Node.js](https://nodejs.org/en/download/), [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) (or use npm), [Docker](https://docs.docker.com/get-docker/), and [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), then:

```
# clone this repo
$ git clone https://github.com/felipejsborges/sequelize-on-node.git

# go to folder
$ cd sequelize-on-node

# install dependencies
$ yarn

# create a MySQL container on docker
$ docker run --name mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=db -e MYSQL_USER=user -e MYSQL_PASSWORD=password -d mysql

# run migrations
$ yarn typeorm migration:run

# run the server
$ yarn dev
```
<hr>

by Felipe Borges<br>
<div>
	<a href="https://www.linkedin.com/in/felipejsborges">
		<img width="32px" src="https://github.com/felipejsborges/felipejsborges/blob/master/assets/linkedin.svg" alt="LinkedIn">
	</a>
	<a href="https://www.youtube.com/channel/UC6tN_loxPGOP30LWNbJM7rg">
		<img width="32px" src="https://github.com/felipejsborges/felipejsborges/blob/master/assets/youtube.svg" alt="YouTube">
	</a>
	<a href="https://wa.me/+55012996477129">
		<img width="32px" src="https://github.com/felipejsborges/felipejsborges/blob/master/assets/whatsapp.svg" alt="WhatsApp">
	</a>
	<a href="mailto:felipejsborges@outlook.com">
		<img width="32px" src="https://github.com/felipejsborges/felipejsborges/blob/master/assets/mail.svg" alt="E-mail">
	</a>
</div>

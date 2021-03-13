# Node API

Simples aplicação de uma API em NodeJs com o banco de dados Mysql.

## Requisitos

Para subir a aplicação, os seguintes programas devem estar instalados em sua máquina:

1. Docker
2. Docker compose

## Uso

Clone esse repositório e execute o arquivo `docker-compose.yaml`.

```
git clone git@github.com:aristidesneto/node-api.git

cd node-api

cp .env.example .env

docker-compose up
```

O arquivo `.env` contém as variáveis que são utilizadas na aplicação Node e Mysql. Não é necessário alterar nada nesse arquivo para que funcione, altere apenas por preferência (se alterar, [veja esse tópico](#banco-de-dados)).

Ao executar o docker compose, será baixado a imagem do Node versão 15 e irá preparar o container com a API desenvolvida.

Também será baixado a imagem do Mysql 5.7, que será usado como banco de dados para aplicação.

> Como a aplicação depende do container do Mysql, é feita uma verificação se o Mysql está no ar e somente depois de tudo ok o container da aplicação é iniciado. Isso leva alguns segundos para ser feito.

Após o término, será exibida a mensagem abaixo, informando que tudo ocorreu com sucesso e sua aplicação está rodando na porta 8080 [http://localhost:8080](http://localhost:8080).

```bash
...
app_1    | > nodejs@1.0.0 start
app_1    | > nodemon index.js
app_1    | 
app_1    | [nodemon] 2.0.7
app_1    | [nodemon] to restart at any time, enter `rs`
app_1    | [nodemon] watching path(s): *.*
app_1    | [nodemon] watching extensions: js,mjs,json
app_1    | [nodemon] starting `node index.js`
app_1    | mysql db_quero 3306 user password
app_1    | consign v0.1.6 Initialized in /usr/src/app
app_1    | + ./routes/route.js
app_1    | Server running on port 8080
```
Ao acessar via navegador o link [http://localhost:8080](http://localhost:8080) ou por algum client REST, o resultado será um Json:

```
{data: "Hello World"}
```

<a href="banco-de-dados"></a>

## Banco de dados

Ao subir o container do Mysql será criado um banco de dados para que a aplicação possa se comunicar.

No diretório `scripts` contém o arquivo `db.sql` que é executado na criação do container após a criação do banco de dados.

Se o nome do banco de dados foi alterado no arquivo `.env`, será necessário alterar nesse script para que não apresente erro quando a aplicação for conectar no banco.

```sql
CREATE TABLE `node_api`.`messages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `node_api`.`messages` (`data`) VALUES ('Hello World');
```
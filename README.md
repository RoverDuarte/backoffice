# BackOffice

## Objetivo

**Primeira Eatpa** - Criar uma API com a proposta de estudar funções básicas de acesso ao banco de dados usando Knex, usar rotas e protegel-las com CORS - Cross Origin Resource Sharing e outros recursos.

**Segunda Etapa** - Implementar AXIOS e Vue

Abaixo um breve explanação sobre o uso básico, mais detalhes veja nas [Referências](#Referências).

## Primeiros Passos

Criar a pasta onde estará localizada o projeto, já dentro da pasta do projeto, temos a opção de escolher como inicializar o _packge.json_, usando npm ou yarn, particularmente usarei yarn.

```javascript
  // npm init -y
  yarn init -y
```

## Knex

```javascript
// inicializando o knex -> resultado knexfile.js na raiz do projeto
npx knex init
// inicializa a migration
npx knex migrate:make create_table_users
// após configurada a migration rodar o comando
npx knex migrate:latest
// rollback
npx knex migrate:rollback
// criando Seeds
npx knex seed:make 001_users
// rodar os Seeds
npx knex seed:run
```

## Usando o cors

```javascript
routes.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,PATCH');
  res.header(
    "Access-Control-Allow-Methods",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
    return res.status(200).send({});
  }
  next();
});
```
## .env

o arquivo .env_sample é um exemplo que deve ser renomeado para .env  e editado os dados quando for usado.

## Normalizando porta

```javascript
function normalizePort(valor) {
  const port = parseInt(valor, 10);
}
```

## Usando Nodemon [tools]

Nodemon é um utilitário em tempo de desenvolvimento para monitorar todas as alterações nos arquivos e reiniciar automaticamente o servidor quando for necessário.

## Referências
- [Markdown](https://docs.pipz.com/central-de-ajuda/learning-center/guia-basico-de-markdown#open)
- [Git](https://rogerdudler.github.io/git-guide/index.pt_BR.html)
- [Knex Js](http://knexjs.org/)
- [Axios](https://br.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)
- [O que é CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS)
- [Usando Cors Js](https://www.npmjs.com/package/cors)
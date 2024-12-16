## Projeto agenda feito com Node/Express e MongoDB

### Exemplo de projeto MVC, envolvendo a criação de um CRUD (Create, Read, Update, Delete) para manter atualizados os registros na base de dados MongoDB.


#### Essa agenda usa o EJS para construção dos templates.


### Rotas
- http://localhost:3000 = Página para visualização da lista de contatos cadastrados
- http://localhost:3000/login/index = Página para cadastro de credenciais ou login no sistema agenda.

A lista de contatos, inclusive com a possibilidade de pesquisar por nome, pode ser visualizada sem ter feito o login. Contudo, para criar, editar ou excluir um contato, o usuário deve estar logado.

### Instruções:

1-Crie uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

2- Crie um novo cluster gratuito.

3- Configure a segurança do cluster (usuário, senha e IP de acesso).

4- Gere a string de conexão e guardar esse valor.

5- Renomear o arquivo .env-example deste projeto para .env na raiz do projeto com os valores da variáveis ambientes:

CSRF_SECRET=seu-valor-aqui

COOKIE_PARSER_SECRET=seu-valor-aqui

CONNECTIONSTRING=seu-valor-aqui

SESSION_SECRET=seu-valor-aqui


`OBS`: Para gerar valores do tipo SECRET, pode ser usado um gerador de senha, para que seja produzido um valor aleatório, por exemplo, de 32 caracteres. O site do gerador de senha está [aqui](https://www.4devs.com.br/gerador_de_senha).
Ao copiar a string de conexão para o arquivo .env, substituir no espaço delimitado dentro dela pelo valor da senha e em seguida acrescentar ao fim:  `/[nome do banco de dados]`. Substituir os colchetes pelo nome do banco de dados.
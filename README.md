# Gerenciador de Tarefas 
Este é um projeto de aplicativo de Gerenciador de tarefas (Todo List) Full-stack construído com as tecnologias **`Next.js`**, **`React`**, **`TypeScript`**, **`Tailwind CSS`** no Front-end e **`MySQL`**, **`Docker`**, **`Express.js`**, e **`Sequelize`** no Back-end.

## Funcionalidades
- Adicionar novas tarefas.
- Marcar tarefas como completas.
- Atualizar o título da tarefa.
- Adicionar a prioridade da tarefa.
- Remover tarefas da lista.

## Rotas da API
|Metodo|Rota| Descrição |
|---|---|---|
| POST | **`/tasks:`**| Cria uma nova tarefa.
| GET | **`/tasks:`**| Retorna todas as tarefas.
| PUT | **`/tasks/:id:`** |Atualiza uma tarefa existente com o ID fornecido.
| DELETE | **`/tasks/:id:`**| Remove uma tarefa existente com o ID fornecido.

## Uso
Certifique-se de ter o Docker instalado. Na pasta raiz do projeto, execute o seguinte comando para iniciar o container do MySQL e aplicação Front-end/Back-end:

      
    docker-compose up -d 
     

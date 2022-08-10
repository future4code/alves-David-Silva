const toDo = ['estudar', 'trabalhar']
toDo.push(process.argv[2])
const toDoList = toDo.map(i => ` ${i}`)

console.log(`Tarefa adicionada com sucesso! Lista de tarefas:${toDoList.join(" |")}.`)
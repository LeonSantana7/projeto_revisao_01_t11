console.log("Projeto TODO");

console.log(process.argv[3]);
const op = process.argv[2]
if(op === 'ver'){
    if(tarefa.length === 0){
        console.log("Não existe tarefas.")
    }else{
        for(const tarefa of tarefas){
            const feito = tarefa.feito === true ? '[✔]': '[ ]'
            console.log(feito, tarefa.titulo);
        }
    } 
    }else if (op === 'add'){
        const titulo = process.argv[3]
        tarefas.push({
            titulo: titulo,
            feito: false,
            criadoEm:'2023-08-23'
        })
}
const titulo = "Limpar sala";
const feito = false;
const criadoEm = "2023-08-23";


const tarefas = []


// Adicionar tarefas
const tarefa = {
    titulo: "Limpar a sala",
    feito: false,
    criadoEm: "2023-08-23",

}

tarefas.push(tarefa);
tarefas.push({
    titulo: "Limpar a cozinha",
    feito: true,
    criadoEm: "2023-08-23",
})

// inicialização    
let posicaoTarefas = 0;
// condição de parada
/*while (posicaoTarefas < tarefas.length) {
    console.log(tarefas[posicaoTarefas].titulo);
    // pos processamento
    posicaoTarefas += 1;

}*/

for(const tarefa of tarefas){
    const feito = tarefa.feito === true ? '[✔]': '[ ]'
    console.log(feito, tarefa.titulo);
}

// Adicionar tarefas
// Marcar uma tarefa como feita
// Desmarcar uma tarefa como feita
// Excluir tarefa
// Editar titulo da tarefa
// Exibir tarefas
function alunosAprovados(alunos) {
    return alunos.filter(function(aluno) {
        return aluno.nota >= 6;
    });
}

// Exemplo de array de objetos representando os alunos e suas notas
const listaDeAlunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Carlos', nota: 4 }
];

// Chamando a função e exibindo o resultado
const alunosAprovadosArray = alunosAprovados(listaDeAlunos);
console.log(alunosAprovadosArray);

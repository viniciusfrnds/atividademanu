// Função para somar dois números
function somar(a, b) {
    return a + b;
}

// Função para subtrair dois números
function subtrair(a, b) {
    return a - b;
}

// Função para multiplicar dois números
function multiplicar(a, b) {
    return a * b;
}

// Exemplo de como você pode utilizar essas funções
document.getElementById("addTaskBtn").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput").value;
    
    // Aqui estou considerando que você pode digitar algo como "2 + 3" ou "4 - 1"
    const [num1, operacao, num2] = taskInput.split(" ");

    let resultado;
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    switch (operacao) {
        case '+':
            resultado = somar(a, b);
            break;
        case '-':
            resultado = subtrair(a, b);
            break;
        case '*':
            resultado = multiplicar(a, b);
            break;
        default:
            resultado = "Operação inválida";
    }

    // Adiciona o resultado na lista de tarefas (só para exemplo)
    const li = document.createElement("li");
    li.textContent = `${taskInput} = ${resultado}`;
    document.getElementById("taskList").appendChild(li);

    // Limpa o input após a adição
    document.getElementById("taskInput").value = "";
});



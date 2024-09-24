document.getElementById('addTaskBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === '') return; // Verifica se a tarefa está vazia

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', function () {
        taskList.removeChild(newTask);
    });

    newTask.appendChild(removeButton);
    taskList.appendChild(newTask);
    taskInput.value = ''; // Limpa o campo de entrada
});

// Funções para somar, subtrair e multiplicar
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

// Função para adicionar o resultado da operação na lista
function adicionarResultadoNaLista(operacao, resultado) {
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.textContent = `${operacao} = ${resultado}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', function () {
        taskList.removeChild(newTask);
    });

    newTask.appendChild(removeButton);
    taskList.appendChild(newTask);
}

// Botões para operações matemáticas
document.getElementById('addBtn').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) return; // Verifica se os números são válidos

    const resultado = somar(num1, num2);
    adicionarResultadoNaLista(`${num1} + ${num2}`, resultado);
});

document.getElementById('subBtn').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) return; // Verifica se os números são válidos

    const resultado = subtrair(num1, num2);
    adicionarResultadoNaLista(`${num1} - ${num2}`, resultado);
});

document.getElementById('mulBtn').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) return; // Verifica se os números são válidos

    const resultado = multiplicar(num1, num2);
    adicionarResultadoNaLista(`${num1} * ${num2}`, resultado);
});


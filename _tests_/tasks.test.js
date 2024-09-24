/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// Carregar o conteúdo do HTML
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('Testes de funcionalidades de lista de tarefas', () => {
  let taskInput;
  let addTaskBtn;
  let taskList;

  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    require('../script.js'); // Carrega o script de manipulação do DOM
    
    taskInput = document.getElementById('taskInput');
    addTaskBtn = document.getElementById('addTaskBtn');
    taskList = document.getElementById('taskList');
  });

  test('Deve adicionar uma tarefa à lista', () => {
    taskInput.value = 'Tarefa 1';
    addTaskBtn.click();
    
    expect(taskList.children.length).toBe(1);
    expect(taskList.children[0].textContent).toContain('Tarefa 1');
  });

  test('Deve remover uma tarefa da lista', () => {
    taskInput.value = 'Tarefa 2';
    addTaskBtn.click();

    const removeButton = taskList.children[0].querySelector('button');
    removeButton.click();

    expect(taskList.children.length).toBe(0);
  });

  test('Deve adicionar e remover três tarefas completamente', () => {
    const tarefas = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3'];

    // Adicionar três tarefas
    tarefas.forEach(tarefa => {
      taskInput.value = tarefa;
      addTaskBtn.click();
    });

    expect(taskList.children.length).toBe(3);

    // Remover todas as três tarefas
    [...taskList.children].forEach(task => {
      const removeButton = task.querySelector('button');
      removeButton.click();
    });

    expect(taskList.children.length).toBe(0);
  });
});

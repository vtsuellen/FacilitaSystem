'use client';
import { useState } from 'react';

export default function Home() {
  const [valueInput, newValueInput] = useState('');
  const [tasks, newTasks] = useState<String[]>([]);

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    newTasks([...tasks, valueInput]);
    newValueInput('');
  };

  const removeTask = (index: number) => {
    const newList = tasks.filter((_task, i) => i !== index);
    newTasks(newList);
  };

  // Remove espaços em branco e verifica se o input não está vazio
  const disabledButton = valueInput.trim() !== '';

  return (
    <main>
      <div>
        <h1>Lista de Tarefas</h1>
        <form onSubmit={addTask}>
          <input
            type='text'
            placeholder='Insira uma nova tarefa'
            value={valueInput}
            onChange={(event) => newValueInput(event.target.value)}
          />
          <button type='submit' disabled={!disabledButton}>
            Adicionar
          </button>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => removeTask(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

'use client';
import Input from '@/components/input';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <main className='flex flex-col items-center justify-center min-h-screen py-6 bg-gray-50'>
      <div className='bg-white p-6 rounded-lg shadow-xl w-full max-w-80'>
        <h1 className='text-3xl font-bold mb-4'>Lista de Tarefas</h1>
        <form
          onSubmit={addTask}
          className='flex  items-center h-10 justify-between'
        >
          <div>
            <Input value={valueInput} onChange={newValueInput} />
          </div>
          <button
            type='submit'
            disabled={!disabledButton}
            className=' bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 w-10 h-10 flex items-center justify-center cursor-pointer'
          >
            <FontAwesomeIcon icon={faPlus} className='h-4 w-4' />
          </button>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className='flex items-center justify-between bg-gray-100 p-2 rounded mt-2 '
            >
              <span className='flex-grow break-all p-1'>{task}</span>
              <button
                onClick={() => removeTask(index)}
                className='text-red-500 hover:text-red-700 transition duration-300'
              >
                <FontAwesomeIcon icon={faXmark} className='text-red-600' />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

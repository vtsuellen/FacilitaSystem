'use client';
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Api from '../../Api';
import { ITasks } from '@/types/tasks';
import ModalUpdate from '@/components/modal';
import FormAddTask from '@/components/formAddTask';

export default function Home() {
  const [valueInput, newValueInput] = useState('');
  const [tasks, newTasks] = useState<ITasks>([]);
  const [selectedTaskId, setSelectedTaskId] = useState<Number | null>(null);

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (valueInput.trim() !== '') {
      Api.post('/tasks', { title: valueInput })
        .then((response) => {
          newTasks([...tasks, response.data]);
          newValueInput(''); // Limpa o valor do input após adicionar a tarefa
        })
        .catch((error) => {
          console.error('Erro ao adicionar a tarefa:', error);
        });
    }
  };

  const removeTask = (id: Number) => {
    Api.delete(`/tasks/${id}`)
      .then(() => {
        // Remove a tarefa da lista de tarefas após a exclusão
        newTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((error) => {
        console.error('Erro ao remover a tarefa:', error);
      });
  };

  const updateTask = (id: Number) => {
    setSelectedTaskId(id);
  };

  // Remove espaços em branco e verifica se o input não está vazio
  const disabledButton = valueInput.trim() !== '';

  useEffect(() => {
    Api.get('/tasks').then((response) => {
      newTasks(response.data);
    });
  }, []);

  return (
    <>
      <main className='flex flex-col items-center justify-center min-h-screen py-6 bg-gray-50'>
        <div className='bg-white p-6 rounded-lg shadow-xl w-full max-w-80'>
          <h1 className='text-3xl font-bold mb-4'>Lista de Tarefas</h1>
          <FormAddTask
            addTask={addTask}
            valueInput={valueInput}
            newValueInput={newValueInput}
            disabledButton={disabledButton}
          />
          <ul>
            {tasks &&
              tasks.map((task, index) => (
                <li
                  key={index}
                  className='flex items-center justify-between bg-gray-100 p-2 rounded mt-2 '
                >
                  <span className='flex-grow break-all p-1'>{task.title}</span>
                  <button
                    onClick={() => removeTask(task.id)}
                    className='text-red-500 hover:text-red-700 transition duration-300 focus:outline-none items-center justify-center cursor-pointer flex'
                  >
                    <FontAwesomeIcon icon={faXmark} className='h-5 w-5' />
                  </button>
                  <button
                    onClick={() => updateTask(task.id)}
                    className='ml-2 text-blue-500 hover:text-blue-700 transition duration-300 focus:outline-none items-center justify-center flex'
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </main>
      <ModalUpdate
        tasks={tasks}
        newTasks={newTasks}
        selectedTaskId={selectedTaskId}
        setSelectedTaskId={setSelectedTaskId}
      />
    </>
  );
}

'use client';
import { useEffect, useState } from 'react';
import Api from '../../Api';
import { ITask, ITasks } from '@/types/tasks';
import ModalUpdate from '@/components/modalUpdate';
import FormAddTask from '@/components/formAddTask';
import ListTasks from '@/components/listTasks';

export default function Home() {
  const [valueInput, newValueInput] = useState('');
  const [tasks, newTasks] = useState<ITasks>([]);
  const [selectedTask, setSelectedTask] = useState<ITask | null>(null);

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

  const updateTask = (task: ITask) => {
    setSelectedTask(task);
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
          <ListTasks
            tasks={tasks}
            removeTask={removeTask}
            updateTask={updateTask}
          />
        </div>
      </main>
      <ModalUpdate
        tasks={tasks}
        newTasks={newTasks}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
      />
    </>
  );
}

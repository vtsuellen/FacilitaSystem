import React, { useState } from 'react';
import Api from '../../Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import Input from './input';
import Priority from './priority';
import { ITask } from '@/types/tasks';

export default function UpdateTaskForm({
  task,
  onUpdate,
  setSelectedTask,
}: {
  task: ITask;
  onUpdate: (task: ITask) => void;
  setSelectedTask: (task: ITask | null) => void;
}) {
  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    Api.put(`/tasks/${task.id}`, { title, priority })
      .then((response) => {
        onUpdate(response.data);
        setTitle('');
        setPriority('');
      })
      .catch((error) => {
        console.error('Erro ao atualizar a tarefa:', error);
      });
  };

  const handleCancel = () => {
    setSelectedTask(null);
  };

  const disabledButton = title.trim() !== '' && priority !== '';

  return (
    <div className='bg-white p-4 rounded-lg shadow-md'>
      <h1 className='text-lg font-semibold mb-2'>Edite sua tarefa</h1>
      <form
        onSubmit={handleSubmit}
        className='flex items-center justify-between gap-2'
      >
        <Input value={title} onChange={setTitle} />
        <button
          type='submit'
          disabled={!disabledButton}
          className='text-green-600 hover:text-green-700'
        >
          <FontAwesomeIcon icon={faCheck} className='h-5 w-5' />
        </button>
        <button
          onClick={handleCancel}
          className='text-red-500 hover:text-red-700 transition duration-300 focus:outline-none items-center justify-center cursor-pointer'
        >
          <FontAwesomeIcon icon={faXmark} className='h-5 w-5' />
        </button>
      </form>
      <Priority priority={priority} setPriority={setPriority} />
    </div>
  );
}

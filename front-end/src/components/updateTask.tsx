import React, { useState } from 'react';
import Api from '../../Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import Input from './input';

export default function UpdateTaskForm({
  taskId,
  onUpdate,
  setSelectedTaskId,
}: {
  taskId: Number;
  onUpdate: (task: any) => void;
  setSelectedTaskId: (id: Number | null) => void;
}) {
  const [title, setTitle] = useState('');
  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    Api.put(`/tasks/${taskId}`, { title })
      .then((response) => {
        onUpdate(response.data);
        setTitle('');
      })
      .catch((error) => {
        console.error('Erro ao atualizar a tarefa:', error);
      });
  };

  const handleCancel = () => {
    setSelectedTaskId(null);
  };

  const disabledButton = title.trim() !== '';

  return (
    <div className='bg-white p-4 rounded-lg shadow-md'>
      <h1 className='text-lg font-semibold mb-2'>Edite sua tarefa</h1>
      <form
        onSubmit={handleSubmit}
        className='flex items-center justify-between gap-2'
      >
        <Input value={title} onChange={setTitle} />

        <button type='submit' disabled={!disabledButton} className='text-green-600 hover:text-green-700'>
          <FontAwesomeIcon icon={faCheck} className='h-5 w-5' />
        </button>
        <button
          onClick={handleCancel}
          className='text-red-500 hover:text-red-700 transition duration-300 focus:outline-none items-center justify-center cursor-pointer'
        >
          <FontAwesomeIcon icon={faXmark} className='h-5 w-5' />
        </button>
      </form>
    </div>
  );
}

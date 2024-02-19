import { useState } from 'react';
import Api from '../../Api';
import { ITask } from '@/types/tasks';

export default function statusTask({ task }: { task: ITask}) {
  const [status, setStatus] = useState<boolean>(task.status);

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newStatus = event.target.checked;
    setStatus(newStatus);
    statusTask(newStatus);
  };

  const statusTask = (newStatus: boolean) => {
    Api.put(`/tasks/${task.id}`, { status: newStatus })
      .then((response) => {
        setStatus(response.data.status);
      })
      .catch((error) => {
        console.error('Erro ao atualizar a tarefa:', error);
      });
  };

  return (
    <div className='flex justify-center items-center '>
      <input
        checked={status}
        onChange={handleStatusChange}
        type='checkbox'
        className='w-4 h-4 rounded accent-green-600 '
      ></input>
    </div>
  );
}

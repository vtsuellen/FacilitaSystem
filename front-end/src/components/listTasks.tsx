import { ITask, ITasks } from '@/types/tasks';
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StatusTask from './statusTaks';

export default function ListTasks({
  tasks,
  removeTask,
  updateTask,
}: {
  tasks: ITasks;
  removeTask: (id: Number) => void;
  updateTask: (task: ITask) => void;
}) {
  return (
    <ul>
      {tasks &&
        tasks.map((task, index) => (
          <li
            key={index}
            className='flex items-center justify-between bg-gray-100 p-2 rounded mt-2 '
          >
            <StatusTask taskId={task.id} />
            <span className='flex-grow break-all p-1'>{task.title}</span>
            <button
              onClick={() => removeTask(task.id)}
              className='text-red-500 hover:text-red-700 transition duration-300 focus:outline-none items-center justify-center cursor-pointer flex'
            >
              <FontAwesomeIcon icon={faXmark} className='h-5 w-5' />
            </button>
            <button
              onClick={() => updateTask(task)}
              className='ml-2 text-blue-500 hover:text-blue-700 transition duration-300 focus:outline-none items-center justify-center flex'
            >
              <FontAwesomeIcon icon={faPen} />
            </button>
          </li>
        ))}
    </ul>
  );
}

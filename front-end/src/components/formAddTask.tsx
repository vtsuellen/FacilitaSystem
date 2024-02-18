import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from './input';
import { Dispatch, SetStateAction } from 'react';

export default function FormAddTask({
  addTask,
  valueInput,
  newValueInput,
  disabledButton,
}: {
  addTask: (event: React.FormEvent<HTMLFormElement>) => void;
  valueInput: string;
  newValueInput: Dispatch<SetStateAction<string>>;
  disabledButton: boolean;
}) {
  return (
    <form onSubmit={addTask} className='flex items-center h-10 justify-between'>
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
  );
}

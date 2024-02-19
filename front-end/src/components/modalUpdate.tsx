import UpdateTaskForm from '@/components/updateTask';
import { IModal } from '@/types/tasks';

export default function ModalUpdate({
  tasks,
  newTasks,
  selectedTask,
  setSelectedTask,
}: IModal) {
  return (
    <>
      {selectedTask && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='w-80 rounded-lg shadow-md'>
            <UpdateTaskForm
              task={selectedTask}
              onUpdate={(updatedTask) => {
                // Atualize a lista de tarefas após a atualização bem-sucedida
                const updatedTasks = tasks.map((task) =>
                  task.id === updatedTask.id ? updatedTask : task
                );
                newTasks(updatedTasks);
                setSelectedTask(null);
              }}
              setSelectedTask={setSelectedTask}
            />
          </div>
        </div>
      )}
    </>
  );
}

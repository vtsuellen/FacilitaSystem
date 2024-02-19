import { useState } from "react";
import Api from "../../Api";

export default function statusTask({taskId} : {taskId: Number}) {
  const [status, setStatus] = useState<boolean>(false);

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newStatus = event.target.checked;
    setStatus(newStatus);
    statusTask(newStatus);
  };


  const statusTask = (newStatus: boolean) => {
    Api.put(`/tasks/${taskId}`, { status })
      .then((response) => {
        setStatus(response.data.status);
      })
      .catch((error) => {
        console.error('Erro ao atualizar a tarefa:', error);
      });
  };

  return (
    <div>
      
    </div>

  );
}
export type ITask = {
  id: number,
  title: string,
  status: boolean,
  priority: string
}

export type ITasks = ITask[]


export type IModal = {
  tasks: ITasks,
  newTasks: (tasks: ITasks) => void,
  selectedTask: ITask | null,
  setSelectedTask: (task: ITask| null) => void
}
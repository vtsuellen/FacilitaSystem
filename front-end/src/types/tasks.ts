export type ITasks = {
  id: Number,
  title: String,
  status: Boolean,
  priority: String
}[]

export type IModal = {
  tasks: ITasks,
  newTasks: (tasks: ITasks) => void,
  selectedTaskId: Number | null,
  setSelectedTaskId: (id: Number | null) => void
}
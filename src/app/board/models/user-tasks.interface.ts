import { Task } from './task.interface';

export interface UserTasks {
  todo: Task[];
  inProgress: Task[];
  done: Task[];
}

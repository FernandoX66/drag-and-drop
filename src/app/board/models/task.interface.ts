type status = 'todo' | 'inProgress' | 'done';

export interface Task {
  title: string;
  description: string;
  status: status;
}

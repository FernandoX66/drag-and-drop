type status = 'todo' | 'inProgress' | 'done';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: status;
  tag: string;
}

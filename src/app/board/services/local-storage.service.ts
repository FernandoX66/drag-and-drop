import { Injectable } from '@angular/core';
import { Task } from '../models/task.interface';

@Injectable()
export class LocalStorageService {
  private localStorage: Storage = localStorage;

  constructor() {}

  getTasks(): Array<Task> {
    return JSON.parse(this.localStorage.getItem('tasks') || '[]');
  }

  setTasks(tasks: Array<Task>): void {
    this.localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

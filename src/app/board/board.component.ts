import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Task } from './models/task.interface';
import { UserTasks } from './models/user-tasks.interface';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  // tasks: Task[] = [
  //   {
  //     title: 'Create a new project',
  //     description: 'Create a new project for the client.',
  //     status: 'todo',
  //   },
  //   {
  //     title: 'Build a new website',
  //     description: 'Build a new website for the client.',
  //     status: 'todo',
  //   },
  //   {
  //     title: 'Do the homework',
  //     description: 'The homework is not done, I have to do it.',
  //     status: 'inProgress',
  //   },
  //   {
  //     title: 'Do the shopping',
  //     description: 'The shopping is not done, I have to do it.',
  //     status: 'inProgress',
  //   },

  //   {
  //     title: 'Do the dishes',
  //     description: 'The dishes are not done, I have to do it.',
  //     status: 'done',
  //   },
  // ];

  tasks: Array<Task> = [];
  userTasks: UserTasks = {
    todo: [],
    inProgress: [],
    done: [],
  };

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.tasks = this.localStorageService.getTasks();
    this.tasks.forEach((task) => {
      this.userTasks[task.status].push(task);
    });
  }

  handleDrop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      console.log(event);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      event.container.data[event.currentIndex].status = event.container.id;
    }
    this.localStorageService.setTasks([
      ...this.userTasks.todo,
      ...this.userTasks.inProgress,
      ...this.userTasks.done,
    ]);
  }
}

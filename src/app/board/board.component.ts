import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskDialogComponent } from './components/create-task-dialog/create-task-dialog.component';
import { Task } from './models/task.interface';
import { UserTasks } from './models/user-tasks.interface';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  tasks: Array<Task> = [];
  userTasks: UserTasks = {
    todo: [],
    inProgress: [],
    blocked: [],
    done: [],
  };

  constructor(
    private localStorageService: LocalStorageService,
    private matDialog: MatDialog
  ) {}

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
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      event.container.data[event.currentIndex].status = event.container.id;
    }
    this.updateTasksInLocalStorage();
  }

  createTask(): void {
    const dialogRef = this.matDialog.open(CreateTaskDialogComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const task: Task = {
          id: Date.now(),
          title: result.title,
          description: result.description,
          status: 'todo',
          tag: result.tag,
        };
        this.userTasks.todo.push(task);
        this.updateTasksInLocalStorage();
      }
    });
  }

  updateTasksInLocalStorage(): void {
    this.localStorageService.setTasks([
      ...this.userTasks.todo,
      ...this.userTasks.inProgress,
      ...this.userTasks.blocked,
      ...this.userTasks.done,
    ]);
  }
}

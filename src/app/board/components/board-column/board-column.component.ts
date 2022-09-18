import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.scss'],
})
export class BoardColumnComponent {
  @Input() columnTitle: string;
  @Input() tasks: Array<Task> = [];
  @Output() onTasksChange: EventEmitter<null> = new EventEmitter<null>();

  constructor() {}

  onTaskEdit(): void {
    this.onTasksChange.emit(null);
  }

  onTaskDelete(id: number): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(index, 1);
    this.onTasksChange.emit(null);
  }
}

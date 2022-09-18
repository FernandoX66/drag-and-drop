import { Component, Input } from '@angular/core';

import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.scss'],
})
export class BoardColumnComponent {
  @Input() columnTitle: string;
  @Input() tasks: Array<Task> = [];

  constructor() {}
}

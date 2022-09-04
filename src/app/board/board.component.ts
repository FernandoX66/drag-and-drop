import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  toDoTasks = [
    {
      title: 'Create a new project',
      description: 'Create a new project for the client.',
    },
    {
      title: 'Build a new website',
      description: 'Build a new website for the client.',
    },
  ];
  inProgressTasks = [
    {
      title: 'Do the homework',
      description: 'The homework is not done, I have to do it.',
    },
    {
      title: 'Do the shopping',
      description: 'The shopping is not done, I have to do it.',
    },
  ];
  doneTasks = [
    {
      title: 'Do the dishes',
      description: 'The dishes are not done, I have to do it.',
    },
  ];

  constructor() {}

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
    }
  }
}

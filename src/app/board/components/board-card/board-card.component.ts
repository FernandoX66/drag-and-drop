import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss'],
})
export class BoardCardComponent {
  @Input() task: any;
  tags: any[] = [
    { label: 'Home', value: 'home', theme: 'orange' },
    { label: 'Work', value: 'work', theme: 'blue' },
    { label: 'University', value: 'university', theme: 'green' },
    { label: 'Personal', value: 'personal', theme: 'red' },
    { label: 'Shopping', value: 'shopping', theme: 'yellow' },
    { label: 'Travel', value: 'travel', theme: 'lightblue' },
    { label: 'Others', value: 'others', theme: 'gray' },
  ];

  constructor() {}

  getTag(): any {
    return this.tags.find((tag) => tag.value === this.task.tag);
  }
}

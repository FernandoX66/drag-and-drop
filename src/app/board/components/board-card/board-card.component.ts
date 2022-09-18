import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../../models/tag.interface';

import { Task } from '../../models/task.interface';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss'],
})
export class BoardCardComponent implements OnInit {
  @Input() task: Task;
  tags: Tag[] = [];

  constructor(private tagsService: TagsService) {}

  ngOnInit(): void {
    this.tags = this.tagsService.tags;
  }

  getTag(): Tag | undefined {
    return this.tags.find((tag) => tag.value === this.task.tag);
  }
}

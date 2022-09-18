import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tag } from '../../models/tag.interface';

import { Task } from '../../models/task.interface';
import { TagsService } from '../../services/tags.service';
import { CreateTaskDialogComponent } from '../create-task-dialog/create-task-dialog.component';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss'],
})
export class BoardCardComponent implements OnInit {
  @Input() task: Task;
  @Output() onTaskEdit: EventEmitter<null> = new EventEmitter<null>();
  @Output() onTaskDelete: EventEmitter<number> = new EventEmitter<number>();
  tags: Tag[] = [];

  constructor(private dialog: MatDialog, private tagsService: TagsService) {}

  ngOnInit(): void {
    this.tags = this.tagsService.tags;
  }

  getTag(): Tag | undefined {
    return this.tags.find((tag) => tag.value === this.task.tag);
  }

  editTask(): void {
    const matDialogRef = this.dialog.open(CreateTaskDialogComponent, {
      width: '500px',
      data: {
        title: this.task.title,
        description: this.task.description,
        tag: this.task.tag,
      },
    });

    matDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (!result.delete) {
          this.task.title = result.title;
          this.task.description = result.description;
          this.task.tag = result.tag;
          this.onTaskEdit.emit(null);
        } else {
          this.onTaskDelete.emit(this.task.id);
        }
      }
    });
  }
}

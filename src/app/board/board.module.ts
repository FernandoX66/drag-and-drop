import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardColumnComponent } from './components/board-column/board-column.component';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LocalStorageService } from './services/local-storage.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateTaskDialogComponent } from './components/create-task-dialog/create-task-dialog.component';
import { TagsService } from './services/tags.service';

@NgModule({
  declarations: [
    BoardComponent,
    BoardColumnComponent,
    BoardCardComponent,
    CreateTaskDialogComponent,
  ],
  imports: [CommonModule, DragDropModule, MatDialogModule, ReactiveFormsModule],
  exports: [BoardComponent],
  providers: [LocalStorageService, TagsService],
})
export class BoardModule {}

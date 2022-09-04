import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardColumnComponent } from './components/board-column/board-column.component';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [BoardComponent, BoardColumnComponent, BoardCardComponent],
  imports: [CommonModule, DragDropModule],
  exports: [BoardComponent],
  providers: [LocalStorageService],
})
export class BoardModule {}

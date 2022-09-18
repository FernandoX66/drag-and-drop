import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DIALOG_DATA } from '@angular/cdk/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent {
  constructor(
    @Inject(DIALOG_DATA)
    public data: {
      title: string;
      message: string;
      confirmButtonText?: string;
      cancelButtonText?: string;
    }
  ) {}
}

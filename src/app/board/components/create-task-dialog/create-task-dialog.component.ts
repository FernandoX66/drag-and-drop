import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.scss'],
})
export class CreateTaskDialogComponent {
  form: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<CreateTaskDialogComponent>,
    private fb: UntypedFormBuilder
  ) {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  createTak(): void {
    this.matDialogRef.close({ ...this.form.value });
  }
}

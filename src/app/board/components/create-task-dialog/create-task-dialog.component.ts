import { Component } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.scss'],
})
export class CreateTaskDialogComponent {
  form: FormGroup;
  tags: any[] = [
    { label: 'Home', value: 'home', theme: 'orange' },
    { label: 'Work', value: 'work', theme: 'blue' },
    { label: 'University', value: 'university', theme: 'green' },
    { label: 'Personal', value: 'personal', theme: 'red' },
    { label: 'Shopping', value: 'shopping', theme: 'yellow' },
    { label: 'Travel', value: 'travel', theme: 'lightblue' },
    { label: 'Others', value: 'others', theme: 'gray' },
  ];

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
      tag: ['home', Validators.required],
    });
  }

  getControl(controlName: string): AbstractControl {
    return this.form.get(controlName) as AbstractControl;
  }

  hasControlError(controlName: string): boolean {
    const control = this.getControl(controlName);
    if (control.hasError('required') && (control.dirty || control.touched)) {
      return true;
    }
    return false;
  }

  createTak(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.matDialogRef.close({ ...this.form.value });
    }
  }

  getSelectedTagTheme(): string {
    const tag = this.getControl('tag').value;
    return this.tags.find((t) => t.value === tag).theme;
  }
}

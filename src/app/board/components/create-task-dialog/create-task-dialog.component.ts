import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { Tag } from '../../models/tag.interface';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.scss'],
})
export class CreateTaskDialogComponent implements OnInit {
  form: FormGroup;
  tags: Tag[] = [];
  isEditing = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; description: string; tag: string },
    private dialog: MatDialog,
    private matDialogRef: MatDialogRef<CreateTaskDialogComponent>,
    private fb: UntypedFormBuilder,
    private tagsService: TagsService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.tags = this.tagsService.tags;
    if (this.data) this.isEditing = true;
  }

  buildForm(): void {
    this.form = this.fb.group({
      title: [
        this.data && this.data.title ? this.data.title : '',
        Validators.required,
      ],
      description: [
        this.data && this.data.description ? this.data.description : '',
        Validators.required,
      ],
      tag: [
        this.data && this.data.tag ? this.data.tag : 'home',
        Validators.required,
      ],
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

  deleteTask(): void {
    const matDialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '480px',
      data: {
        title: 'Delete task',
        message: `Are you sure you want to delete the task ${this.data.title}?`,
        confirmButtonText: 'Delete',
      },
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result) this.matDialogRef.close({ ...this.form.value, delete: true });
    });
  }

  getSelectedTagTheme(): string | undefined {
    const tag = this.getControl('tag').value;
    return this.tags.find((t) => t.value === tag)?.theme;
  }
}

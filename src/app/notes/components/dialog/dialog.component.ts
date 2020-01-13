import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[]) {}

  email = new FormControl ('', [Validators.email, Validators.required]);

  onDelete(item: string) {
    console.log(item);
    this.data = this.data.filter(element => element !== item);
  }

  onAdd() {
    if (this.email.valid) {
        this.data.push(this.email.value);
    }
  }

  onClose() {
    this.dialogRef.close(this.data);
  }


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NotesService } from '../../notes.service';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { Notes } from '../../interfaces/notes.interface';

@Component({
  selector: 'app-notes-handler',
  templateUrl: './notes-handler.component.html',
  styleUrls: ['./notes-handler.component.scss']
})
export class NotesHandlerComponent implements OnInit {
  noteForm: FormGroup;
  onEdit: boolean;

  Note$: Observable<Notes>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private notesService: NotesService,
    public dialog: MatDialog,
  ) {
    this.route.paramMap
    .pipe(
      map(params => params.get('id')),
    ).subscribe( id => this.onNote(id) );
  }

  onNote(id: string) {
    if (id !== '0') {
      this.onEdit = false;
      this.Note$ = this.notesService.getNote(id);
    } else {
      this.onEdit = true;
      if (!!this.noteForm) {
        this.noteForm.reset();
        this.noteForm.patchValue({
          id: '0',
          isPublic: false,
          sharedWith: []
        });
      }
    }
  }

  isPublicToogle() {
    if (this.noteForm.get('id').value !== '0') {
      this.notesService.updateIsPublic(this.noteForm.get('id').value, this.noteForm.get('isPublic').value);
    }
  }

  goEdit(id) {
    this.onEdit = true;
    this.notesService.getNote(id)
    .subscribe(
      note => {
        this.noteForm.setValue({
          id: note.id,
          name: note.name,
          content: note.content,
          isPublic: note.isPublic,
          sharedWith: note.sharedWith
        });
      }
    );
  }

  onSubmit() {
    if (this.noteForm.valid && this.noteForm.get('id').value === '0') {
      this.notesService.createNote(this.noteForm.value)
        .then((data) => this.router.navigate(['app/note', data.id]));
    } else if (this.noteForm.valid) {
      this.notesService.updateNote(this.noteForm.value)
        .then(() => this.onNote(this.noteForm.get('id').value));
    }
  }

  openDialog() {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '270px',
        data: this.noteForm.get('sharedWith').value
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (result) {
          this.noteForm.patchValue({
            sharedWith: result
          });
        }
      });
  }

  ngOnInit() {
    this.noteForm = this.fb.group({
      id: ['0'],
      name: ['', Validators.minLength(5)],
      content: ['', Validators.minLength(15)],
      isPublic: [false, ],
      sharedWith: [[]]
    });
  }
}

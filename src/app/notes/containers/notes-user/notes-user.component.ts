import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../notes.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Notes } from '../../interfaces/notes.interface';

@Component({
  selector: 'app-notes-user',
  templateUrl: './notes-user.component.html',
  styleUrls: ['./notes-user.component.scss']
})
export class NotesUserComponent implements OnInit {

  userNotes$: Observable<Notes[]>;

  constructor(
    private notesService: NotesService,
    private router: Router
  ) { }

  onNote(id: string) {
    this.router.navigate(['app/note', id]);
  }

  ngOnInit() {
    this.userNotes$ = this.notesService.getUserNotes();
  }
}

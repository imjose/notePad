import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../notes.service';
import { Observable } from 'rxjs';

import { Notes } from '../../interfaces/notes.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-shared',
  templateUrl: './notes-shared.component.html',
  styleUrls: ['./notes-shared.component.scss']
})
export class NotesSharedComponent implements OnInit {

  sharedNotes$: Observable<Notes[]>;

  constructor(
    private notesService: NotesService,
    private router: Router
  ) { }

  onNote(id: string) {
    this.router.navigate(['app/note', id]);
  }

  ngOnInit() {
    this.sharedNotes$ = this.notesService.getSharedNotes();
  }

}

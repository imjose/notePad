import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../notes.service';
import { Observable } from 'rxjs';

import { Notes } from '../../interfaces/notes.interface';

@Component({
  selector: 'app-notes-shared',
  templateUrl: './notes-shared.component.html',
  styleUrls: ['./notes-shared.component.scss']
})
export class NotesSharedComponent implements OnInit {

  sharedNotes$: Observable<Notes[]>;

  constructor(
    private notesService: NotesService,
  ) { }

  ngOnInit() {
    this.sharedNotes$ = this.notesService.getSharedNotes();
  }

}

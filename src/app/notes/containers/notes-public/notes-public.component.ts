import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../notes.service';
import { Observable } from 'rxjs';

import { Notes } from '../../interfaces/notes.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-public',
  templateUrl: './notes-public.component.html',
  styleUrls: ['./notes-public.component.scss']
})
export class NotesPublicComponent implements OnInit {

  publicNotes$: Observable<Notes[]>;

  constructor(
    private notesService: NotesService,
    private router: Router
  ) { }

  onNote(id: string) {
    this.router.navigate(['app/note', id]);
  }

  ngOnInit() {
    this.publicNotes$ = this.notesService.getPublicNotes();
  }
}

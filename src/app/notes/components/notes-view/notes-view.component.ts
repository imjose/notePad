import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Notes } from '../../interfaces/notes.interface';

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.scss']
})
export class NotesViewComponent implements OnInit {
  @Input() notes: Notes[];
  @Input() privateNotes: boolean;
  @Output() selectedNote = new EventEmitter<number>();

  constructor() { }

  onAdd() {
    console.log('We are dispatching a new note, please confirm of recieved..');
    this.selectedNote.emit(0);
  }

  ngOnInit() {
  }

}

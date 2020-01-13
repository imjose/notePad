import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notes } from '../../interfaces/notes.interface';

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.scss']
})
export class NotesViewComponent implements OnInit {
  @Input() notes: Notes[];
  @Input() privateNotes: boolean;
  @Output() selectedNote = new EventEmitter<string>();

  constructor(
  ) { }

  onAdd() {
    this.selectedNote.emit('0');
  }

  onClick(note) {
    this.selectedNote.emit(note.id);
  }

  ngOnInit() {
  }

}

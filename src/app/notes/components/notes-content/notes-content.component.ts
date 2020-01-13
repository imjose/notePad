import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Notes } from '../../interfaces/notes.interface';

@Component({
  selector: 'app-notes-content',
  templateUrl: './notes-content.component.html',
  styleUrls: ['./notes-content.component.scss']
})
export class NotesContentComponent implements OnInit {
  @Input() note: Notes;
  @Output() toEdit = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
  ) { }

  onNote(id) {
    this.toEdit.emit(id);
  }

  ngOnInit() { }
}

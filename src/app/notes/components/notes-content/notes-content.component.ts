import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notes-content',
  templateUrl: './notes-content.component.html',
  styleUrls: ['./notes-content.component.scss']
})
export class NotesContentComponent implements OnInit {
  noteForm: FormGroup;

  @Input() onForm;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() { }
}

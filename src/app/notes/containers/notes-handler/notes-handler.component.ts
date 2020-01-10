import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-notes-handler',
  templateUrl: './notes-handler.component.html',
  styleUrls: ['./notes-handler.component.scss']
})
export class NotesHandlerComponent implements OnInit {
  noteForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    // this.route.paramMap.pipe(
    //   map(params => +params.get('id')),
    //   switchMap(id => )
    // );

    // this.route.paramMap.subscribe(
    //   params => this.id = +params.get('id')
    // );
  }

  onSubmit() {
    console.log(this.noteForm.value);
  }

  ngOnInit() {
    this.noteForm = this.fb.group({
      name: ['', Validators.required],
      content: ['', Validators.minLength(15)],
      isPublic: [false, ],
      id: []
    });
  }
}

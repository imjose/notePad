import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesUserComponent } from './notes-user.component';

describe('NotesUserComponent', () => {
  let component: NotesUserComponent;
  let fixture: ComponentFixture<NotesUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

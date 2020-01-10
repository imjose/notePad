import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesHandlerComponent } from './notes-handler.component';

describe('NotesHandlerComponent', () => {
  let component: NotesHandlerComponent;
  let fixture: ComponentFixture<NotesHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

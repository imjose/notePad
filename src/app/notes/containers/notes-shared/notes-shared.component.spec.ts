import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesSharedComponent } from './notes-shared.component';

describe('NotesSharedComponent', () => {
  let component: NotesSharedComponent;
  let fixture: ComponentFixture<NotesSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

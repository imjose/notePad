import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { filter, map } from 'rxjs/operators';

import { Notes } from './interfaces/notes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notesCollection: AngularFirestoreCollection<Notes>;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
    ) { this.notesCollection = this.afs.collection<Notes>('notes',
    ref => ref.orderBy('modifiedDate', 'desc'));
  }

  // userUID: string = this.afAuth.auth.currentUser.uid;

  getUser() {
    return this.afAuth.auth.currentUser;
  }

  // getSpecificNote() {

  // }

  getUserNotes(): Observable<Notes[]> {
    return this.notesCollection.valueChanges()
    .pipe(
      filter(data =>
        data.every(note =>
          note.ownerUID === 'KkKL9QA8mdeUJSHJ6edfPZRSSrZ2'
        )
      ),
    );
  }

  getPublicNotes() {
    return this.notesCollection.valueChanges().pipe(
      filter(data =>
        data.every(note =>
          note.ownerUID !== 'KkKL9QA8mdeUJSHJ6edfPZRSSrZ2'
          && note.isPublic === true
        )
      ),
    );
  }

  getSharedNotes() {
    return this.notesCollection.valueChanges().pipe(
      filter(data =>
        data.every(note =>
          note.sharedWith.every(uid =>
            uid === 'KkKL9QA8mdeUJSHJ6edfPZRSSrZ2'
          )
        )
      ),
    );
  }
}

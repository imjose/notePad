import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

import { Notes } from './interfaces/notes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notesCollection: AngularFirestoreCollection<Notes>;
  userUID: string;
  userEmail: string;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.notesCollection = this.afs.collection<Notes>('notes', ref =>
      ref.orderBy('modifiedDate', 'desc'));
    this.afAuth.user.subscribe(user => {
      if (user) {
        this.userUID = user.uid;
        this.userEmail = user.email;
      } else {
        this.userUID = null;
        this.userEmail = null;
      }
    });
  }

  getNote(id: string): Observable<Notes> {
    return this.afs
      .doc<Notes>(`notes/${id}`)
      .valueChanges()
      .pipe(
        map(note => {
          if (note.ownerUID === this.userUID) {
            const canEdit = true;
            return { canEdit, id, ...note };
          } else {
            const canEdit = false;
            return { canEdit, id, ...note };
          }
        })
      );
  }

  createNote(data) {
    const note: Notes = {
      name: data.name,
      content: data.content,
      ownerUID: this.userUID,
      modifiedDate: Date.now(),
      isPublic: data.isPublic,
      sharedWith: data.sharedWith
    };
    return this.notesCollection.add(note);
  }

  updateIsPublic(id: string, data: boolean) {
    const isPublic = !data;
    return this.afs.doc<Notes>(`notes/${id}`).update({ isPublic });
  }

  updateNote(data) {
    const note = {
      name: data.name,
      content: data.content,
      modifiedDate: Date.now(),
      isPublic: data.isPublic,
      sharedWith: data.sharedWith
    };
    return this.afs.doc<Notes>(`notes/${data.id}`).update(note);
  }

  getUserNotes(): Observable<Notes[]> {
    return this.notesCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Notes;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      ),
      map(data => data.filter(note => note.ownerUID === this.userUID))
    );
  }

  getPublicNotes(): Observable<Notes[]> {
    return this.notesCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Notes;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      ),
      map(data =>
        data.filter(
          note => note.ownerUID !== this.userUID && note.isPublic === true
        )
      )
    );
  }

  getSharedNotes(): Observable<Notes[]> {
    return this.notesCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Notes;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      ),
      map(data =>
        data.filter(note => note.sharedWith.indexOf(this.userEmail) >= 0)
      )
    );
  }
}

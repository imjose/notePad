import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  getDisplayName() {
    return this.afAuth.auth.currentUser.displayName;
  }

  getCurrentUser(): Observable<firebase.User> {
    return this.afAuth.user;
  }

  signIn(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      this.router.navigate(['/home']);
    });
  }

  signUp(email: string, password: string, firstName: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log(`The user was created successfully.`);
      this.afAuth.auth.currentUser
        .updateProfile({displayName: firstName});
      this.router.navigate(['/home']);
    });
  }

  logOut() {
    this.afAuth.auth.signOut()
    .then(() => {
      console.log('user was logged out');
      this.router.navigate(['/login']);
    });
  }
}

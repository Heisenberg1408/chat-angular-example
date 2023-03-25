import { Injectable } from '@angular/core';
import { switchMap, Observable, from } from 'rxjs';
import { Auth, authState, createUserWithEmailAndPassword, updateProfile, User } from '@angular/fire/auth';
import { SignupCredentials } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly isLoggedIn$!: Observable<User | null>;

  constructor(
    private readonly _auth: Auth
  ) {
    this.isLoggedIn$ = authState(this._auth);
  }

  signIn(credentials: Object) {
    // this.authState.next(credentials)
  }

  signUp({email, password, displayName}: SignupCredentials) {
    return from(createUserWithEmailAndPassword(this._auth, email, password)).pipe(
      switchMap(({user}) => updateProfile(user, { displayName }))
    );
  }
}

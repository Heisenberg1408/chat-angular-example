import { Injectable } from '@angular/core';
import { switchMap, Observable, from } from 'rxjs';
import { Auth, authState, createUserWithEmailAndPassword, updateProfile, User, signInWithEmailAndPassword } from '@angular/fire/auth';
import { SigninCredentials, SignupCredentials } from './auth';

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

  public signIn({email, password}: SigninCredentials) {
    return from(signInWithEmailAndPassword(this._auth, email, password));
  }

  public signUp({email, password, displayName}: SignupCredentials) {
    return from(createUserWithEmailAndPassword(this._auth, email, password)).pipe(
      switchMap(({user}) => updateProfile(user, { displayName }))
    );
  }

  public signOut() {
    return from(this._auth.signOut());
  }
}

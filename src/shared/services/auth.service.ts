import { Injectable } from '@angular/core';
import { switchMap, Observable, from, forkJoin, map } from 'rxjs';
import { Auth, authState, createUserWithEmailAndPassword, updateProfile, User, signInWithEmailAndPassword } from '@angular/fire/auth';
import { SigninCredentials, SignupCredentials } from '@chat/shared';
import { HttpClient } from '@angular/common/http';
import environment from '@chat/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly isLoggedIn$!: Observable<User | null>;

  constructor(
    private readonly _http: HttpClient,
    private readonly _auth: Auth
  ) {
    this.isLoggedIn$ = authState(this._auth);
  }

  public signIn({email, password}: SigninCredentials) {
    return from(signInWithEmailAndPassword(this._auth, email, password));
  }

  public signUp({email, password, displayName}: SignupCredentials) {
    return from(createUserWithEmailAndPassword(this._auth, email, password)).pipe(
      switchMap(({user}) => forkJoin([
        updateProfile(user, { displayName }),
        this._http.post(`${environment.apiURL}/createStreamUser`, {user: {...user, displayName}})
      ]))
    );
  }

  public getUserToken() {
    return this._http.post<{token: string}>(`${environment.apiURL}/createStreamToken`, { user: this.currentUser }).pipe(
      map(response => response.token)
    );
  }

  public signOut() {
    return from(this._auth.signOut());
  }

  public get currentUser() {
    return this._auth.currentUser!;
  }
}

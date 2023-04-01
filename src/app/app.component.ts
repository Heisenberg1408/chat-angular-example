import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './features/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(
    private readonly _router: Router,
    public auth: AuthService
  ) {}

  public signOut() {
    this.auth.signOut().subscribe({
      next: () => this._router.navigate(['signin'])
    });
  }
}

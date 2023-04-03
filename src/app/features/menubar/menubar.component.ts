import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '@chat/shared';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
    MenubarModule,
    ButtonModule
  ],
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenubarComponent {

  constructor(
    private readonly _router: Router,
    public readonly auth: AuthService
  ) {}

  public signOut() {
    this.auth.signOut().subscribe({
      next: () => this._router.navigate(['signin'])
    });
  }
}

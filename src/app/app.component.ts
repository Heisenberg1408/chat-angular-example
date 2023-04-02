import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { authRouteAnimation } from '@chat/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    authRouteAnimation
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public getAnimationState(outlet: RouterOutlet) {
    const state = outlet.activatedRouteData['animationState'];
    return state;
  }
}

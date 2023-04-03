import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard'

const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'signin', loadComponent: () => import('./features/auth/signin/signin.component').then((c) => c.SigninComponent),
    ...canActivate(() => redirectLoggedInTo('chat')), resolve: { animationState: () => 'signInPage' }  },
  { path: 'signup', loadComponent: () => import('./features/auth/signup/signup.component').then((c) => c.SignupComponent),
    resolve: { animationState: () => 'signUpPage' } },
  { path: 'chat', ...canActivate(() => redirectUnauthorizedTo('signin')),
    loadComponent: () => import('./features/chat/chat-page/chat-page.component').then(c => c.ChatPageComponent),
    resolve: { animationState: () => 'chatPage' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

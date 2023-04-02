import { NgModule } from "@angular/core";
import { AuthorizationFormComponent, AuthorizationFormContentDirective, AuthorizationFormFooterDirective } from "./authorization-form.component";

@NgModule({
  imports: [
    AuthorizationFormComponent,
    AuthorizationFormContentDirective,
    AuthorizationFormFooterDirective
  ],
  exports: [
    AuthorizationFormComponent,
    AuthorizationFormContentDirective,
    AuthorizationFormFooterDirective
  ]
})
export class AuthorizationFormModule {}

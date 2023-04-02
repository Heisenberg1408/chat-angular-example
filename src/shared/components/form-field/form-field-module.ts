import { NgModule } from "@angular/core";
import { FormFieldComponent, FormFieldFooterDirective } from "./form-field.component";

@NgModule({
  imports: [
    FormFieldComponent,
    FormFieldFooterDirective
  ],
  exports: [
    FormFieldComponent,
    FormFieldFooterDirective
  ]
})
export class FormFieldModule {}

import { AfterContentInit, ChangeDetectionStrategy, Component,
  ContentChild, Directive, ElementRef, Input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { InputText } from 'primeng/inputtext';

@Directive({
  selector: '[formFieldFooter]',
  standalone: true,
})
export class FormFieldFooterDirective {

  constructor(
    public readonly templateRef: TemplateRef<any>
  ) {}
}

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent {

  @Input() public label = '';

  @ContentChild(InputText, { read: ElementRef<HTMLInputElement>}) public inputField!: ElementRef<HTMLInputElement>;
  @ContentChild(FormFieldFooterDirective, { read: FormFieldFooterDirective}) public footer!: FormFieldFooterDirective;
}

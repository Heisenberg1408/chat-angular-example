import { ChangeDetectionStrategy, Component, ContentChild, Directive, Input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Directive({
  selector: '[authFormContent]',
  standalone: true,
})
export class AuthorizationFormContentDirective {

  constructor(
    public readonly templateRef: TemplateRef<any>
  ) {}
}

@Directive({
  selector: '[authFormFooter]',
  standalone: true,
})
export class AuthorizationFormFooterDirective {

  constructor(
    public readonly templateRef: TemplateRef<any>
  ) {}
}

@Component({
  selector: 'app-authorization-form',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorizationFormComponent {

  @Input()
  public title: string = '';

  @ContentChild(AuthorizationFormContentDirective, { read: AuthorizationFormContentDirective })
  public content!: AuthorizationFormContentDirective;

  @ContentChild(AuthorizationFormFooterDirective, { read: AuthorizationFormFooterDirective })
  public footer!: AuthorizationFormFooterDirective;
}

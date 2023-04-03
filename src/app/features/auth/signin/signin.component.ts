import { Router, RouterLink } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';
import { FormFieldModule, AuthorizationFormModule, SigninCredentials, AuthService } from '@chat/shared';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    ReactiveFormsModule,
    AuthorizationFormModule,
    FormFieldModule,
    InputTextModule,
    ButtonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private readonly _router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.minLength(6)]),
    });
  }

  signIn() {
    this.auth.signIn(this.form.value as SigninCredentials).subscribe({
      next: (u) => this._router.navigate(['chat'])
    });
  }
}

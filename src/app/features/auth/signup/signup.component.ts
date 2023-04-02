import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorizationFormModule, FormFieldModule, SignupCredentials } from '@chat/shared';
import { NgIf } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    AuthorizationFormModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    FormFieldModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private readonly _router: Router,
    private readonly _auth: AuthService,
    private readonly _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      displayName: new FormControl('', [Validators.minLength(3)]),
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.minLength(6)]),
    })
  }

  signUp() {
    this._auth.signUp(this.form.value as SignupCredentials).subscribe({
      next: () => this._router.navigate(['chat']),
      error: (err) => this._snackBar.open(err.message)
    });
  }

}

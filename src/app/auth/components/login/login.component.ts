import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { selectIsSubmitting } from '../../store/selectors';
import { AuthStateInterface } from '../../types/authState.interface';
import { CommonModule } from '@angular/common';
import { selectValidationErrors } from '../../store/reducers';
import { combineLatest } from 'rxjs';
import { RouterLink } from '@angular/router';
import { backendErrorMessages } from 'src/app/shared/components/backendErrorMessages/backendErrorMessages.component';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'lem-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
    backendErrorMessages,
    ButtonComponent
  ],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private store: Store<{ auth: AuthStateInterface }> // private authService: AuthService
  ) {}

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });

  onSubmit() {
    const request: LoginRequestInterface = {
      user: this.form.getRawValue(),
    };
    this.store.dispatch(authActions.login({ request }));
    // this.authService
    //   .register(request)
    //   .subscribe((res) => console.log('res', res));
  }
}

import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { selectIsSubmitting } from '../../store/selectors';
import { AuthStateInterface } from '../../types/authState.interface';
import { CommonModule } from '@angular/common';
import { selectValidationErrors } from '../../store/reducers';
import { combineLatest } from 'rxjs';
import { RouterLink } from '@angular/router';
import { backendErrorMessages } from 'src/app/shared/components/backendErrorMessages/backendErrorMessages.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'lem-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
    backendErrorMessages,
    ButtonComponent
  ],
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private store: Store<{ auth: AuthStateInterface }> // private authService: AuthService
  ) {}

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });

  onSubmit() {
    console.log(this.form.getRawValue());
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue(),
    };
    this.store.dispatch(authActions.register({ request }));
  }


}

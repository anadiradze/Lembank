import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lem-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class backendErrorMessages implements OnInit {
  @Input() backendErrors: BackendErrorsInterface = {};
  @Input() includeFieldName: boolean = true; // New input to control field name inclusion

  errorMessages: string[] = [];
  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(' ');
      return this.includeFieldName ? `${name} ${messages}` : `${messages}`;
    });
  }
}

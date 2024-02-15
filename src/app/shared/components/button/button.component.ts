import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() buttonClasses!: string | { [klass: string]: any };
  @Input() buttonTxt!: string;
  @Input() isDisabled: boolean = false;
  @Input() type: 'submit' | 'button' | 'reset' = 'button';
  @Input() navigateTo?: string;

  constructor(private router: Router) {}

  navigate() {
    if (this.navigateTo) {
      this.router.navigateByUrl(this.navigateTo);
    }
  }
}

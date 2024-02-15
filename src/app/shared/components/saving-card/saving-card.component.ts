import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saving-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saving-card.component.html',
  styleUrls: ['./saving-card.component.css'],
})
export class SavingCardComponent {
  @Input() cardInfo!: any;
}

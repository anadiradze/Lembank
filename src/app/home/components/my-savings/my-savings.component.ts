import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { TransformClassesPipe } from 'src/app/shared/pipes/transformClasses.pipe';
import { SavingCardComponent } from 'src/app/shared/components/saving-card/saving-card.component';
import { FavoritesComponent } from '../favorites/favorites.component';

@Component({
  selector: 'app-my-savings',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    TransformClassesPipe,
    SavingCardComponent,
    FavoritesComponent,
  ],
  templateUrl: './my-savings.component.html',
  styleUrls: ['./my-savings.component.css'],
})
export class MySavingsComponent {
  cardTitleSavings = 'My Savings';

  cardInfos = [
    {
      logo: '../../../../assets/saving-card/trend.svg',
      title: 'Investment',
      description: '1 months income 70%',
      amount: 2431.23,
      progress: '45%',
    },
    {
      logo: '../../../../assets/saving-card/wallet.svg',
      title: 'Mutual fund',
      description: '4 months income 70%',
      amount: 8431.23,
      progress: '75%',
    },
  ];
}

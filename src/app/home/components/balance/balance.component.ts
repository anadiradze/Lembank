import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { CurrencyCustomFormatPipe } from 'src/app/shared/pipes/currencyCustomFormat.pipe';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [CommonModule, CardComponent,CurrencyCustomFormatPipe],
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent {
  cards = [
    {
      logo: '../../../../assets/card/visa.svg',
      seeMore: '../../../../assets/card/seeMoreWhite.svg',
      amount: 10332.0,
      cardNum: 1141,
      date: new Date(),
      bgColor: '#F86F03',
      color: 'white',
    },
    {
      logo: '../../../../assets/card/mastercard.svg',
      seeMore: '../../../../assets/card/seeMoreBlack.svg',
      amount: 7200.0,
      cardNum: 2381,
      date: new Date(),
      bgColor: 'white',
      color: 'black',
    },
  ];
}

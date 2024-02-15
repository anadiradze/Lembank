import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from 'src/app/shared/components/transaction/transaction.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, TransactionComponent],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent {
  transactions = [
    {
      logo: '../../../../assets/transactions/paypal.svg',
      title: 'PayPal',
      date: new Date('2023-02-14T22:45:00'),
      category: 'Income',
      amount: 1500,
    },
    {
      logo: '../../../../assets/transactions/netflix.svg',
      title: 'Netflix',
      date: new Date('2023-02-12T22:42:00'),
      category: 'Movies',
      amount: -5,
    },
    {
      logo: '../../../../assets/transactions/amazon.svg',
      title: 'Amazon',
      date: new Date('2023-02-10T12:32:00'),
      category: 'Shopping',
      amount: -211,
    },
    {
      logo: '../../../../assets/transactions/fedex.svg',
      title: 'FedEx',
      date: new Date('2023-02-14T22:45:00'),
      category: 'Delivery',
      amount: -211,
    },
  ];
}

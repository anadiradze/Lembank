import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BalanceComponent } from './components/balance/balance.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HeaderComponent } from './components/header/header.component';
import { MySavingsComponent } from './components/my-savings/my-savings.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { CardComponent } from '../shared/components/card/card.component';

@Component({
  selector: 'lem-home',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    BalanceComponent,
    FavoritesComponent,
    HeaderComponent,
    MySavingsComponent,
    TransactionsComponent,
    CardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent {
  cardTitleFavorites = 'Favorites';

  favorites = [
    { img: '../../../../assets/favorites/jack.svg', firstName: 'Jack' },
    { img: '../../../../assets/favorites/anna.svg', firstName: 'Anna' },
    { img: '../../../../assets/favorites/david.svg', firstName: 'David' },
    { img: '../../../../assets/favorites/justin.svg', firstName: 'Justin' },
  ];
  buttons = [
    {
      classes:
        'text-black bg-white border-[1px] border-solid rounded-lg px-28 py-2',
      text: 'Request',
    },
    {
      classes:
        'text-white bg-[#F86F03] border-[1px] border-solid rounded-lg px-24 py-2',
      text: 'Send Money',
    },
  ];
}

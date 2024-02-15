import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  // interface NavItem {
  //   name: string;
  //   link: string;
  //   icon: string;
  //   altText: string;
  // }

  navItems: any[] = [
    {
      name: 'Overview',
      icon: '../../../../assets/sidebar/overview.svg',
      altText: 'overview',
    },
    {
      name: 'Payments',
      icon: '../../../../assets/sidebar/payments.svg',
      altText: 'payments',
    },
    {
      name: 'Exchanges',
      icon: '../../../../assets/sidebar/exchanges.svg',
      altText: 'exchanges',
    },
    {
      name: 'Points',
      icon: '../../../../assets/sidebar/points.svg',
      altText: 'points',
    },
    {
      name: 'Statistics',
      icon: '../../../../assets/sidebar/statistics.svg',
      altText: 'statistics',
    },
  ];
  navSettingItems: any[] = [
    {
      name: 'Settings',
      icon: '../../../../assets/sidebar/settings.svg',
      altText: 'settings',
    },
    {
      name: 'Log Out',
      icon: '../../../../assets/sidebar/logOut.svg',
      altText: 'logOut',
    },
  ];
}

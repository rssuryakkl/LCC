import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  menuItems = [
    { name: 'Dashboard', icon: '🏠' },
    { name: 'Products', icon: '📦' },
    { name: 'Inventory', icon: '🏭' },
    { name: 'Distribution', icon: '🚚' },
    { name: 'Members', icon: '👥' },
    { name: 'Reports', icon: '📊' }
  ];

  activeItem = 'Dashboard';

  selectMenu(item: string): void {
    this.activeItem = item;
  }
}
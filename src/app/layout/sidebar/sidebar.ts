import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  menuItems = [
    { name: 'Dashboard', icon: '🏠', route: '/dashboard' },
    { name: 'Products', icon: '📦', route: '/products' },
    { name: 'Inventory', icon: '🏭', route: '/inventory' },
    { name: 'Distribution', icon: '🚚', route: '/distribution' },
    { name: 'Members', icon: '👥', route: '/members' },
    { name: 'Reports', icon: '📊', route: '/reports' }
  ];
}
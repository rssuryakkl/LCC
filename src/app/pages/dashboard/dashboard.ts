import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../../layout/sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, Sidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  stats = [
    { title: 'Total Products', value: 128, icon: '📦' },
    { title: 'Total Stock', value: 540, icon: '🏭' },
    { title: 'Low Stock Items', value: 12, icon: '⚠️' },
    { title: 'Categories', value: 8, icon: '📊' }
  ];
}
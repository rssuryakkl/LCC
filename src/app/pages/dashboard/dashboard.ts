
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  stats = [
    {
      title: 'Total Stock',
      value: 540,
      icon: '🏭',
      description: 'Units available',
      color: 'blue'
    },
    {
      title: 'Total Products',
      value: 128,
      icon: '📦',
      description: 'Products registered',
      color: 'yellow'
    },
   
    {
      title: 'Low Stock Items',
      value: 12,
      icon: '⚠️',
      description: 'Need attention',
      color: 'red'
    },
    {
      title: 'Categories',
      value: 8,
      icon: '📊',
      description: 'Product categories',
      color: 'green'
    }
  ];

  stockMovement = [
    { day: 'Mon', received: 70, distributed: 35 },
    { day: 'Tue', received: 95, distributed: 55 },
    { day: 'Wed', received: 60, distributed: 45 },
    { day: 'Thu', received: 120, distributed: 70 },
    { day: 'Fri', received: 85, distributed: 50 },
    { day: 'Sat', received: 105, distributed: 65 },
    { day: 'Sun', received: 45, distributed: 25 }
  ];

  lowStockProducts = [
    { name: 'Rice Bag', category: 'Food Supplies', stock: 8, minimum: 20 },
    { name: 'Cooking Oil', category: 'Food Supplies', stock: 5, minimum: 15 },
    { name: 'Blanket', category: 'General Supplies', stock: 3, minimum: 10 },
    { name: 'Drinking Water', category: 'Essentials', stock: 12, minimum: 25 }
  ];

  activities = [
    {
      title: 'Stock Received',
      description: 'New products added to warehouse',
      time: 'Today',
      icon: '📥'
    },
    {
      title: 'Product Updated',
      description: 'Product details were modified',
      time: 'Today',
      icon: '✏️'
    },
    {
      title: 'Stock Distributed',
      description: 'Items dispatched from warehouse',
      time: 'Yesterday',
      icon: '🚚'
    },
    {
      title: 'Low Stock Alert',
      description: 'Some products need restocking',
      time: 'Yesterday',
      icon: '⚠️'
    }
  ];

  getBarHeight(value: number): number {
    return (value / 120) * 100;
  }
}

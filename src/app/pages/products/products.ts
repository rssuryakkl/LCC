import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  location: string;
  image: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  searchText = '';
  selectedUnit = 'All units';
  showForm = false;
  editingId: number | null = null;

  products: Product[] = [
    {
      id: 1,
      name: 'Rice',
      category: 'Food',
      quantity: 200,
      unit: 'KG',
      location: 'Rack A1',
      image: 'https://placehold.co/100x100/f3ead8/66553b?text=Rice'
    },
    {
      id: 2,
      name: 'Blanket',
      category: 'Clothing',
      quantity: 50,
      unit: 'PCS',
      location: 'Rack B1',
      image: 'https://placehold.co/100x100/ece3d8/66553b?text=Blanket'
    },
    {
      id: 3,
      name: 'Cooking Oil',
      category: 'Food',
      quantity: 75,
      unit: 'LTR',
      location: 'Rack A2',
      image: 'https://placehold.co/100x100/e5edcf/53613b?text=Oil'
    }
  ];

  form: Product = this.emptyProduct();

  get filteredProducts(): Product[] {
    return this.products.filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        product.category.toLowerCase().includes(this.searchText.toLowerCase());

      const matchesUnit =
        this.selectedUnit === 'All units' ||
        product.unit === this.selectedUnit;

      return matchesSearch && matchesUnit;
    });
  }

  get units(): string[] {
    return ['All units', ...new Set(this.products.map(p => p.unit))];
  }

  get lowStockCount(): number {
    return this.products.filter(p => p.quantity <= 10).length;
  }

  emptyProduct(): Product {
    return {
      id: 0,
      name: '',
      category: 'Food',
      quantity: 0,
      unit: 'KG',
      location: '',
      image: 'https://placehold.co/100x100/f3ead8/66553b?text=Product'
    };
  }

  openAddForm(): void {
    this.editingId = null;
    this.form = this.emptyProduct();
    this.showForm = true;
  }

  editProduct(product: Product): void {
    this.editingId = product.id;
    this.form = { ...product };
    this.showForm = true;
  }

  saveProduct(): void {
    if (!this.form.name.trim() || this.form.quantity < 0) {
      return;
    }

    if (this.editingId !== null) {
      this.products = this.products.map(product =>
        product.id === this.editingId ? { ...this.form } : product
      );
    } else {
      const newProduct: Product = {
        ...this.form,
        id: Math.max(0, ...this.products.map(p => p.id)) + 1
      };
      this.products = [...this.products, newProduct];
    }

    this.showForm = false;
    this.form = this.emptyProduct();
  }

  deleteProduct(product: Product): void {
    if (confirm(`Delete ${product.name}?`)) {
      this.products = this.products.filter(p => p.id !== product.id);
    }
  }

  closeForm(): void {
    this.showForm = false;
  }
}
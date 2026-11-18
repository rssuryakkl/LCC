import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  _id?: string;
  id?: number | string;
  productId: string;
  name: string;
  quantity: number;
  receivedDate: string;
  sponsorName?: string;
  image?: string;
  location: string;
  updatedBy?: string;
  addedBy?: string;
}

export interface RestockPayload {
  productId: string;
  quantity: number;
  updatedBy: string;
  date?: string;
}

export interface TransferPayload {
  productId: string;
  quantity: number;
  switchedBy: string;
  date?: string;
  location?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private get baseUrl(): string {
    const host = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : 'localhost';
    return `http://${host}:5000/api/products`;
  }

  constructor(private http: HttpClient) {}

  getProducts(search?: string): Observable<{ success: boolean; count: number; products: Product[] }> {
    const url = search ? `${this.baseUrl}?search=${encodeURIComponent(search)}` : this.baseUrl;
    return this.http.get<{ success: boolean; count: number; products: Product[] }>(url);
  }

  getProductById(id: string): Observable<{ success: boolean; product: Product }> {
    return this.http.get<{ success: boolean; product: Product }>(`${this.baseUrl}/${id}`);
  }

  addProduct(product: Partial<Product>): Observable<{ success: boolean; message: string; product: Product }> {
    return this.http.post<{ success: boolean; message: string; product: Product }>(this.baseUrl, product);
  }

  editProduct(id: string, product: Partial<Product>): Observable<{ success: boolean; message: string; product: Product }> {
    return this.http.put<{ success: boolean; message: string; product: Product }>(`${this.baseUrl}/${id}`, product);
  }

  restockProduct(payload: RestockPayload): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/restock`, payload);
  }

  moveToLcc(payload: TransferPayload): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/transfer`, payload);
  }

  getTransfers(): Observable<{ success: boolean; count: number; transfers: any[] }> {
    return this.http.get<{ success: boolean; count: number; transfers: any[] }>(`${this.baseUrl}/transfers`);
  }

  deleteProduct(id: string): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(`${this.baseUrl}/${id}`);
  }
}

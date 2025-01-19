import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private apiUrl = 'http://rest-items.research.cloudonix.io/items';
  private authorizationCode = '';


  constructor(private http: HttpClient) {
    this.authorizationCode = localStorage.getItem('authorizationCode') || '';
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl, { headers: { Authorization: `Bearer ${this.authorizationCode}` } });
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
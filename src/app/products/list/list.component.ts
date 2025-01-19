import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { TableModule } from 'primeng/table';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Product } from '../product';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-list',
  imports: [
    TableModule,
    ButtonModule
  ],
  providers: [
    ProductsService,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  authorizationCode: string = '';
  items: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.productsService.getProducts().subscribe(response => {
      this.items = response;
    });
  }
}

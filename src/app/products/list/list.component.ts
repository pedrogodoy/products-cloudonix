import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { TableModule } from 'primeng/table';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Product } from '../product';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ProductModalComponent } from '../product-modal/product-modal.component';

@Component({
  selector: 'app-list',
  imports: [
    TableModule,
    ButtonModule,
    DynamicDialogModule
  ],
  providers: [
    ProductsService,
    DialogService
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  authorizationCode: string = '';
  items: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {

    this.productsService.getProducts().subscribe(response => {
      this.items = response;
    });
  }

  addProduct() {
    this.dialogService.open(ProductModalComponent, {
      header: 'Adicionar Produto',
      width: '70%',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
      baseZIndex: 10000
    });
  }

  viewProduct(product: Product) {
    console.log('chamouu', product)
    this.dialogService.open(ProductModalComponent, {
      header: 'Adicionar Produto',
      width: '70%',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
      baseZIndex: 10000
    });
  }
}

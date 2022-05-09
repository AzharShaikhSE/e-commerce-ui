import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [];
  constructor(
    private productService: ProductService
  ) {

  }

  async ngOnInit(): Promise<void> {
    this.products = await this.productService.getProducts().toPromise();
    console.log(this.products);
  }

}

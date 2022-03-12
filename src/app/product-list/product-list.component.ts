import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../modules/Product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss', '../../styles/components/button.scss']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [
    {
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens'
    },
    {
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras'
    },
    {
      name: 'Phone Standard',
      price: 299,
      description: ''
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }

  handleClick(product: IProduct): void {
    console.log(product);
  }
}

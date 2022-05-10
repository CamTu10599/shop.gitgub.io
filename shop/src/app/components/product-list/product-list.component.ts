import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products :Product[]=[
    new Product("hoa hồng","200"),
    new Product('hoa lan',"300"),
    new Product("hoa ly","400")
  ]

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../common/product';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute) {
    this.product = new Product('','');

    if(route.snapshot.params['id'])
      this.product.name = route.snapshot.params['id'];
  }

  changeDetail(form: NgForm){
    console.log(form.value);

    this.product.name = form.value.name;
    this.product.name = this.product.name.toUpperCase();

  }

  ngOnInit() {
  }

}


import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from './product.service';
import { IProduct } from './products';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  pageTitle = 'Product Detail: ';
  product!: IProduct;
  sub!: Subscription;
  imageHeight: number = 200;
  imageWidth: number = 200;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `${id}`;
    
    this.sub = this.productService.getProducts().subscribe({
       next: data => {
        this.product = data.filter(product => product.productId === id)[0]; // returns an array i just need the first value
       },
       error: err => console.log(err)
    })
  }

  onBack(): void {
    this.router.navigate(['/products']); // this automatically routes to the specified page
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

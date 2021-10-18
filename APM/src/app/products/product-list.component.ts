import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from './product.service';
import { IProduct } from './products';

@Component({
  templateUrl: './product-list.component.html', // notice this compononet doesnt have a selector that is because it is not needed since it is a full view (full page)
                                                // it is not nested in another component
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductService) {}; // this is just neat syntax the actual thing it does is this -
  /*
    private _productService: ProductService;
    constructor(productService: ProductService) {
      this._productService = productService;
    }
  */

  // angular recommends you write it with the simpler syntax, also the productService parameter is passed in automatically because in the product 
  // service you specified its provideIn property to be root (the whole app);

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageHeight: number = 50;
  showImage: boolean = false;
  errorMessage: string = '';
  sub!: Subscription; // the bang sign or exclamation mark means i wount be assigning the value now, normally you have to in typescript
  
  // by convention private variables are prefixed with _
  private _listFilter: string = '';

  get listFilter(): string { // get is called by javascript when ever this property's value is used
    return this._listFilter;
  }

  set listFilter(value: string) { // set is called by javascript when ever this property's value is changed
    this._listFilter = value;
    console.log("In setter: " + value);

    this.filteredProducts = this.performFilter(value);

  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {

    filterBy = filterBy.toLocaleLowerCase();

    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
    
  }

  onRatingClicked(msg: string): void {
    this.pageTitle = 'Product List ' + msg;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    })
    console.log("in OnInit");
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

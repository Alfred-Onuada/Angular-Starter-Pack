import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageHeight: number = 50;
  showImage: boolean = false;
  
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
  products: IProduct[] = [
    {
      productId: 8,
      productName: 'Saw',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2021',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      starRating: 3.7,
      imageUrl: 'assets/images/saw.png',
    },
    {
      productId: 10,
      productName: 'Video Game Controller',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2020',
      description: 'Standard two-button video game controller',
      price: 35.95,
      starRating: 4.6,
      imageUrl: 'assets/images/xbox-controller.png',
    },
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {

    filterBy = filterBy.toLocaleLowerCase();

    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
    
  }

  ngOnInit(): void {
    this.listFilter = 'cart'; // note I'm not calling _listFilter directly I'm calling listFilter's setter
    console.log("in OnInit");
  }
}

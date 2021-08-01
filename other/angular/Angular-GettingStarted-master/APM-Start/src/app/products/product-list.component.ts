import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { RouterModule } from '@angular/router';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list-component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product List!';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = '';
    sub: Subscription | undefined;

    private _listfilter: string = '';

    get listfilter():string {
      return this._listfilter;
    }

    set listfilter(value: string) {
      this._listfilter = value;
      console.log('In setter: ' + value);
      this.filteredProducts = this.performfilter(value);
      }
    filteredProducts: IProduct[] = [];
    products: IProduct[] = [

    ];

    constructor(private productService: ProductService) {


    }

    performfilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().includes(filterBy));
    }

    toggleImage(): void {
      this.showImage = ! this.showImage;
    };
    ngOnInit(): void {
      
      this.sub = this.productService.getProducts().subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
      });
    }

    ngOnDestroy() {
      this.sub = unsubscribe();
    }

    onRatingClicked(message: string): void {
      this.pageTitle = 'Product List: ' + message;
    }
}
function unsubscribe(): Subscription | undefined {
  throw new Error("Function not implemented.");
}


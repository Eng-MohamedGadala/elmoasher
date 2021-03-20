import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../services/products';
import { Category } from '../services/categorys';
interface City {
  id: number;
  name: string;

}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  productRes: Product[] = [];
   price =0.0 ;
   itemCount=0;
  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get('https://healthyandtasty.net/healthyProject/public/api/v1/get_all_products?token=ay5t9Xh4hmAXSUEBby9j9dSAxjNCtnrFKp6x9YqG43JaXbpHESvHsP9G4vCg&start=0&limit=10')
      .subscribe(res => {
        console.log(res);
        if (res['success']) {
          this.productRes = this.productRes.concat(res['result']);
          console.log(this.productRes);
        }

      }); 
  }
  addItemToCart(product: Product){
      this.price =this.price + product.price;
      this.itemCount ++;
  }
  cities: City[] = [
    {
      id: 1,
      name: 'القاهره',

    },
    {
      id: 2,
      name: 'الاسكندريه',

    },
    {
      id: 3,
      name: 'القاهره الجديده',

    }
  ];

  compareWith(o1: City, o2: City) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  categorys: Category[] = [
    {
      id: "1",
      title: "لبن",
      logo: "assets/traditional-dairy-drink.png",
      color: "offwight"
    }, {
      id: "1",
      title: "عسل",
      logo: "assets/a-jar-of-honey-or-jam.png",
      color: "offred"
    }, {
      id: "1",
      title: "عصير",
      logo: "assets/a-small-bottle-of-juice.png",
      color: "offpurpl"
    }, {
      id: "1",
      title: "ايس كريم",
      logo: "assets/ice-cream-cone-on-a-white-background.png",
      color: "offyellow"
    },


  ];

}

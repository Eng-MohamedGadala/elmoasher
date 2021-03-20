import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CartFooterComponent } from './cart-footer/cart-footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { IonicModule } from '@ionic/angular';

export const component = [
CategoryCardComponent,
CartFooterComponent,
ProductCardComponent
]

@NgModule({
  declarations: [component],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[component]
})
export class ComponentsModule { }

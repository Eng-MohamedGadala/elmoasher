import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/services/products';


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Output() typeChanged = new EventEmitter<string>();
  type = "got";

  emit() {
    this.typeChanged.emit(this.type);
  }
  constructor() { }

  ngOnInit() { }



}

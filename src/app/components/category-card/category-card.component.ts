import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/services/categorys';

@Component({
  selector: 'category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  @Input() category: Category;

  constructor() { }

  ngOnInit() {}

}

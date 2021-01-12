import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Produit } from '../models/produit';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';
import { map, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit {

  @Output() productsFilterName = new EventEmitter<string>();
  @Output() productsFilterPriceInf = new EventEmitter<number>();
  @Output() productsFilterPriceSup = new EventEmitter<number>();

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
  }

  sendNameFilter(searchValue: string): void {
    this.productsFilterName.emit(searchValue);
  }

  sendPriceInfFilter(priceValue: number): void {
    if(priceValue != null)
      this.productsFilterPriceInf.emit(priceValue);
  }

  sendPriceSupFilter(priceValue: number): void {
    if(priceValue != null)
      this.productsFilterPriceSup.emit(priceValue);
  }

}

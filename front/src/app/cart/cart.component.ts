import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit';
import { Observable } from 'rxjs';
import { Store } from "@ngxs/store";
import { DelProduct } from "../../shared/actions/product-action";
import { ProductState } from "../../shared/states/product-state";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  listProducts$: Observable<Produit>;
  totalPrice$: Observable<Number>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.listProducts$ = this.store.select(state => state.listProducts.products);
    this.totalPrice$ = this.store.select(ProductState.getTotalPrice);
  }

  delProduct(product : Produit): void {
    let nom:string = product.nom;
    let prix:number = product.prix;
    let id:number = product.id;
    let url:string = product.url;
    this.store.dispatch(new DelProduct({id, nom, prix, url}));
  }

  isConnected() {
    return localStorage.getItem('login');
  }
}

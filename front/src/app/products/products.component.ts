import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Produit } from '../models/produit';
import { Observable } from 'rxjs';
import { map, filter, scan, reduce } from 'rxjs/operators';
import { Store } from "@ngxs/store";
import { AddProduct } from "../../shared/actions/product-action";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  produits : Observable<Produit[]>

  constructor(private apiService : ApiService, private store: Store) { }

  ngOnInit(): void {
    this.produits = this.apiService.getProducts();
  }

  receiveNameFilter($event){
    if($event != '')
    {
      this.produits = this.apiService.getProducts().pipe(map(
        (produits: Produit[]) => produits.filter(
          (produit: Produit) => produit.nom.toLowerCase().startsWith($event.toLowerCase())
        )));
    } else {
      this.produits = this.apiService.getProducts();
    }
  }

  receivePriceFilterInf($event) {
    if($event != '')
    {
      this.produits = this.apiService.getProducts().pipe(map(
        (produits: Produit[]) => produits.filter(
          (produit: Produit) => produit.prix <= $event
        )));
    } else {
      this.produits = this.apiService.getProducts();
    }
  }

  receivePriceFilterSup($event) {
    if($event != '')
    {
      this.produits = this.apiService.getProducts().pipe(map(
        (produits: Produit[]) => produits.filter(
          (produit: Produit) => produit.prix >= $event
        )));
    } else {
      this.produits = this.apiService.getProducts();
    }
  }

  addProduct(product : Produit) {
    let nom:string = product.nom;
    let prix:number = product.prix;
    let id:number = product.id;
    let url:string = product.url;
    this.store.dispatch(new AddProduct({id, nom, prix, url}));
  }
}

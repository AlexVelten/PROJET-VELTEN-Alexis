import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Produit } from '../models/produit';
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngxs/store";
import { AddProduct } from "../../shared/actions/product-action";

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  id:number;
  nom:string;
  prix:number;
  url:string;
  product$ : Observable<Produit>;

  constructor(private store: Store, private apiService : ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.product$ = this.apiService.getProductById(this.id);
    this.product$.subscribe(product => { this.nom = product.nom; this.prix = product.prix; this.url = product.url; });
  }

  addProduct() : void {
    this.product$.subscribe(product => { this.nom = product.nom; this.prix = product.prix; this.url = product.url; });
    let id = this.id;
    let nom = this.nom;
    let prix = this.prix;
    let url = this.url;
    this.store.dispatch(new AddProduct({id, nom, prix, url}));
  }
}

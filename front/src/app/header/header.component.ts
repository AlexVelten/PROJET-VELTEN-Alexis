import { Component, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { Produit } from "../models/produit";
import { ProductState } from "../../shared/states/product-state";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nbProducts$: Observable<number>;
  login : string;

  constructor(private route : Router, private store: Store) { }

  ngOnInit(): void {
    this.nbProducts$ = this.store.select(ProductState.getNbProducts);
  }

  isConnected() {
    if(localStorage.getItem('login') != null){
      this.login = localStorage.getItem('login');
    }
    return localStorage.getItem('login');
  }

  logOut() {
    localStorage.removeItem('login');
    this.route.navigateByUrl('');
  }
}

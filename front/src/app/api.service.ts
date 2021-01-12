import { Injectable } from '@angular/core';
import { Produit } from './models/produit';
import { Client } from './models/client';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter, scan } from 'rxjs/operators';

let BaseURL = "https://projet-web-back.herokuapp.com";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  addUserUrl : String = "/user/add";
  getUserUrl : String = "/user/";
  loginUrl : String = "/user/login";
  getProductsUrl : String = "/product/get/all";

  constructor(private http:HttpClient) { }

  public getProducts() : Observable<Produit[]> {
    return this.http.get<Produit[]>(BaseURL + this.getProductsUrl);
  }

  public getProductById(id:number) : Observable<Produit> {
    return this.getProducts().pipe(map(product => product.find(product => product.id == id)));
  }

  public getUser(login:string) : Observable<Client> {
    return this.http.get<Client>(BaseURL + this.getUserUrl + login);
  }

  public addClient(c : Client) : Observable<Client> {
    let body = new URLSearchParams();
    body.set('civility',c.civilite);
    body.set('lastName',c.nom);
    body.set('firstName',c.prenom);
    body.set('address',c.adresse);
    body.set('city',c.ville);
    body.set('phoneNumber',c.telephone);
    body.set('country',c.pays);
    body.set('postalCode',c.code_postale);
    body.set('mail',c.email);
    body.set('login',c.login);
    body.set('password',c.password);
    return this.http.post<any>(BaseURL + this.addUserUrl, body.toString(), { headers: { 'content-type': 'application/x-www-form-urlencoded' }});
  }

  public login(login : string, password : string) : Observable<any> {
    let body = new URLSearchParams();
    body.set('login',login);
    body.set('password', password);
    return this.http.post<any>(BaseURL + this.loginUrl, body.toString(), { headers: { 'content-type': 'application/x-www-form-urlencoded' }});
  }
}

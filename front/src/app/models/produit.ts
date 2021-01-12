export class Produit {
  id:number;
  nom:string;
  prix:number;
  url:string;

  constructor(id:number, nom:string, prix:number, url:string){
    this.id = id;
    this.nom = nom;
    this.prix = prix;
    this.url = url;
  }
}

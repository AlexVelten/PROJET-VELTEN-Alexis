export class Client {
  civilite:string;
  nom:string;
  prenom:string;
  adresse:string;
  ville:string;
  telephone:string;
  pays:string;
  code_postale:string;
  email:string;
  login:string;
  password:string;

  constructor(civilite:string, nom:string, prenom:string, adresse:string, ville:string, telephone:string, pays:string, code_postale:string, email:string, login:string, password:string){
    this.civilite = civilite;
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.ville = ville;
    this.telephone = telephone;
    this.pays = pays;
    this.code_postale = code_postale;
    this.email = email;
    this.login = login;
    this.password = password;
  }
}

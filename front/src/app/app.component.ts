import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'Projet E-Commerce';

  public localStorageItem(id: string): string {
    return localStorage.getItem(id);
  }
}

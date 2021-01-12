import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  login : string;

  ngOnInit(): void {
    if(localStorage.getItem('login') != null)
    {
      this.login = localStorage.getItem('login');
    }

  }

  isConnected() {
    return localStorage.getItem('login');
  }

}

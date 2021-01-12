import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user$ : Observable<Client>;

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    let login : string = localStorage.getItem('login');
    this.user$ = this.apiService.getUser(login);
  }
}

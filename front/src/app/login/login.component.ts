import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from '../models/client';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route : Router, private apiService : ApiService) { }

  success$: Observable<any>;
  hasError: Boolean;
  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    if(f.valid) {
      this.success$ = this.apiService.login(f.value.login, f.value.password);
    }

    let success;

    this.success$.subscribe(res => {
      if(res.success == true){
        localStorage.setItem('login', res.login);
        this.route.navigateByUrl('');
      } else {
        this.hasError = true;
      }
    });
  }

  isConnected() {
    return localStorage.getItem('login');
  }
}

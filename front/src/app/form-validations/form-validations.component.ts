import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-form-validations',
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.css']
})
export class FormValidationsComponent implements OnInit {

  @Input() client: Client;
  @Input() display: boolean;

  constructor() { }

  ngOnInit(): void {
    this.display = false;
  }

}

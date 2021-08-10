import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  dateTime: Date

  constructor() { }

  

  ngOnInit(): void {
this.dateTime = new Date()
    
  }
  

}

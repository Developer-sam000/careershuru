import { YouTubePlayerModule } from '@angular/youtube-player';
import { Component, OnInit } from '@angular/core';

imports: [
  
  YouTubePlayerModule]

  
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit  {
  ngOnInit(): void {
  }
  constructor() {
    
  }
  username = "";
  wt='white';
  data= [
    {name:'Sam',
      age:20
    },
    {name:'vicky',
      age:20
    },
    {name:'Shan',
      age:20
    },
    {name:'Zain',
      age:20
    },
    ];
  t = Math.random();
 
  serverStatus = 'offline';
  
  getServerStatus() {
    return this.serverStatus =this.t> 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus ===  'online' ? 'aquamarine ' : 'red';
  }
}

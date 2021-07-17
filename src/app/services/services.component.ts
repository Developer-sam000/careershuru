import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
services=[
  {'id':1,'name':'Web Design', 'description':'we will design your Website from scratch', 'image':'../../assets/img/plans-1867745_1920.jpg'},
  {'id':2,'name':'Our Blogs', 'description':'here you can find awesome Blogs', 'image':'../../assets/img/blog-793047_1920.jpg'},
  {'id':3,'name':'Seo Expertise', 'description':'Our Expert mr. Ahmad will handle your SEO', 'image':'../../assets/img/seo-758264_1920.jpg'},
  {'id':4,'name':'Learn', 'description':'found intresting? we teach also', 'image':'../../assets/img/learn-1820039_1920.jpg'}


]
}

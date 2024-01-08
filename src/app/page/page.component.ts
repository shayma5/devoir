import { Component } from '@angular/core';
import { Article } from '../model/Article';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  list: Article[] = [];
  numberOfArticlesToShow: number=0;

  constructor(private router: Router, private ps: ServiceService) {}

  ngOnInit() {
    this.ps.getAll().subscribe(data=> this.list= (data));
    console.log(this.list);
  }
}

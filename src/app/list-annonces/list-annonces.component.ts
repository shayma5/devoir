import { Component } from '@angular/core';
import { Annonce } from '../model/Annonce';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css']
})
export class ListAnnoncesComponent {
  list : Annonce[] = []

  constructor(private Router:Router, private ps:ServiceService){}

  ngOnInit(){
    this.ps.getAllAnnonce().subscribe(data=> this.list= (data));
    console.log(this.list);
  }
}

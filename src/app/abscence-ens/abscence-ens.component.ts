import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App2Service } from 'src/app/app2.service';

@Component({
  selector: 'app-abscence-ens',
  templateUrl: './abscence-ens.component.html',
  styleUrls: ['./abscence-ens.component.css']
})
export class AbscenceEnsComponent implements OnInit {
  



  renouvs: any[] | undefined
  url: string = "http://localhost:8081/SpringMVC/servlet/";

  constructor(private service: App2Service) { 
   
  }

  ngOnInit(): void {
    this.service.retrieveAllFormRenouvellement().subscribe(data => {
      this.renouvs = data;
    })
   
  }
}

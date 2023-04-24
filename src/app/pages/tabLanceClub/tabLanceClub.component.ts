import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App1Service } from 'src/app/app1.service';
@Component({
  selector: 'app-tabLanceClub',
  templateUrl: './tabLanceClub.component.html',
  styleUrls: ['./tabLanceClub.component.scss']
})
export class RegisterComponent implements OnInit {

  listes: any[] | undefined
  url: string = "http://localhost:8081/SpringMVC/servlet/";

  constructor(private service: App1Service) { 
   
  }

  ngOnInit(): void {
    this.service.retrieveAllLanceClub().subscribe(data => {
      this.listes = data;
    })
   
  }

}

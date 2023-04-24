import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
//import { FormLanceEvent } from 'src/app/FormLanceEvent';
@Component({
  selector: 'app-tabLanceEvent',
  templateUrl: './tabLanceEvent.component.html',
  styleUrls: ['./tabLanceEvent.component.scss']
})
export class TablesComponent implements OnInit {

  events: any[] | undefined
  url: string = "http://localhost:8081/SpringMVC/servlet/";

  constructor(private service: AppService) { 
   
  }

  ngOnInit(): void {
    this.service.retrieveAllLanceEvent().subscribe(data => {
      this.events = data;
    })
   
  }

}

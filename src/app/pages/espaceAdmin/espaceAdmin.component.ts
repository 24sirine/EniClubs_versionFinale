import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { ClubService } from './club.service';

@Component({
  selector: 'app-espaceAdmin',
  templateUrl: './espaceAdmin.component.html',
  styleUrls: ['./espaceAdmin.component.scss']
})
export class UserProfileComponent implements OnInit {
  events: any[] | undefined
  clubs : any [] | undefined
  constructor(private service:EventService , private serviceC: ClubService) { }

  
  ngOnInit() : void {
    this.service.getEvents().subscribe(data => {
      this.events = data;
    })
    this.serviceC.getClubs().subscribe(data => {
      this.clubs = data;
    })
  }

  removeClub(id: number){
    this.serviceC.removeClub(id).subscribe(data => {
      this.clubs = this.clubs?.filter(club => club.id !== id);
    })
    setTimeout(()=>{
      window.location.reload();
    }, 100);

}


removeEvent(id: number){
  this.service.removeEvent(id).subscribe(data => {
    this.events = this.events?.filter(event => event.id !== id);
  })
  setTimeout(()=>{
    window.location.reload();
  }, 100);

}
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-ajout-prof',
  templateUrl: './ajout-prof.component.html',
  styleUrls: ['./ajout-prof.component.css']
})
export class AjoutProfComponent implements OnInit {

  constructor(private service: AppService) { }

  data: any

  
  form = new FormGroup({
    nomClub: new FormControl('', [Validators.required]),
    nomEvent: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    dateEvent: new FormControl('', [Validators.required]),
    dureeEvent: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    objectifsEvent: new FormControl('', [Validators.required]),
    place: new FormControl('', [Validators.required]),
    budget: new FormControl('', [Validators.required]),
    mailDemandeur: new FormControl('', [Validators.required]),
    telDemandeur: new FormControl('', [Validators.required]),
    dateDemande: new FormControl('', [Validators.required]),
    urlImage: new FormControl('', [Validators.required])
  

  })

  ngOnInit(): void {
  }

  
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addFormLanceEvent(this.data).subscribe(data => {
      console.log(data)
    })

    
    
    //this.router.navigate(['/']);
  }


}

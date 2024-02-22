import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent {

  contact: any;

  constructor(private contactsService:ContactsService, private direccionService:ActivatedRoute, private navegadorService: Router){}

  ngOnInit(){
    this.contact = this.contactsService.getContact(this.direccionService.snapshot.params['id']).subscribe(data => this.contact=data);
  }

  updateContact():void{
    this.contactsService.updateContact(this.contact);
    this.navegadorService.navigate(['/contact',this.direccionService.snapshot.params['id']]);
  }

  cancelChages():void{
    this.navegadorService.navigate(['/contact',this.direccionService.snapshot.params['id']]);
  }

}

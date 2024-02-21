import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {
  contact:any;

  constructor(private contactService: ContactsService, private route: ActivatedRoute){}

  ngOnInit(){
    this.contact = this.contactService.getContact(this.route.snapshot.params['id']).subscribe(data => this.contact=data);
  }
}

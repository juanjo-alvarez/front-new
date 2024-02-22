import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit{

  name: string;
  surname: string;
  lastname: string;
  phonenumber: string;
  email: string;

  constructor(private contactsService: ContactsService, private router: Router){
    this.name = "";
    this.surname = "";
    this.lastname = "";
    this.phonenumber = "";
    this.email = "";
  }

  ngOnInit(){}

  newContact():void {
    const contact = {
      name: this.name,
      surname: this.surname,
      lastname: this.lastname,
      phonenumber: this.phonenumber,
      email: this.email
    }
    this.contactsService.newContact(contact);
    this.router.navigate(['/contacts']);
  }

  cancelInsert():void {
    this.router.navigate(['/contacts']);
  }


}

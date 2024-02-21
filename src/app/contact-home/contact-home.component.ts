import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Route, Router } from '@angular/router';

export interface ContactDTO {
  id: number;
  name: string;
  surname: string;
  lastname: string;
  phonenumber: string;
  email: string;
}

const CONTACT_DATA: ContactDTO[] = [
  {id: 1, name: 'Paco', surname: 'Álvarez', lastname: 'Pozos', phonenumber:'666333555',email:'paco@alpo.es'},
  {id: 2, name: 'Marta', surname: 'Alto', lastname: 'Rocoso', phonenumber:'654632169',email:'marta@alro.es'},
];

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css']
})
export class ContactHomeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'surname', 'lastname', 'phonenumber','email'];
  contacts:any = [];

  constructor(private contactsService: ContactsService, private router: Router) { }

  ngOnInit() {
    this.contactsService.getContacts().subscribe(data => {
      this.contacts=data;
    });
  }

  openDetailForm(row: any){
    this.router.navigate(['/contact',row.id])
  }
}

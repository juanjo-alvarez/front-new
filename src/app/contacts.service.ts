import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getContacts():Observable<any>{
    const url:string = 'http://localhost:30030/contacts/getAll';
    const headers: HttpHeaders = new HttpHeaders();
    return this.http.get<any>(url,{headers});
  }

  getContact(c_id: number): Observable<any>{
    const url:string = 'http://localhost:30030/contacts/get';
    const headers: HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    const body = JSON.stringify({id:c_id});
    return this.http.post(url,body,{headers});
  }

  updateContact(contact: any):void {
    const url:string = 'http://localhost:30030/contacts/update';
    const body = contact;
    const headers: HttpHeaders = new HttpHeaders();
    this.http.put(url,body,{headers}).subscribe();
  }

  newContact(contact: any):void {
    const url:string = 'http://localhost:30030/contacts/add';
    const body = contact;
    const headers: HttpHeaders = new HttpHeaders();
    this.http.post(url,body,{headers}).subscribe();
  }

  deleteContact(delid: number): void{
    const url:string = 'http://localhost:30030/contacts/delete';
    const delbody = JSON.stringify({id:delid});
    const options = {
      body: delbody,
      headers: new HttpHeaders()
    };
    this.http.delete(url,options).subscribe();
  }
}

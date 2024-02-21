import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getContacts():Observable<any>{
    const url:string = 'http://localhost:30030/contacts/getAll'
    const headers: HttpHeaders = new HttpHeaders();
    return this.http.get<any>(url,{headers});
  }
}

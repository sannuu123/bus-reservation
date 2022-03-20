import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Add } from './add';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private myhttp:HttpClient) { }
  restUrl:string="http://localhost:9096/rest/api";
  getAllBook()
  {
    return this.myhttp.get(this.restUrl+"/abus")
  }

  addCustomer(ad:Add)
  {
return this.myhttp.post(this.restUrl+"/abus",ad);
  }
}


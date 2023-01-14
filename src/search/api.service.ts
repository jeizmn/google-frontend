import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }//dependency injection
  allCloths(){
    return this.http.get('http://127.0.0.1:3000/cloths') //cloth json data
  }
  
  onClick(product:any){
    const body={
      id:product.id,
      title:product.title,
      price:product.price,
      description:product.description,
      image:product.image
      }
    return this.http.post('http://127.0.0.1:3000/all-products',body) //product json data
  
  }
}

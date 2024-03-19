import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavesService {

  url: string = "https://localhost:7289/api";
  constructor(private http: HttpClient) { }

  getAllOrders():Observable<Order[]>{
    return this.http.get<Order[]>(`${this.url}/Orders`);
  }

  addOrder(order:Order):Observable<Order>{
    return this.http.post<Order>(`${this.url}/Order`, order);
  }

  removeOrder(order: Order):Observable<Order>{
    return this.http.delete<Order>(`${this.url}/Order=?${order.id}`);
  }

}

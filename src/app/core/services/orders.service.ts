import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from '../enums/state-order';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private urlApi: string;
  public collection$: Observable<Order[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = 'http://localhost:3000/orders';

    this.collection$ = this.httpClient.get<Order[]>(this.urlApi);
  }

  public changeState(order: Order, state: StateOrder): Observable<Order> {
    const item = new Order(order);
    item.state = state;
    return this.update(item);
  }

  public update(order: Order): Observable<Order> {
    return this.httpClient.put<Order>(`${this.urlApi}/${order.id}`, order);
  }
}

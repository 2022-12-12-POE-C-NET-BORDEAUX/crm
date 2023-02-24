import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}

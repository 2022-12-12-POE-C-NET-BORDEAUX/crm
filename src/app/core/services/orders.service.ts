import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private urlApi: string = 'http://localhost:3000';
  public collection$!: BehaviorSubject<Order[]>;

  constructor(private httpClient: HttpClient) {
    this.collection$ = new BehaviorSubject<Order[]>([]);
    this.refreshCol();
  }

  public refreshCol() {
    this.httpClient.get<Order[]>(`${this.urlApi}/orders`).subscribe((data) => {
      this.collection$.next(data);
    });
  }

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order({ ...item });
    obj.state = state;
    return this.update(obj);
  }

  public update(item: Order): Observable<Order> {
    return this.httpClient
      .put<Order>(`${this.urlApi}/orders/${item.id}`, item)
      .pipe(
        tap(() => {
          this.refreshCol();
        })
      );
  }

  public add(item: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${this.urlApi}/orders`, item).pipe(
      tap(() => {
        this.refreshCol();
      })
    );
  }

  public getById(id: number): Observable<Order> {
    return this.httpClient.get<Order>(`${this.urlApi}/orders/${id}`).pipe(
      tap(() => {
        this.refreshCol();
      })
    );
  }

  public delete(id: number): Observable<Order> {
    return this.httpClient.delete<Order>(`${this.urlApi}/orders/${id}`).pipe(
      tap(() => {
        this.refreshCol();
      })
    );
  }
}

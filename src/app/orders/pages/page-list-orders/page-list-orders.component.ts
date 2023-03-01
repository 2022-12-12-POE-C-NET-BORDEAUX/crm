import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent {
  public title: string;
  public collection$!: Observable<Order[]>;
  public headers: string[];

  constructor(private ordersService: OrdersService) {
    this.title = 'Orders list';
    this.collection$ = this.ordersService.collection$;
    this.headers = [
      'Type',
      'Client',
      'Days',
      'Unit price',
      'Total excl. taxes',
      'Total incl. taxes',
      'State',
    ];
  }
  // pas d'appels de methodes dans une interpolation, très mauvaise pratique
  // beaucoup d'appels de la methode pour rien
  // public total(val: number, coef: number, tva?: number): number {
  //   console.log('method called');
  //   if (tva) return val * coef * (1 + tva / 100);
  //   return val * coef;
  // }
}

import { Component } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent {
  public title: string;
  public collection!: Order[];
  public headers: string[];

  constructor(private ordersService: OrdersService) {
    this.title = 'Orders list';
    this.headers = [
      'Type',
      'Client',
      'Days',
      'Unit price',
      'Total excl. taxes',
      'Total incl. taxes',
      'State',
    ];

    this.ordersService.collection$.subscribe((data) => {
      this.collection = data;
      console.log(this.collection);
    });
    console.log(this.collection);
  }
}

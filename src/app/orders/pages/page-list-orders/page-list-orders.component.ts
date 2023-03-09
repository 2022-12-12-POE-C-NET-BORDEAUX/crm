import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent {
  public states: string[];
  public title: string;
  public collection$!: BehaviorSubject<Order[]>;
  public headers: string[];

  constructor(private ordersService: OrdersService, private router: Router) {
    this.states = Object.values(StateOrder);
    this.title = 'Orders list';
    this.collection$ = this.ordersService.collection$;
    this.headers = [
      'Actions',
      'Type',
      'Client',
      'Days',
      'Unit price',
      'Total excl. taxes',
      'Total incl. taxes',
      'State',
    ];

    console.log(this.states);
  }

  public changeState(order: Order, event: any) {
    const state = event.target.value;
    this.ordersService.changeState(order, state).subscribe((data) => {
      Object.assign(order, data);
    });
  }

  public goToEdit(id: number) {
    this.router.navigate(['orders', 'edit', id]);
  }

  public deleteItem(id: number) {
    this.ordersService.delete(id).subscribe();
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent {
  public item$!: Observable<Order>;

  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private ar: ActivatedRoute
  ) {
    this.ar.params.subscribe((params) => {
      const id = params['id'];
      this.item$ = this.ordersService.getById(id);
    });
  }

  ngOnInit(): void {}

  public action(item: Order) {
    this.ordersService.update(item).subscribe(() => {
      this.router.navigateByUrl('orders');
    });
  }
}

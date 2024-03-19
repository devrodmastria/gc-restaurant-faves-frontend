import { Component } from '@angular/core';
import { Order } from '../../models/order';
import { FavesService } from '../../services/faves.service';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {

  allOrders: Order[] = [];

  constructor(private faveService: FavesService){}

  ngOnInit(){
    this.faveService.getAllOrders().subscribe((response:Order[]) => {
      console.log(response);
      this.allOrders = response;
    });
  }

  delete(o: Order): void {
    this.faveService.removeOrder(o);
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../../models/order';

@Component({
  selector: 'app-add-order-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-order-form.component.html',
  styleUrl: './add-order-form.component.css'
})
export class AddOrderFormComponent {

  newOrder: Order = {} as Order;

}

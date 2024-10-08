import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-best-saller',
  standalone: true,
  imports: [
    ProductCardComponent,
  ],
  templateUrl: './best-saller.component.html',
  styleUrl: './best-saller.component.scss'
})
export class BestSallerComponent {

}

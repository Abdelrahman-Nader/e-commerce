import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from '../../products/products.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,MatButtonModule, MatMenuModule, MatIconModule

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BannerComponent } from './banner/banner.component';
import { BestSallerComponent } from './best-saller/best-saller.component';
import { CategoriesComponent } from './categories/categories.component';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';
import { MonthDealsComponent } from './month-deals/month-deals.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { StoryInstaComponent } from './story-insta/story-insta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    BannerComponent,
    BestSallerComponent,
    CategoriesComponent,
    CustomerFeedbackComponent,
    MonthDealsComponent,
    OurServicesComponent,
    StoryInstaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

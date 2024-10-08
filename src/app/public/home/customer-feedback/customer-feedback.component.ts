import { Component } from '@angular/core';
import { CustomerCommitComponent } from './customer-commit/customer-commit.component';

@Component({
  selector: 'app-customer-feedback',
  standalone: true,
  imports: [
    CustomerCommitComponent
  ],
  templateUrl: './customer-feedback.component.html',
  styleUrl: './customer-feedback.component.scss'
})
export class CustomerFeedbackComponent {

}

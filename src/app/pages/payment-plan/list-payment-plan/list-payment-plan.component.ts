import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { PaymentPlanService } from 'src/app/services/payment-plan/payment-plan.service';

@Component({
  selector: 'app-list-payment-plan',
  templateUrl: './list-payment-plan.component.html',
  styleUrls: ['./list-payment-plan.component.scss']
})
export class ListPaymentPlanComponent implements OnInit {

  paymentPlan: Entry<any>[] = [];

  constructor(
    private paymentplanSvc: PaymentPlanService
  ) { }

  ngOnInit(): void {
    this.paymentplanSvc.getPaymentPlan().then(res => this.paymentPlan = res);
  }

}

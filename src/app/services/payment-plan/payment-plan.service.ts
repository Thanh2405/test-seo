import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentPlanService {

  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token,
  })

  constructor() { }

  public getPaymentPlan(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'paymentPlan'
    }, query)).then(res => res.items);
  }
}

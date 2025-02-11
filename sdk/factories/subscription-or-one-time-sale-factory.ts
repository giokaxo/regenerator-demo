import ShippingFactory from '../factories/shipping-factory';
import OneTimeSale from '../models/one-time-sale';
import Subscription from '../models/subscription';
import ContactObject from '../models/contact-object';
import { Shipping } from '../models/shipping';
import RiskMetadata from '../models/risk-metadata';
import { SubscriptionOrOneTimeSale } from '../models/subscription-or-one-time-sale';

export default class SubscriptionOrOneTimeSaleFactory {
  static from(data: any = {}): SubscriptionOrOneTimeSale {
    switch(data.orderType) {
      case 'one-time-order': return new OneTimeSale(data);
      case 'subscription-order': return new Subscription(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

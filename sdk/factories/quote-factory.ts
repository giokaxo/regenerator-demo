import ShippingFactory from '../factories/shipping-factory';
import TaxesFactory from '../factories/taxes-factory';
import QuoteChangeOrder from '../models/quote-change-order';
import QuoteCreateOrder from '../models/quote-create-order';
import QuoteReactivateOrder from '../models/quote-reactivate-order';
import { Shipping } from '../models/shipping';
import { Taxes } from '../models/taxes';
import { Quote } from '../models/quote';

export default class QuoteFactory {
  static from(data: any = {}): Quote {
    switch(data.action) {
      case 'change': return new QuoteChangeOrder(data);
      case 'create': return new QuoteCreateOrder(data);
      case 'reactivate': return new QuoteReactivateOrder(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

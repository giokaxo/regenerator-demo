import DiscountFixed from '../models/discount-fixed';
import DiscountPercent from '../models/discount-percent';
import { Discount } from '../models/discount';

export default class DiscountFactory {
  static from(data: any = {}): Discount {
    switch(data.type) {
      case 'fixed': return new DiscountFixed(data);
      case 'percent': return new DiscountPercent(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

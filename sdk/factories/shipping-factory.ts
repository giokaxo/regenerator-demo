import ManualShipping from '../models/manual-shipping';
import RebillyShipping from '../models/rebilly-shipping';
import { Shipping } from '../models/shipping';

export default class ShippingFactory {
  static from(data: any = {}): Shipping {
    switch(data.calculator) {
      case 'manual': return new ManualShipping(data);
      case 'rebilly': return new RebillyShipping(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

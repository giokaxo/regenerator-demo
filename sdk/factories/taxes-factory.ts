import ManualTax from '../models/manual-tax';
import RebillyAvalaraTax from '../models/rebilly-avalara-tax';
import RebillyTaxJarTax from '../models/rebilly-tax-jar-tax';
import { Taxes } from '../models/taxes';

export default class TaxesFactory {
  static from(data: any = {}): Taxes {
    switch(data.calculator) {
      case 'manual': return new ManualTax(data);
      case 'rebilly-avalara': return new RebillyAvalaraTax(data);
      case 'rebilly-taxjar': return new RebillyTaxJarTax(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

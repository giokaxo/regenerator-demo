import KlarnaFeature from '../models/klarna-feature';
import { ReadyToPayKlarnaMethodFeature } from '../models/ready-to-pay-klarna-method-feature';

export default class ReadyToPayKlarnaMethodFeatureFactory {
  static from(data: any = {}): ReadyToPayKlarnaMethodFeature {
    switch(data.name) {
      case 'Klarna': return new KlarnaFeature(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

import AchPlaidFeature from '../models/ach-plaid-feature';
import { ReadyToPayAchMethodFeature } from '../models/ready-to-pay-ach-method-feature';

export default class ReadyToPayAchMethodFeatureFactory {
  static from(data: any = {}): ReadyToPayAchMethodFeature {
    switch(data.name) {
      case 'Plaid': return new AchPlaidFeature(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

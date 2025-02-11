import ReadyToPayAmount from '../models/ready-to-pay-amount';
import ReadyToPayItems from '../models/ready-to-pay-items';
import ContactObject from '../models/contact-object';
import RiskMetadata from '../models/risk-metadata';
import { PostReadyToPay } from '../models/post-ready-to-pay';

export default class PostReadyToPayFactory {
  static from(data: any = {}): PostReadyToPay {
    if (Object.prototype.hasOwnProperty.call(data, 'amount') || Object.prototype.hasOwnProperty.call(data, 'currency')) {
      return new ReadyToPayAmount(data);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'items')) {
      return new ReadyToPayItems(data);
    }
    const error = new Error('Unknown discriminator value');
    error.name = 'UnknownDiscriminatorValue';
    throw error;
  }
}

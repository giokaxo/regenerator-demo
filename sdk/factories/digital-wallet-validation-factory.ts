import ApplePayValidation from '../models/apple-pay-validation';
import DigitalWalletValidation from '../models/digital-wallet-validation';

export default class DigitalWalletValidationFactory {
  static from(data: any = {}): DigitalWalletValidation {
    switch(data.type) {
      case 'Apple Pay': return new ApplePayValidation(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

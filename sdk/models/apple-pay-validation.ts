import ApplePayValidationValidationRequest from '../models/apple-pay-validation-validation-request';
import DigitalWalletValidation from '../models/digital-wallet-validation';

export default class ApplePayValidation extends DigitalWalletValidation {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      type: 'Apple Pay',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'validationRequest')) {
      this.setValidationRequest(data['validationRequest']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'validationResponse')) {
      this.setValidationResponse(data['validationResponse']);
    }
  }


  get validationRequest(): ApplePayValidationValidationRequest {
    return this._fields['validationRequest'];
  }
  
  getValidationRequest(): ApplePayValidationValidationRequest {
      return this._fields['validationRequest'];
  }

  setValidationRequest(value: ApplePayValidationValidationRequest | any) {
    if (!(value instanceof ApplePayValidationValidationRequest)) {
      value = new ApplePayValidationValidationRequest(value);
    }

    this._fields['validationRequest'] = value;

    return this;
  }

  get validationResponse(): Record<string, any> | null {
    return this._fields['validationResponse'] ?? null;
  }
  
  getValidationResponse(): Record<string, any> | null {
      return this._fields['validationResponse'] ?? null;
  }

  private setValidationResponse(value: null | Record<string, any>) {
    this._fields['validationResponse'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'validationRequest')) {
      data['validationRequest'] = this['validationRequest'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'validationResponse')) {
      data['validationResponse'] = this['validationResponse'];
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

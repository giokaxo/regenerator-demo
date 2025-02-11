import RuleAction from '../models/rule-action';

export default class RuleActionCreateInfusionsoftPayment extends RuleAction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'create-keap-infusionsoft-payment',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'paymentBody')) {
      this.setPaymentBody(data['paymentBody']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'credentialHash')) {
      this.setCredentialHash(data['credentialHash']);
    }
  }


  get paymentBody(): Record<string, any> | null {
    return this._fields['paymentBody'] ?? null;
  }
  
  getPaymentBody(): Record<string, any> | null {
      return this._fields['paymentBody'] ?? null;
  }

  setPaymentBody(value: null | Record<string, any>) {
    this._fields['paymentBody'] = value;

    return this;
  }

  get credentialHash(): string {
    return this._fields['credentialHash'];
  }
  
  getCredentialHash(): string {
      return this._fields['credentialHash'];
  }

  setCredentialHash(value: string) {
    this._fields['credentialHash'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paymentBody')) {
      data['paymentBody'] = this['paymentBody'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentialHash')) {
      data['credentialHash'] = this['credentialHash'];
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

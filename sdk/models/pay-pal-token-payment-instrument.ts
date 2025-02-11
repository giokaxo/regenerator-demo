
export default class PayPalTokenPaymentInstrument {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'paypalMerchantId')) {
      this.setPaypalMerchantId(data['paypalMerchantId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingAgreementToken')) {
      this.setBillingAgreementToken(data['billingAgreementToken']);
    }
  }


  get paypalMerchantId(): string {
    return this._fields['paypalMerchantId'];
  }
  
  getPaypalMerchantId(): string {
      return this._fields['paypalMerchantId'];
  }

  setPaypalMerchantId(value: string) {
    this._fields['paypalMerchantId'] = value;

    return this;
  }

  get billingAgreementToken(): string {
    return this._fields['billingAgreementToken'];
  }
  
  getBillingAgreementToken(): string {
      return this._fields['billingAgreementToken'];
  }

  setBillingAgreementToken(value: string) {
    this._fields['billingAgreementToken'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paypalMerchantId')) {
      data['paypalMerchantId'] = this['paypalMerchantId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAgreementToken')) {
      data['billingAgreementToken'] = this['billingAgreementToken'];
    }

    return data;
  }
}

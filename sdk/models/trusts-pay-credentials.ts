
export default class TrustsPayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantNo')) {
      this.setMerchantNo(data['merchantNo']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'gatewayNo')) {
      this.setGatewayNo(data['gatewayNo']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'signkey')) {
      this.setSignkey(data['signkey']);
    }
  }


  get merchantNo(): string {
    return this._fields['merchantNo'];
  }
  
  getMerchantNo(): string {
      return this._fields['merchantNo'];
  }

  setMerchantNo(value: string) {
    this._fields['merchantNo'] = value;

    return this;
  }

  get gatewayNo(): string {
    return this._fields['gatewayNo'];
  }
  
  getGatewayNo(): string {
      return this._fields['gatewayNo'];
  }

  setGatewayNo(value: string) {
    this._fields['gatewayNo'] = value;

    return this;
  }

  get signkey(): string {
    return this._fields['signkey'];
  }
  
  getSignkey(): string {
      return this._fields['signkey'];
  }

  setSignkey(value: string) {
    this._fields['signkey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantNo')) {
      data['merchantNo'] = this['merchantNo'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'gatewayNo')) {
      data['gatewayNo'] = this['gatewayNo'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'signkey')) {
      data['signkey'] = this['signkey'];
    }

    return data;
  }
}

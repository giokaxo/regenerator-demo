
export default class NetellerCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'paysafePaymentsApiUsername')) {
      this.setPaysafePaymentsApiUsername(data['paysafePaymentsApiUsername']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'paysafePaymentsApiPassword')) {
      this.setPaysafePaymentsApiPassword(data['paysafePaymentsApiPassword']);
    }
  }


  get paysafePaymentsApiUsername(): string {
    return this._fields['paysafePaymentsApiUsername'];
  }
  
  getPaysafePaymentsApiUsername(): string {
      return this._fields['paysafePaymentsApiUsername'];
  }

  setPaysafePaymentsApiUsername(value: string) {
    this._fields['paysafePaymentsApiUsername'] = value;

    return this;
  }

  get paysafePaymentsApiPassword(): string {
    return this._fields['paysafePaymentsApiPassword'];
  }
  
  getPaysafePaymentsApiPassword(): string {
      return this._fields['paysafePaymentsApiPassword'];
  }

  setPaysafePaymentsApiPassword(value: string) {
    this._fields['paysafePaymentsApiPassword'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paysafePaymentsApiUsername')) {
      data['paysafePaymentsApiUsername'] = this['paysafePaymentsApiUsername'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'paysafePaymentsApiPassword')) {
      data['paysafePaymentsApiPassword'] = this['paysafePaymentsApiPassword'];
    }

    return data;
  }
}

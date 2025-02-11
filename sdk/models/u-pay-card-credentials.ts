
export default class UPayCardCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'receiver_account')) {
      this.setReceiverAccount(data['receiver_account']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'key')) {
      this.setKey(data['key']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secret')) {
      this.setSecret(data['secret']);
    }
  }


  get receiverAccount(): string {
    return this._fields['receiver_account'];
  }
  
  getReceiverAccount(): string {
      return this._fields['receiver_account'];
  }

  setReceiverAccount(value: string) {
    this._fields['receiver_account'] = value;

    return this;
  }

  get key(): string {
    return this._fields['key'];
  }
  
  getKey(): string {
      return this._fields['key'];
  }

  setKey(value: string) {
    this._fields['key'] = value;

    return this;
  }

  get secret(): string {
    return this._fields['secret'];
  }
  
  getSecret(): string {
      return this._fields['secret'];
  }

  setSecret(value: string) {
    this._fields['secret'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'receiverAccount')) {
      data['receiver_account'] = this['receiverAccount'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'key')) {
      data['key'] = this['key'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secret')) {
      data['secret'] = this['secret'];
    }

    return data;
  }
}

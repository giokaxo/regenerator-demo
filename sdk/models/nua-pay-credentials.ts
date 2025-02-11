
export default class NuaPayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'nuaPayCommonName')) {
      this.setNuaPayCommonName(data['nuaPayCommonName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'nuaPaySerialNumber')) {
      this.setNuaPaySerialNumber(data['nuaPaySerialNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'nuaPayAccountId')) {
      this.setNuaPayAccountId(data['nuaPayAccountId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'nuaPayOriginatorIban')) {
      this.setNuaPayOriginatorIban(data['nuaPayOriginatorIban']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'nuaPayApiKey')) {
      this.setNuaPayApiKey(data['nuaPayApiKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'nuaPayPrivateKey')) {
      this.setNuaPayPrivateKey(data['nuaPayPrivateKey']);
    }
  }


  get nuaPayCommonName(): string {
    return this._fields['nuaPayCommonName'];
  }
  
  getNuaPayCommonName(): string {
      return this._fields['nuaPayCommonName'];
  }

  setNuaPayCommonName(value: string) {
    this._fields['nuaPayCommonName'] = value;

    return this;
  }

  get nuaPaySerialNumber(): string {
    return this._fields['nuaPaySerialNumber'];
  }
  
  getNuaPaySerialNumber(): string {
      return this._fields['nuaPaySerialNumber'];
  }

  setNuaPaySerialNumber(value: string) {
    this._fields['nuaPaySerialNumber'] = value;

    return this;
  }

  get nuaPayAccountId(): string {
    return this._fields['nuaPayAccountId'];
  }
  
  getNuaPayAccountId(): string {
      return this._fields['nuaPayAccountId'];
  }

  setNuaPayAccountId(value: string) {
    this._fields['nuaPayAccountId'] = value;

    return this;
  }

  get nuaPayOriginatorIban(): string {
    return this._fields['nuaPayOriginatorIban'];
  }
  
  getNuaPayOriginatorIban(): string {
      return this._fields['nuaPayOriginatorIban'];
  }

  setNuaPayOriginatorIban(value: string) {
    this._fields['nuaPayOriginatorIban'] = value;

    return this;
  }

  get nuaPayApiKey(): string {
    return this._fields['nuaPayApiKey'];
  }
  
  getNuaPayApiKey(): string {
      return this._fields['nuaPayApiKey'];
  }

  setNuaPayApiKey(value: string) {
    this._fields['nuaPayApiKey'] = value;

    return this;
  }

  get nuaPayPrivateKey(): string {
    return this._fields['nuaPayPrivateKey'];
  }
  
  getNuaPayPrivateKey(): string {
      return this._fields['nuaPayPrivateKey'];
  }

  setNuaPayPrivateKey(value: string) {
    this._fields['nuaPayPrivateKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'nuaPayCommonName')) {
      data['nuaPayCommonName'] = this['nuaPayCommonName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'nuaPaySerialNumber')) {
      data['nuaPaySerialNumber'] = this['nuaPaySerialNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'nuaPayAccountId')) {
      data['nuaPayAccountId'] = this['nuaPayAccountId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'nuaPayOriginatorIban')) {
      data['nuaPayOriginatorIban'] = this['nuaPayOriginatorIban'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'nuaPayApiKey')) {
      data['nuaPayApiKey'] = this['nuaPayApiKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'nuaPayPrivateKey')) {
      data['nuaPayPrivateKey'] = this['nuaPayPrivateKey'];
    }

    return data;
  }
}

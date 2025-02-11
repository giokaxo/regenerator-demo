
export default class SkrillCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'accountEmail')) {
      this.setAccountEmail(data['accountEmail']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretWord')) {
      this.setSecretWord(data['secretWord']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'mqiPassword')) {
      this.setMqiPassword(data['mqiPassword']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currencyAccountIds')) {
      this.setCurrencyAccountIds(data['currencyAccountIds']);
    }
  }


  get accountEmail(): string {
    return this._fields['accountEmail'];
  }
  
  getAccountEmail(): string {
      return this._fields['accountEmail'];
  }

  setAccountEmail(value: string) {
    this._fields['accountEmail'] = value;

    return this;
  }

  get secretWord(): string {
    return this._fields['secretWord'];
  }
  
  getSecretWord(): string {
      return this._fields['secretWord'];
  }

  setSecretWord(value: string) {
    this._fields['secretWord'] = value;

    return this;
  }

  get mqiPassword(): string | null {
    return this._fields['mqiPassword'] ?? null;
  }
  
  getMqiPassword(): string | null {
      return this._fields['mqiPassword'] ?? null;
  }

  setMqiPassword(value: null | string) {
    this._fields['mqiPassword'] = value;

    return this;
  }

  get currencyAccountIds(): string | null {
    return this._fields['currencyAccountIds'] ?? null;
  }
  
  getCurrencyAccountIds(): string | null {
      return this._fields['currencyAccountIds'] ?? null;
  }

  setCurrencyAccountIds(value: null | string) {
    this._fields['currencyAccountIds'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountEmail')) {
      data['accountEmail'] = this['accountEmail'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretWord')) {
      data['secretWord'] = this['secretWord'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'mqiPassword')) {
      data['mqiPassword'] = this['mqiPassword'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currencyAccountIds')) {
      data['currencyAccountIds'] = this['currencyAccountIds'];
    }

    return data;
  }
}

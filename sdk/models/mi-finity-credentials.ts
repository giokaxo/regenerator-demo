
export default class MiFinityCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'apiKey')) {
      this.setApiKey(data['apiKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'mifinityAccountNumber')) {
      this.setMifinityAccountNumber(data['mifinityAccountNumber']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'accountHolderId')) {
      this.setAccountHolderId(data['accountHolderId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'brandId')) {
      this.setBrandId(data['brandId']);
    }
  }


  get apiKey(): string {
    return this._fields['apiKey'];
  }
  
  getApiKey(): string {
      return this._fields['apiKey'];
  }

  setApiKey(value: string) {
    this._fields['apiKey'] = value;

    return this;
  }

  get mifinityAccountNumber(): string {
    return this._fields['mifinityAccountNumber'];
  }
  
  getMifinityAccountNumber(): string {
      return this._fields['mifinityAccountNumber'];
  }

  setMifinityAccountNumber(value: string) {
    this._fields['mifinityAccountNumber'] = value;

    return this;
  }

  get accountHolderId(): string {
    return this._fields['accountHolderId'];
  }
  
  getAccountHolderId(): string {
      return this._fields['accountHolderId'];
  }

  setAccountHolderId(value: string) {
    this._fields['accountHolderId'] = value;

    return this;
  }

  get brandId(): string | null {
    return this._fields['brandId'] ?? null;
  }
  
  getBrandId(): string | null {
      return this._fields['brandId'] ?? null;
  }

  setBrandId(value: null | string) {
    this._fields['brandId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiKey')) {
      data['apiKey'] = this['apiKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'mifinityAccountNumber')) {
      data['mifinityAccountNumber'] = this['mifinityAccountNumber'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'accountHolderId')) {
      data['accountHolderId'] = this['accountHolderId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'brandId')) {
      data['brandId'] = this['brandId'];
    }

    return data;
  }
}


export default class PostFinanceSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'skipPaymentFileUpload')) {
      this.setSkipPaymentFileUpload(data['skipPaymentFileUpload']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'enableAliasAuthentication')) {
      this.setEnableAliasAuthentication(data['enableAliasAuthentication']);
    }
  }


  get skipPaymentFileUpload(): boolean | null {
    return this._fields['skipPaymentFileUpload'] ?? null;
  }
  
  getSkipPaymentFileUpload(): boolean | null {
      return this._fields['skipPaymentFileUpload'] ?? null;
  }

  setSkipPaymentFileUpload(value: null | boolean) {
    this._fields['skipPaymentFileUpload'] = value;

    return this;
  }

  get enableAliasAuthentication(): boolean | null {
    return this._fields['enableAliasAuthentication'] ?? null;
  }
  
  getEnableAliasAuthentication(): boolean | null {
      return this._fields['enableAliasAuthentication'] ?? null;
  }

  setEnableAliasAuthentication(value: null | boolean) {
    this._fields['enableAliasAuthentication'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'skipPaymentFileUpload')) {
      data['skipPaymentFileUpload'] = this['skipPaymentFileUpload'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'enableAliasAuthentication')) {
      data['enableAliasAuthentication'] = this['enableAliasAuthentication'];
    }

    return data;
  }
}

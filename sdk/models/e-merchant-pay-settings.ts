
export default class EMerchantPaySettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'useGenesisPlatform')) {
      this.setUseGenesisPlatform(data['useGenesisPlatform']);
    }
  }


  get useGenesisPlatform(): boolean | null {
    return this._fields['useGenesisPlatform'] ?? null;
  }
  
  getUseGenesisPlatform(): boolean | null {
      return this._fields['useGenesisPlatform'] ?? null;
  }

  setUseGenesisPlatform(value: null | boolean) {
    this._fields['useGenesisPlatform'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useGenesisPlatform')) {
      data['useGenesisPlatform'] = this['useGenesisPlatform'];
    }

    return data;
  }
}

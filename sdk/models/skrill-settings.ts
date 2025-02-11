
export default class SkrillSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'merchantFields')) {
      this.setMerchantFields(data['merchantFields']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'useSPX')) {
      this.setUseSPX(data['useSPX']);
    }
  }


  get merchantFields(): string | null {
    return this._fields['merchantFields'] ?? null;
  }
  
  getMerchantFields(): string | null {
      return this._fields['merchantFields'] ?? null;
  }

  setMerchantFields(value: null | string) {
    this._fields['merchantFields'] = value;

    return this;
  }

  get useSPX(): boolean | null {
    return this._fields['useSPX'] ?? null;
  }
  
  getUseSPX(): boolean | null {
      return this._fields['useSPX'] ?? null;
  }

  setUseSPX(value: null | boolean) {
    this._fields['useSPX'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'merchantFields')) {
      data['merchantFields'] = this['merchantFields'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useSPX')) {
      data['useSPX'] = this['useSPX'];
    }

    return data;
  }
}

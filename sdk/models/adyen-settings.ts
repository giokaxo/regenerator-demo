import AdyenSettingsSplitPayments from '../models/adyen-settings-split-payments';

export default class AdyenSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'store')) {
      this.setStore(data['store']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'url')) {
      this.setUrl(data['url']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'splitPayments')) {
      this.setSplitPayments(data['splitPayments']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'totalTaxRate')) {
      this.setTotalTaxRate(data['totalTaxRate']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'enableMoto')) {
      this.setEnableMoto(data['enableMoto']);
    }
  }


  get store(): string | null {
    return this._fields['store'] ?? null;
  }
  
  getStore(): string | null {
      return this._fields['store'] ?? null;
  }

  setStore(value: null | string) {
    this._fields['store'] = value;

    return this;
  }

  get url(): string {
    return this._fields['url'];
  }
  
  getUrl(): string {
      return this._fields['url'];
  }

  setUrl(value: string) {
    this._fields['url'] = value;

    return this;
  }

  get splitPayments(): Array<any> | null {
    return this._fields['splitPayments'] ?? null;
  }
  
  getSplitPayments(): Array<any> | null {
      return this._fields['splitPayments'] ?? null;
  }

  setSplitPayments(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof AdyenSettingsSplitPayments ? value : new AdyenSettingsSplitPayments(value),
    ) : null;

    this._fields['splitPayments'] = value;

    return this;
  }

  get totalTaxRate(): number | null {
    return this._fields['totalTaxRate'] ?? null;
  }
  
  getTotalTaxRate(): number | null {
      return this._fields['totalTaxRate'] ?? null;
  }

  setTotalTaxRate(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['totalTaxRate'] = value;

    return this;
  }

  get enableMoto(): boolean | null {
    return this._fields['enableMoto'] ?? null;
  }
  
  getEnableMoto(): boolean | null {
      return this._fields['enableMoto'] ?? null;
  }

  setEnableMoto(value: null | boolean) {
    this._fields['enableMoto'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'store')) {
      data['store'] = this['store'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'url')) {
      data['url'] = this['url'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'splitPayments')) {
      data['splitPayments'] = this['splitPayments'] !== null
          ? this._fields['splitPayments'].map((adyenSettingsSplitPayments: AdyenSettingsSplitPayments) => adyenSettingsSplitPayments.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'totalTaxRate')) {
      data['totalTaxRate'] = this['totalTaxRate'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'enableMoto')) {
      data['enableMoto'] = this['enableMoto'];
    }

    return data;
  }
}

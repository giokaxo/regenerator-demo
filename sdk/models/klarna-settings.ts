
export default class KlarnaSettings {
  REGION_EU = 'EU';

  REGION_NA = 'NA';

  REGION_OC = 'OC';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'region')) {
      this.setRegion(data['region']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'usePayNowStandalone')) {
      this.setUsePayNowStandalone(data['usePayNowStandalone']);
    }
  }


  get region(): string {
    return this._fields['region'];
  }
  
  getRegion(): string {
      return this._fields['region'];
  }

  setRegion(value: string) {
    this._fields['region'] = value;

    return this;
  }

  get usePayNowStandalone(): boolean | null {
    return this._fields['usePayNowStandalone'] ?? null;
  }
  
  getUsePayNowStandalone(): boolean | null {
      return this._fields['usePayNowStandalone'] ?? null;
  }

  setUsePayNowStandalone(value: null | boolean) {
    this._fields['usePayNowStandalone'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'region')) {
      data['region'] = this['region'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'usePayNowStandalone')) {
      data['usePayNowStandalone'] = this['usePayNowStandalone'];
    }

    return data;
  }
}

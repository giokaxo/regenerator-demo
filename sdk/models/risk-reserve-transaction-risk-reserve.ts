
export default class RiskReserveTransactionRiskReserve {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'releaseTime')) {
      this.setReleaseTime(data['releaseTime']);
    }
  }


  get releaseTime(): Date | null {
    return this._fields['releaseTime'] ?? null;
  }
  
  getReleaseTime(): Date | null {
      return this._fields['releaseTime'] ?? null;
  }

  private setReleaseTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['releaseTime'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'releaseTime')) {
      data['releaseTime'] = this['releaseTime']?.toISOString() ?? null;
    }

    return data;
  }
}

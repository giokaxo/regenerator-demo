
export default class DigitalWalletsApplePay {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'isEnabled')) {
      this.setIsEnabled(data['isEnabled']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'displayName')) {
      this.setDisplayName(data['displayName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'country')) {
      this.setCountry(data['country']);
    }
  }


  get isEnabled(): boolean {
    return this._fields['isEnabled'];
  }
  
  getIsEnabled(): boolean {
      return this._fields['isEnabled'];
  }

  setIsEnabled(value: boolean) {
    this._fields['isEnabled'] = value;

    return this;
  }

  get displayName(): string | null {
    return this._fields['displayName'] ?? null;
  }
  
  getDisplayName(): string | null {
      return this._fields['displayName'] ?? null;
  }

  setDisplayName(value: null | string) {
    this._fields['displayName'] = value;

    return this;
  }

  get country(): string | null {
    return this._fields['country'] ?? null;
  }
  
  getCountry(): string | null {
      return this._fields['country'] ?? null;
  }

  setCountry(value: null | string) {
    this._fields['country'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isEnabled')) {
      data['isEnabled'] = this['isEnabled'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'displayName')) {
      data['displayName'] = this['displayName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'country')) {
      data['country'] = this['country'];
    }

    return data;
  }
}

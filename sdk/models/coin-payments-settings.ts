
export default class CoinPaymentsSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'useCallbackAddress')) {
      this.setUseCallbackAddress(data['useCallbackAddress']);
    }
  }


  get useCallbackAddress(): boolean | null {
    return this._fields['useCallbackAddress'] ?? null;
  }
  
  getUseCallbackAddress(): boolean | null {
      return this._fields['useCallbackAddress'] ?? null;
  }

  setUseCallbackAddress(value: null | boolean) {
    this._fields['useCallbackAddress'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useCallbackAddress')) {
      data['useCallbackAddress'] = this['useCallbackAddress'];
    }

    return data;
  }
}


export default class PayClubSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'use3DSChannel')) {
      this.setUse3DSChannel(data['use3DSChannel']);
    }
  }


  get use3DSChannel(): boolean | null {
    return this._fields['use3DSChannel'] ?? null;
  }
  
  getUse3DSChannel(): boolean | null {
      return this._fields['use3DSChannel'] ?? null;
  }

  setUse3DSChannel(value: null | boolean) {
    this._fields['use3DSChannel'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'use3DSChannel')) {
      data['use3DSChannel'] = this['use3DSChannel'];
    }

    return data;
  }
}

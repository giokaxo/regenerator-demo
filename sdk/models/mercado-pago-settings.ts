
export default class MercadoPagoSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'collectDeviceId')) {
      this.setCollectDeviceId(data['collectDeviceId']);
    }
  }


  get collectDeviceId(): boolean | null {
    return this._fields['collectDeviceId'] ?? null;
  }
  
  getCollectDeviceId(): boolean | null {
      return this._fields['collectDeviceId'] ?? null;
  }

  setCollectDeviceId(value: null | boolean) {
    this._fields['collectDeviceId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'collectDeviceId')) {
      data['collectDeviceId'] = this['collectDeviceId'];
    }

    return data;
  }
}

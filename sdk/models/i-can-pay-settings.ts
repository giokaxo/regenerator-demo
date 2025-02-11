
export default class ICanPaySettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'use3DSEndpoint')) {
      this.setUse3DSEndpoint(data['use3DSEndpoint']);
    }
  }


  get use3DSEndpoint(): boolean | null {
    return this._fields['use3DSEndpoint'] ?? null;
  }
  
  getUse3DSEndpoint(): boolean | null {
      return this._fields['use3DSEndpoint'] ?? null;
  }

  setUse3DSEndpoint(value: null | boolean) {
    this._fields['use3DSEndpoint'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'use3DSEndpoint')) {
      data['use3DSEndpoint'] = this['use3DSEndpoint'];
    }

    return data;
  }
}

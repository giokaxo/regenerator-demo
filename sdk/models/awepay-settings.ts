
export default class AwepaySettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'useP2pRest')) {
      this.setUseP2pRest(data['useP2pRest']);
    }
  }


  get useP2pRest(): boolean | null {
    return this._fields['useP2pRest'] ?? null;
  }
  
  getUseP2pRest(): boolean | null {
      return this._fields['useP2pRest'] ?? null;
  }

  setUseP2pRest(value: null | boolean) {
    this._fields['useP2pRest'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useP2pRest')) {
      data['useP2pRest'] = this['useP2pRest'];
    }

    return data;
  }
}

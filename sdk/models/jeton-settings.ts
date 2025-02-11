
export default class JetonSettings {
  METHOD_CHECKOUT = 'CHECKOUT';

  METHOD_DIRECT = 'DIRECT';

  METHOD_QR = 'QR';

  METHOD_JETGO = 'JETGO';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'method')) {
      this.setMethod(data['method']);
    }
  }


  get method(): string {
    return this._fields['method'];
  }
  
  getMethod(): string {
      return this._fields['method'];
  }

  setMethod(value: string) {
    this._fields['method'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'method')) {
      data['method'] = this['method'];
    }

    return data;
  }
}


export default class WesternUnionCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'clientId')) {
      this.setClientId(data['clientId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'certificateCommonName')) {
      this.setCertificateCommonName(data['certificateCommonName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'certificateSerialNumber')) {
      this.setCertificateSerialNumber(data['certificateSerialNumber']);
    }
  }


  get clientId(): string {
    return this._fields['clientId'];
  }
  
  getClientId(): string {
      return this._fields['clientId'];
  }

  setClientId(value: string) {
    this._fields['clientId'] = value;

    return this;
  }

  get certificateCommonName(): string {
    return this._fields['certificateCommonName'];
  }
  
  getCertificateCommonName(): string {
      return this._fields['certificateCommonName'];
  }

  setCertificateCommonName(value: string) {
    this._fields['certificateCommonName'] = value;

    return this;
  }

  get certificateSerialNumber(): string {
    return this._fields['certificateSerialNumber'];
  }
  
  getCertificateSerialNumber(): string {
      return this._fields['certificateSerialNumber'];
  }

  setCertificateSerialNumber(value: string) {
    this._fields['certificateSerialNumber'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'clientId')) {
      data['clientId'] = this['clientId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'certificateCommonName')) {
      data['certificateCommonName'] = this['certificateCommonName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'certificateSerialNumber')) {
      data['certificateSerialNumber'] = this['certificateSerialNumber'];
    }

    return data;
  }
}

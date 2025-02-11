
export default class DengiCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'projectId')) {
      this.setProjectId(data['projectId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'publicKey')) {
      this.setPublicKey(data['publicKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'refundKey')) {
      this.setRefundKey(data['refundKey']);
    }
  }


  get projectId(): string {
    return this._fields['projectId'];
  }
  
  getProjectId(): string {
      return this._fields['projectId'];
  }

  setProjectId(value: string) {
    this._fields['projectId'] = value;

    return this;
  }

  get publicKey(): string {
    return this._fields['publicKey'];
  }
  
  getPublicKey(): string {
      return this._fields['publicKey'];
  }

  setPublicKey(value: string) {
    this._fields['publicKey'] = value;

    return this;
  }

  get refundKey(): string {
    return this._fields['refundKey'];
  }
  
  getRefundKey(): string {
      return this._fields['refundKey'];
  }

  setRefundKey(value: string) {
    this._fields['refundKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'projectId')) {
      data['projectId'] = this['projectId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'publicKey')) {
      data['publicKey'] = this['publicKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'refundKey')) {
      data['refundKey'] = this['refundKey'];
    }

    return data;
  }
}

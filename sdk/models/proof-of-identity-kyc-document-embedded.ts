import Customer from '../models/customer';
import File from '../models/file';

export default class ProofOfIdentityKycDocumentEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'customer')) {
      this.setCustomer(data['customer']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'files')) {
      this.setFiles(data['files']);
    }
  }


  get customer(): Customer | null {
    return this._fields['customer'] ?? null;
  }
  
  getCustomer(): Customer | null {
      return this._fields['customer'] ?? null;
  }

  setCustomer(value: null | Customer | any) {
    if (value !== null && !(value instanceof Customer)) {
      value = new Customer(value);
    }

    this._fields['customer'] = value;

    return this;
  }

  get files(): Array<any> | null {
    return this._fields['files'] ?? null;
  }
  
  getFiles(): Array<any> | null {
      return this._fields['files'] ?? null;
  }

  setFiles(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof File ? value : new File(value),
    ) : null;

    this._fields['files'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customer')) {
      data['customer'] = this['customer']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'files')) {
      data['files'] = this['files'] !== null
          ? this._fields['files'].map((file: File) => file.jsonSerialize())
          : null;
    }

    return data;
  }
}

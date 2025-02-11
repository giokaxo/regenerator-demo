import { PatchServiceCredentialRequest } from '../models/patch-service-credential-request';

export default class PatchTaxJarCredential implements PatchServiceCredentialRequest {
  get [PatchServiceCredentialRequest](): true {
    return true;
  }

  STATUS_ACTIVE = 'active';

  STATUS_INACTIVE = 'inactive';

  STATUS_DEACTIVATED = 'deactivated';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'omitFromAddress')) {
      this.setOmitFromAddress(data['omitFromAddress']);
    }
  }


  get status(): string {
    return this._fields['status'];
  }
  
  getStatus(): string {
      return this._fields['status'];
  }

  setStatus(value: string) {
    this._fields['status'] = value;

    return this;
  }

  get omitFromAddress(): boolean | null {
    return this._fields['omitFromAddress'] ?? null;
  }
  
  getOmitFromAddress(): boolean | null {
      return this._fields['omitFromAddress'] ?? null;
  }

  setOmitFromAddress(value: null | boolean) {
    this._fields['omitFromAddress'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'omitFromAddress')) {
      data['omitFromAddress'] = this['omitFromAddress'];
    }

    return data;
  }
}

import { PatchServiceCredentialRequest } from '../models/patch-service-credential-request';

export default class PatchServiceCredential implements PatchServiceCredentialRequest {
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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }

    return data;
  }
}

import { PatchServiceCredentialRequest } from '../models/patch-service-credential-request';

export default class PatchPlaidCredential implements PatchServiceCredentialRequest {
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
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'clientId')) {
      this.setClientId(data['clientId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secretToken')) {
      this.setSecretToken(data['secretToken']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'useStripe')) {
      this.setUseStripe(data['useStripe']);
    }
  }


  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  setStatus(value: null | string) {
    this._fields['status'] = value;

    return this;
  }

  get websiteId(): string | null {
    return this._fields['websiteId'] ?? null;
  }
  
  getWebsiteId(): string | null {
      return this._fields['websiteId'] ?? null;
  }

  setWebsiteId(value: null | string) {
    this._fields['websiteId'] = value;

    return this;
  }

  get clientId(): string | null {
    return this._fields['clientId'] ?? null;
  }
  
  getClientId(): string | null {
      return this._fields['clientId'] ?? null;
  }

  setClientId(value: null | string) {
    this._fields['clientId'] = value;

    return this;
  }

  get secretToken(): string | null {
    return this._fields['secretToken'] ?? null;
  }
  
  getSecretToken(): string | null {
      return this._fields['secretToken'] ?? null;
  }

  setSecretToken(value: null | string) {
    this._fields['secretToken'] = value;

    return this;
  }

  get useStripe(): boolean | null {
    return this._fields['useStripe'] ?? null;
  }
  
  getUseStripe(): boolean | null {
      return this._fields['useStripe'] ?? null;
  }

  setUseStripe(value: null | boolean) {
    this._fields['useStripe'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteId')) {
      data['websiteId'] = this['websiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'clientId')) {
      data['clientId'] = this['clientId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretToken')) {
      data['secretToken'] = this['secretToken'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useStripe')) {
      data['useStripe'] = this['useStripe'];
    }

    return data;
  }
}

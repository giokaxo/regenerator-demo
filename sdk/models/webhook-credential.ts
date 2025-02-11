import WebhookAuthorizationFactory from '../factories/webhook-authorization-factory';
import { ServiceCredential } from '../models/service-credential';
import { WebhookAuthorization } from '../models/webhook-authorization';

export default class WebhookCredential implements ServiceCredential {
  get [ServiceCredential](): true {
    return true;
  }

  STATUS_ACTIVE = 'active';

  STATUS_INACTIVE = 'inactive';

  STATUS_DEACTIVATED = 'deactivated';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'hash')) {
      this.setHash(data['hash']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'deactivationTime')) {
      this.setDeactivationTime(data['deactivationTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'host')) {
      this.setHost(data['host']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'auth')) {
      this.setAuth(data['auth']);
    }
  }


  public get type() {
    return 'webhook';
  }

  public getType() {
    return 'webhook';
  }

  get id(): string | null {
    return this._fields['id'] ?? null;
  }
  
  getId(): string | null {
      return this._fields['id'] ?? null;
  }

  private setId(value: null | string) {
    this._fields['id'] = value;

    return this;
  }

  get hash(): string | null {
    return this._fields['hash'] ?? null;
  }
  
  getHash(): string | null {
      return this._fields['hash'] ?? null;
  }

  private setHash(value: null | string) {
    this._fields['hash'] = value;

    return this;
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

  get deactivationTime(): Date | null {
    return this._fields['deactivationTime'] ?? null;
  }
  
  getDeactivationTime(): Date | null {
      return this._fields['deactivationTime'] ?? null;
  }

  private setDeactivationTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['deactivationTime'] = value;

    return this;
  }

  get host(): string {
    return this._fields['host'];
  }
  
  getHost(): string {
      return this._fields['host'];
  }

  setHost(value: string) {
    this._fields['host'] = value;

    return this;
  }

  get auth(): WebhookAuthorization | null {
    return this._fields['auth'] ?? null;
  }
  
  getAuth(): WebhookAuthorization | null {
      return this._fields['auth'] ?? null;
  }

  setAuth(value: null | WebhookAuthorization | any) {
    if (value !== null && !(value[WebhookAuthorization])) {
      value = WebhookAuthorizationFactory.from(value);
    }

    this._fields['auth'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'webhook',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'hash')) {
      data['hash'] = this['hash'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'deactivationTime')) {
      data['deactivationTime'] = this['deactivationTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'host')) {
      data['host'] = this['host'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'auth')) {
      data['auth'] = this['auth']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

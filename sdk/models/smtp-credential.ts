import SmtpAuthorizationFactory from '../factories/smtp-authorization-factory';
import { ServiceCredential } from '../models/service-credential';
import { SmtpAuthorization } from '../models/smtp-authorization';
import ResourceLink from '../models/resource-link';

export default class SmtpCredential implements ServiceCredential {
  get [ServiceCredential](): true {
    return true;
  }

  STATUS_ACTIVE = 'active';

  STATUS_INACTIVE = 'inactive';

  STATUS_DEACTIVATED = 'deactivated';

  ENCRYPTION_NONE = 'none';

  ENCRYPTION_TLS = 'tls';

  ENCRYPTION_SSL = 'ssl';

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
    if (Object.prototype.hasOwnProperty.call(data, 'port')) {
      this.setPort(data['port']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'encryption')) {
      this.setEncryption(data['encryption']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'auth')) {
      this.setAuth(data['auth']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  public get type() {
    return 'smtp';
  }

  public getType() {
    return 'smtp';
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

  get port(): number | null {
    return this._fields['port'] ?? null;
  }
  
  getPort(): number | null {
      return this._fields['port'] ?? null;
  }

  setPort(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['port'] = value;

    return this;
  }

  get encryption(): string | null {
    return this._fields['encryption'] ?? null;
  }
  
  getEncryption(): string | null {
      return this._fields['encryption'] ?? null;
  }

  setEncryption(value: null | string) {
    this._fields['encryption'] = value;

    return this;
  }

  get auth(): SmtpAuthorization | null {
    return this._fields['auth'] ?? null;
  }
  
  getAuth(): SmtpAuthorization | null {
      return this._fields['auth'] ?? null;
  }

  setAuth(value: null | SmtpAuthorization | any) {
    if (value !== null && !(value[SmtpAuthorization])) {
      value = SmtpAuthorizationFactory.from(value);
    }

    this._fields['auth'] = value;

    return this;
  }

  get links(): Array<any> | null {
    return this._fields['_links'] ?? null;
  }
  
  getLinks(): Array<any> | null {
      return this._fields['_links'] ?? null;
  }

  private setLinks(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ResourceLink ? value : new ResourceLink(value),
    ) : null;

    this._fields['_links'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'smtp',
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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'port')) {
      data['port'] = this['port'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'encryption')) {
      data['encryption'] = this['encryption'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'auth')) {
      data['auth'] = this['auth']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}


export default class ApiTrackingUser {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'userId')) {
      this.setUserId(data['userId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'apiKeyId')) {
      this.setApiKeyId(data['apiKeyId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'email')) {
      this.setEmail(data['email']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'firstName')) {
      this.setFirstName(data['firstName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'lastName')) {
      this.setLastName(data['lastName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'ipAddress')) {
      this.setIpAddress(data['ipAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'userAgent')) {
      this.setUserAgent(data['userAgent']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'fingerprint')) {
      this.setFingerprint(data['fingerprint']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isSupport')) {
      this.setIsSupport(data['isSupport']);
    }
  }


  get userId(): string | null {
    return this._fields['userId'] ?? null;
  }
  
  getUserId(): string | null {
      return this._fields['userId'] ?? null;
  }

  setUserId(value: null | string) {
    this._fields['userId'] = value;

    return this;
  }

  get apiKeyId(): string | null {
    return this._fields['apiKeyId'] ?? null;
  }
  
  getApiKeyId(): string | null {
      return this._fields['apiKeyId'] ?? null;
  }

  setApiKeyId(value: null | string) {
    this._fields['apiKeyId'] = value;

    return this;
  }

  get email(): string | null {
    return this._fields['email'] ?? null;
  }
  
  getEmail(): string | null {
      return this._fields['email'] ?? null;
  }

  setEmail(value: null | string) {
    this._fields['email'] = value;

    return this;
  }

  get firstName(): string | null {
    return this._fields['firstName'] ?? null;
  }
  
  getFirstName(): string | null {
      return this._fields['firstName'] ?? null;
  }

  setFirstName(value: null | string) {
    this._fields['firstName'] = value;

    return this;
  }

  get lastName(): string | null {
    return this._fields['lastName'] ?? null;
  }
  
  getLastName(): string | null {
      return this._fields['lastName'] ?? null;
  }

  setLastName(value: null | string) {
    this._fields['lastName'] = value;

    return this;
  }

  get ipAddress(): string | null {
    return this._fields['ipAddress'] ?? null;
  }
  
  getIpAddress(): string | null {
      return this._fields['ipAddress'] ?? null;
  }

  setIpAddress(value: null | string) {
    this._fields['ipAddress'] = value;

    return this;
  }

  get userAgent(): string | null {
    return this._fields['userAgent'] ?? null;
  }
  
  getUserAgent(): string | null {
      return this._fields['userAgent'] ?? null;
  }

  setUserAgent(value: null | string) {
    this._fields['userAgent'] = value;

    return this;
  }

  get fingerprint(): string | null {
    return this._fields['fingerprint'] ?? null;
  }
  
  getFingerprint(): string | null {
      return this._fields['fingerprint'] ?? null;
  }

  setFingerprint(value: null | string) {
    this._fields['fingerprint'] = value;

    return this;
  }

  get isSupport(): boolean | null {
    return this._fields['isSupport'] ?? null;
  }
  
  getIsSupport(): boolean | null {
      return this._fields['isSupport'] ?? null;
  }

  setIsSupport(value: null | boolean) {
    this._fields['isSupport'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'userId')) {
      data['userId'] = this['userId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'apiKeyId')) {
      data['apiKeyId'] = this['apiKeyId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'email')) {
      data['email'] = this['email'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'firstName')) {
      data['firstName'] = this['firstName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'lastName')) {
      data['lastName'] = this['lastName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'ipAddress')) {
      data['ipAddress'] = this['ipAddress'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'userAgent')) {
      data['userAgent'] = this['userAgent'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'fingerprint')) {
      data['fingerprint'] = this['fingerprint'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isSupport')) {
      data['isSupport'] = this['isSupport'];
    }

    return data;
  }
}

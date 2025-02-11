
export default class Transaction3ds {
  VERSION_1_0_2 = '1.0.2';

  VERSION_2_1_0 = '2.1.0';

  VERSION_2_2_0 = '2.2.0';

  ENROLLED_YES = 'yes';

  ENROLLED_NO = 'no';

  ENROLLED_INVALID_CARD_TIMEOUT = 'invalid card/timeout';

  ENROLLED_UNAVAILABLE = 'unavailable';

  AUTHENTICATED_YES = 'yes';

  AUTHENTICATED_NO = 'no';

  AUTHENTICATED_NOT_APPLICABLE = 'not applicable';

  AUTHENTICATED_ATTEMPTED = 'attempted';

  LIABILITY_PROTECTED = 'protected';

  LIABILITY_NOT_PROTECTED = 'not protected';

  LIABILITY_PROTECTED_ATTEMPT_ = 'protected (attempt)';

  FLOW_FRICTIONLESS = 'frictionless';

  FLOW_CHALLENGE = 'challenge';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'server')) {
      this.setServer(data['server']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'version')) {
      this.setVersion(data['version']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'enrolled')) {
      this.setEnrolled(data['enrolled']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'authenticated')) {
      this.setAuthenticated(data['authenticated']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'liability')) {
      this.setLiability(data['liability']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'flow')) {
      this.setFlow(data['flow']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isDowngraded')) {
      this.setIsDowngraded(data['isDowngraded']);
    }
  }


  get server(): string | null {
    return this._fields['server'] ?? null;
  }
  
  getServer(): string | null {
      return this._fields['server'] ?? null;
  }

  setServer(value: null | string) {
    this._fields['server'] = value;

    return this;
  }

  get version(): string | null {
    return this._fields['version'] ?? null;
  }
  
  getVersion(): string | null {
      return this._fields['version'] ?? null;
  }

  setVersion(value: null | string) {
    this._fields['version'] = value;

    return this;
  }

  get enrolled(): string | null {
    return this._fields['enrolled'] ?? null;
  }
  
  getEnrolled(): string | null {
      return this._fields['enrolled'] ?? null;
  }

  setEnrolled(value: null | string) {
    this._fields['enrolled'] = value;

    return this;
  }

  get authenticated(): string | null {
    return this._fields['authenticated'] ?? null;
  }
  
  getAuthenticated(): string | null {
      return this._fields['authenticated'] ?? null;
  }

  setAuthenticated(value: null | string) {
    this._fields['authenticated'] = value;

    return this;
  }

  get liability(): string | null {
    return this._fields['liability'] ?? null;
  }
  
  getLiability(): string | null {
      return this._fields['liability'] ?? null;
  }

  setLiability(value: null | string) {
    this._fields['liability'] = value;

    return this;
  }

  get flow(): string | null {
    return this._fields['flow'] ?? null;
  }
  
  getFlow(): string | null {
      return this._fields['flow'] ?? null;
  }

  setFlow(value: null | string) {
    this._fields['flow'] = value;

    return this;
  }

  get isDowngraded(): boolean | null {
    return this._fields['isDowngraded'] ?? null;
  }
  
  getIsDowngraded(): boolean | null {
      return this._fields['isDowngraded'] ?? null;
  }

  setIsDowngraded(value: null | boolean) {
    this._fields['isDowngraded'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'server')) {
      data['server'] = this['server'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'version')) {
      data['version'] = this['version'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'enrolled')) {
      data['enrolled'] = this['enrolled'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'authenticated')) {
      data['authenticated'] = this['authenticated'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'liability')) {
      data['liability'] = this['liability'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'flow')) {
      data['flow'] = this['flow'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isDowngraded')) {
      data['isDowngraded'] = this['isDowngraded'];
    }

    return data;
  }
}

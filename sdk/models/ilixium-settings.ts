
export default class IlixiumSettings {
  PLATFORM_ITIX = 'itix';

  PLATFORM_TPG = 'tpg';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'useIpFrame')) {
      this.setUseIpFrame(data['useIpFrame']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'useCreditEndpoint')) {
      this.setUseCreditEndpoint(data['useCreditEndpoint']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'useStandaloneCreditEndpoint')) {
      this.setUseStandaloneCreditEndpoint(data['useStandaloneCreditEndpoint']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'platform')) {
      this.setPlatform(data['platform']);
    }
  }


  get useIpFrame(): boolean | null {
    return this._fields['useIpFrame'] ?? null;
  }
  
  getUseIpFrame(): boolean | null {
      return this._fields['useIpFrame'] ?? null;
  }

  setUseIpFrame(value: null | boolean) {
    this._fields['useIpFrame'] = value;

    return this;
  }

  get useCreditEndpoint(): boolean | null {
    return this._fields['useCreditEndpoint'] ?? null;
  }
  
  getUseCreditEndpoint(): boolean | null {
      return this._fields['useCreditEndpoint'] ?? null;
  }

  setUseCreditEndpoint(value: null | boolean) {
    this._fields['useCreditEndpoint'] = value;

    return this;
  }

  get useStandaloneCreditEndpoint(): boolean | null {
    return this._fields['useStandaloneCreditEndpoint'] ?? null;
  }
  
  getUseStandaloneCreditEndpoint(): boolean | null {
      return this._fields['useStandaloneCreditEndpoint'] ?? null;
  }

  setUseStandaloneCreditEndpoint(value: null | boolean) {
    this._fields['useStandaloneCreditEndpoint'] = value;

    return this;
  }

  get platform(): string | null {
    return this._fields['platform'] ?? null;
  }
  
  getPlatform(): string | null {
      return this._fields['platform'] ?? null;
  }

  setPlatform(value: null | string) {
    this._fields['platform'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useIpFrame')) {
      data['useIpFrame'] = this['useIpFrame'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useCreditEndpoint')) {
      data['useCreditEndpoint'] = this['useCreditEndpoint'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'useStandaloneCreditEndpoint')) {
      data['useStandaloneCreditEndpoint'] = this['useStandaloneCreditEndpoint'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'platform')) {
      data['platform'] = this['platform'];
    }

    return data;
  }
}

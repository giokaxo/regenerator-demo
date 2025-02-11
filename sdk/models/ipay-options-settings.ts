
export default class IpayOptionsSettings {
  SUBDOMAIN_MIGLITE = 'miglite';

  SUBDOMAIN_W88ASIAPAY = 'w88asiapay';

  PLATFORM_SOAP = 'SOAP';

  PLATFORM_TX_HANDLER = 'TxHandler';

  PLATFORM_SECURE_HOSTED = 'SecureHosted';

  CARD_TYPE_IDEAL = 'ideal';

  CARD_TYPE_IDEALQR = 'idealqr';

  CARD_TYPE_SOFORT = 'sofort';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'extraStep')) {
      this.setExtraStep(data['extraStep']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subdomain')) {
      this.setSubdomain(data['subdomain']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'platform')) {
      this.setPlatform(data['platform']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cardType')) {
      this.setCardType(data['cardType']);
    }
  }


  get extraStep(): boolean | null {
    return this._fields['extraStep'] ?? null;
  }
  
  getExtraStep(): boolean | null {
      return this._fields['extraStep'] ?? null;
  }

  setExtraStep(value: null | boolean) {
    this._fields['extraStep'] = value;

    return this;
  }

  get subdomain(): string | null {
    return this._fields['subdomain'] ?? null;
  }
  
  getSubdomain(): string | null {
      return this._fields['subdomain'] ?? null;
  }

  setSubdomain(value: null | string) {
    this._fields['subdomain'] = value;

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

  get cardType(): string | null {
    return this._fields['cardType'] ?? null;
  }
  
  getCardType(): string | null {
      return this._fields['cardType'] ?? null;
  }

  setCardType(value: null | string) {
    this._fields['cardType'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'extraStep')) {
      data['extraStep'] = this['extraStep'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subdomain')) {
      data['subdomain'] = this['subdomain'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'platform')) {
      data['platform'] = this['platform'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cardType')) {
      data['cardType'] = this['cardType'];
    }

    return data;
  }
}

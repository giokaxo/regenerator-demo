
export default class FinTecSystemsSettings {
  RECIPIENT_COUNTRY_AT = 'AT';

  RECIPIENT_COUNTRY_CH = 'CH';

  RECIPIENT_COUNTRY_DE = 'DE';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'recipientIBAN')) {
      this.setRecipientIBAN(data['recipientIBAN']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'recipientBIC')) {
      this.setRecipientBIC(data['recipientBIC']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'recipientCountry')) {
      this.setRecipientCountry(data['recipientCountry']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'recipientHolder')) {
      this.setRecipientHolder(data['recipientHolder']);
    }
  }


  get recipientIBAN(): string {
    return this._fields['recipientIBAN'];
  }
  
  getRecipientIBAN(): string {
      return this._fields['recipientIBAN'];
  }

  setRecipientIBAN(value: string) {
    this._fields['recipientIBAN'] = value;

    return this;
  }

  get recipientBIC(): string {
    return this._fields['recipientBIC'];
  }
  
  getRecipientBIC(): string {
      return this._fields['recipientBIC'];
  }

  setRecipientBIC(value: string) {
    this._fields['recipientBIC'] = value;

    return this;
  }

  get recipientCountry(): string {
    return this._fields['recipientCountry'];
  }
  
  getRecipientCountry(): string {
      return this._fields['recipientCountry'];
  }

  setRecipientCountry(value: string) {
    this._fields['recipientCountry'] = value;

    return this;
  }

  get recipientHolder(): string {
    return this._fields['recipientHolder'];
  }
  
  getRecipientHolder(): string {
      return this._fields['recipientHolder'];
  }

  setRecipientHolder(value: string) {
    this._fields['recipientHolder'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recipientIBAN')) {
      data['recipientIBAN'] = this['recipientIBAN'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recipientBIC')) {
      data['recipientBIC'] = this['recipientBIC'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recipientCountry')) {
      data['recipientCountry'] = this['recipientCountry'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'recipientHolder')) {
      data['recipientHolder'] = this['recipientHolder'];
    }

    return data;
  }
}

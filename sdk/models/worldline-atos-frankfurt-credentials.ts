
export default class WorldlineAtosFrankfurtCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'cardAcceptorIdCode')) {
      this.setCardAcceptorIdCode(data['cardAcceptorIdCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'acquiringInstitutionIdentificationCode')) {
      this.setAcquiringInstitutionIdentificationCode(data['acquiringInstitutionIdentificationCode']);
    }
  }


  get cardAcceptorIdCode(): string {
    return this._fields['cardAcceptorIdCode'];
  }
  
  getCardAcceptorIdCode(): string {
      return this._fields['cardAcceptorIdCode'];
  }

  setCardAcceptorIdCode(value: string) {
    this._fields['cardAcceptorIdCode'] = value;

    return this;
  }

  get acquiringInstitutionIdentificationCode(): string {
    return this._fields['acquiringInstitutionIdentificationCode'];
  }
  
  getAcquiringInstitutionIdentificationCode(): string {
      return this._fields['acquiringInstitutionIdentificationCode'];
  }

  setAcquiringInstitutionIdentificationCode(value: string) {
    this._fields['acquiringInstitutionIdentificationCode'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cardAcceptorIdCode')) {
      data['cardAcceptorIdCode'] = this['cardAcceptorIdCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'acquiringInstitutionIdentificationCode')) {
      data['acquiringInstitutionIdentificationCode'] = this['acquiringInstitutionIdentificationCode'];
    }

    return data;
  }
}

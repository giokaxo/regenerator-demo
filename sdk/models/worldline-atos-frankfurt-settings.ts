
export default class WorldlineAtosFrankfurtSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'cardAcceptorName')) {
      this.setCardAcceptorName(data['cardAcceptorName']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cardAcceptorLocation')) {
      this.setCardAcceptorLocation(data['cardAcceptorLocation']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cardAcceptorCountryCode')) {
      this.setCardAcceptorCountryCode(data['cardAcceptorCountryCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'terminalIds')) {
      this.setTerminalIds(data['terminalIds']);
    }
  }


  get cardAcceptorName(): string {
    return this._fields['cardAcceptorName'];
  }
  
  getCardAcceptorName(): string {
      return this._fields['cardAcceptorName'];
  }

  setCardAcceptorName(value: string) {
    this._fields['cardAcceptorName'] = value;

    return this;
  }

  get cardAcceptorLocation(): string {
    return this._fields['cardAcceptorLocation'];
  }
  
  getCardAcceptorLocation(): string {
      return this._fields['cardAcceptorLocation'];
  }

  setCardAcceptorLocation(value: string) {
    this._fields['cardAcceptorLocation'] = value;

    return this;
  }

  get cardAcceptorCountryCode(): string {
    return this._fields['cardAcceptorCountryCode'];
  }
  
  getCardAcceptorCountryCode(): string {
      return this._fields['cardAcceptorCountryCode'];
  }

  setCardAcceptorCountryCode(value: string) {
    this._fields['cardAcceptorCountryCode'] = value;

    return this;
  }

  get terminalIds(): string | null {
    return this._fields['terminalIds'] ?? null;
  }
  
  getTerminalIds(): string | null {
      return this._fields['terminalIds'] ?? null;
  }

  setTerminalIds(value: null | string) {
    this._fields['terminalIds'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cardAcceptorName')) {
      data['cardAcceptorName'] = this['cardAcceptorName'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cardAcceptorLocation')) {
      data['cardAcceptorLocation'] = this['cardAcceptorLocation'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cardAcceptorCountryCode')) {
      data['cardAcceptorCountryCode'] = this['cardAcceptorCountryCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'terminalIds')) {
      data['terminalIds'] = this['terminalIds'];
    }

    return data;
  }
}

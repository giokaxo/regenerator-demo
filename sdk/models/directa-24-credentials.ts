
export default class Directa24Credentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'x_login')) {
      this.setXLogin(data['x_login']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'x_tran_key')) {
      this.setXTranKey(data['x_tran_key']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'secret_key')) {
      this.setSecretKey(data['secret_key']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'web_pay_login')) {
      this.setWebPayLogin(data['web_pay_login']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'web_pay_tran_key')) {
      this.setWebPayTranKey(data['web_pay_tran_key']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cashout_login')) {
      this.setCashoutLogin(data['cashout_login']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cashout_password')) {
      this.setCashoutPassword(data['cashout_password']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'chargebackAccessKey')) {
      this.setChargebackAccessKey(data['chargebackAccessKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'chargebackSecretKey')) {
      this.setChargebackSecretKey(data['chargebackSecretKey']);
    }
  }


  get xLogin(): string {
    return this._fields['x_login'];
  }
  
  getXLogin(): string {
      return this._fields['x_login'];
  }

  setXLogin(value: string) {
    this._fields['x_login'] = value;

    return this;
  }

  get xTranKey(): string {
    return this._fields['x_tran_key'];
  }
  
  getXTranKey(): string {
      return this._fields['x_tran_key'];
  }

  setXTranKey(value: string) {
    this._fields['x_tran_key'] = value;

    return this;
  }

  get secretKey(): string {
    return this._fields['secret_key'];
  }
  
  getSecretKey(): string {
      return this._fields['secret_key'];
  }

  setSecretKey(value: string) {
    this._fields['secret_key'] = value;

    return this;
  }

  get webPayLogin(): string {
    return this._fields['web_pay_login'];
  }
  
  getWebPayLogin(): string {
      return this._fields['web_pay_login'];
  }

  setWebPayLogin(value: string) {
    this._fields['web_pay_login'] = value;

    return this;
  }

  get webPayTranKey(): string {
    return this._fields['web_pay_tran_key'];
  }
  
  getWebPayTranKey(): string {
      return this._fields['web_pay_tran_key'];
  }

  setWebPayTranKey(value: string) {
    this._fields['web_pay_tran_key'] = value;

    return this;
  }

  get cashoutLogin(): string | null {
    return this._fields['cashout_login'] ?? null;
  }
  
  getCashoutLogin(): string | null {
      return this._fields['cashout_login'] ?? null;
  }

  setCashoutLogin(value: null | string) {
    this._fields['cashout_login'] = value;

    return this;
  }

  get cashoutPassword(): string | null {
    return this._fields['cashout_password'] ?? null;
  }
  
  getCashoutPassword(): string | null {
      return this._fields['cashout_password'] ?? null;
  }

  setCashoutPassword(value: null | string) {
    this._fields['cashout_password'] = value;

    return this;
  }

  get chargebackAccessKey(): string | null {
    return this._fields['chargebackAccessKey'] ?? null;
  }
  
  getChargebackAccessKey(): string | null {
      return this._fields['chargebackAccessKey'] ?? null;
  }

  setChargebackAccessKey(value: null | string) {
    this._fields['chargebackAccessKey'] = value;

    return this;
  }

  get chargebackSecretKey(): string | null {
    return this._fields['chargebackSecretKey'] ?? null;
  }
  
  getChargebackSecretKey(): string | null {
      return this._fields['chargebackSecretKey'] ?? null;
  }

  setChargebackSecretKey(value: null | string) {
    this._fields['chargebackSecretKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'xLogin')) {
      data['x_login'] = this['xLogin'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'xTranKey')) {
      data['x_tran_key'] = this['xTranKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'secretKey')) {
      data['secret_key'] = this['secretKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'webPayLogin')) {
      data['web_pay_login'] = this['webPayLogin'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'webPayTranKey')) {
      data['web_pay_tran_key'] = this['webPayTranKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cashoutLogin')) {
      data['cashout_login'] = this['cashoutLogin'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cashoutPassword')) {
      data['cashout_password'] = this['cashoutPassword'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'chargebackAccessKey')) {
      data['chargebackAccessKey'] = this['chargebackAccessKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'chargebackSecretKey')) {
      data['chargebackSecretKey'] = this['chargebackSecretKey'];
    }

    return data;
  }
}

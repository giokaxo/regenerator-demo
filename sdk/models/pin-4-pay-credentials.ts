
export default class Pin4PayCredentials {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'username')) {
      this.setUsername(data['username']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'requestOrigin')) {
      this.setRequestOrigin(data['requestOrigin']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'codigoCliente')) {
      this.setCodigoCliente(data['codigoCliente']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'keyValue')) {
      this.setKeyValue(data['keyValue']);
    }
  }


  get username(): string {
    return this._fields['username'];
  }
  
  getUsername(): string {
      return this._fields['username'];
  }

  setUsername(value: string) {
    this._fields['username'] = value;

    return this;
  }

  get requestOrigin(): string {
    return this._fields['requestOrigin'];
  }
  
  getRequestOrigin(): string {
      return this._fields['requestOrigin'];
  }

  setRequestOrigin(value: string) {
    this._fields['requestOrigin'] = value;

    return this;
  }

  get codigoCliente(): string {
    return this._fields['codigoCliente'];
  }
  
  getCodigoCliente(): string {
      return this._fields['codigoCliente'];
  }

  setCodigoCliente(value: string) {
    this._fields['codigoCliente'] = value;

    return this;
  }

  get keyValue(): string {
    return this._fields['keyValue'];
  }
  
  getKeyValue(): string {
      return this._fields['keyValue'];
  }

  setKeyValue(value: string) {
    this._fields['keyValue'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'username')) {
      data['username'] = this['username'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'requestOrigin')) {
      data['requestOrigin'] = this['requestOrigin'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'codigoCliente')) {
      data['codigoCliente'] = this['codigoCliente'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'keyValue')) {
      data['keyValue'] = this['keyValue'];
    }

    return data;
  }
}

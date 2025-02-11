
export default class OrganizationQuestionnaire {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'role')) {
      this.setRole(data['role']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'monthlyTransactions')) {
      this.setMonthlyTransactions(data['monthlyTransactions']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'products')) {
      this.setProducts(data['products']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'integrationType')) {
      this.setIntegrationType(data['integrationType']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'launchTiming')) {
      this.setLaunchTiming(data['launchTiming']);
    }
  }


  get role(): string | null {
    return this._fields['role'] ?? null;
  }
  
  getRole(): string | null {
      return this._fields['role'] ?? null;
  }

  setRole(value: null | string) {
    this._fields['role'] = value;

    return this;
  }

  get monthlyTransactions(): string | null {
    return this._fields['monthlyTransactions'] ?? null;
  }
  
  getMonthlyTransactions(): string | null {
      return this._fields['monthlyTransactions'] ?? null;
  }

  setMonthlyTransactions(value: null | string) {
    this._fields['monthlyTransactions'] = value;

    return this;
  }

  get products(): Array<any> | null {
    return this._fields['products'] ?? null;
  }
  
  getProducts(): Array<any> | null {
      return this._fields['products'] ?? null;
  }

  setProducts(value: null | Array<any>) {
    this._fields['products'] = value;

    return this;
  }

  get integrationType(): string | null {
    return this._fields['integrationType'] ?? null;
  }
  
  getIntegrationType(): string | null {
      return this._fields['integrationType'] ?? null;
  }

  setIntegrationType(value: null | string) {
    this._fields['integrationType'] = value;

    return this;
  }

  get launchTiming(): string | null {
    return this._fields['launchTiming'] ?? null;
  }
  
  getLaunchTiming(): string | null {
      return this._fields['launchTiming'] ?? null;
  }

  setLaunchTiming(value: null | string) {
    this._fields['launchTiming'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'role')) {
      data['role'] = this['role'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'monthlyTransactions')) {
      data['monthlyTransactions'] = this['monthlyTransactions'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'products')) {
      data['products'] = this['products'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'integrationType')) {
      data['integrationType'] = this['integrationType'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'launchTiming')) {
      data['launchTiming'] = this['launchTiming'];
    }

    return data;
  }
}

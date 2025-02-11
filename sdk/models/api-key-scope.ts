
export default class ApiKeyScope {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'organizationId')) {
      this.setOrganizationId(data['organizationId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'productId')) {
      this.setProductId(data['productId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'planId')) {
      this.setPlanId(data['planId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customFieldName')) {
      this.setCustomFieldName(data['customFieldName']);
    }
  }


  get organizationId(): Array<any> | null {
    return this._fields['organizationId'] ?? null;
  }
  
  getOrganizationId(): Array<any> | null {
      return this._fields['organizationId'] ?? null;
  }

  setOrganizationId(value: null | Array<any>) {
    this._fields['organizationId'] = value;

    return this;
  }

  get productId(): Array<any> | null {
    return this._fields['productId'] ?? null;
  }
  
  getProductId(): Array<any> | null {
      return this._fields['productId'] ?? null;
  }

  setProductId(value: null | Array<any>) {
    this._fields['productId'] = value;

    return this;
  }

  get planId(): Array<any> | null {
    return this._fields['planId'] ?? null;
  }
  
  getPlanId(): Array<any> | null {
      return this._fields['planId'] ?? null;
  }

  setPlanId(value: null | Array<any>) {
    this._fields['planId'] = value;

    return this;
  }

  get customFieldName(): Array<any> | null {
    return this._fields['customFieldName'] ?? null;
  }
  
  getCustomFieldName(): Array<any> | null {
      return this._fields['customFieldName'] ?? null;
  }

  setCustomFieldName(value: null | Array<any>) {
    this._fields['customFieldName'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'organizationId')) {
      data['organizationId'] = this['organizationId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'productId')) {
      data['productId'] = this['productId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'planId')) {
      data['planId'] = this['planId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customFieldName')) {
      data['customFieldName'] = this['customFieldName'];
    }

    return data;
  }
}

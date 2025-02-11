
export default class DLocalSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'createInstallmentPlan')) {
      this.setCreateInstallmentPlan(data['createInstallmentPlan']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerDocumentCustomField')) {
      this.setCustomerDocumentCustomField(data['customerDocumentCustomField']);
    }
  }


  get createInstallmentPlan(): boolean | null {
    return this._fields['createInstallmentPlan'] ?? null;
  }
  
  getCreateInstallmentPlan(): boolean | null {
      return this._fields['createInstallmentPlan'] ?? null;
  }

  setCreateInstallmentPlan(value: null | boolean) {
    this._fields['createInstallmentPlan'] = value;

    return this;
  }

  get customerDocumentCustomField(): string | null {
    return this._fields['customerDocumentCustomField'] ?? null;
  }
  
  getCustomerDocumentCustomField(): string | null {
      return this._fields['customerDocumentCustomField'] ?? null;
  }

  setCustomerDocumentCustomField(value: null | string) {
    this._fields['customerDocumentCustomField'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createInstallmentPlan')) {
      data['createInstallmentPlan'] = this['createInstallmentPlan'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerDocumentCustomField')) {
      data['customerDocumentCustomField'] = this['customerDocumentCustomField'];
    }

    return data;
  }
}

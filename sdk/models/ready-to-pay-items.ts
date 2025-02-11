import { PostReadyToPay } from '../models/post-ready-to-pay';
import ContactObject from '../models/contact-object';
import RiskMetadata from '../models/risk-metadata';
import ReadyToPayItemsItems from '../models/ready-to-pay-items-items';

export default class ReadyToPayItems implements PostReadyToPay {
  get [PostReadyToPay](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'items')) {
      this.setItems(data['items']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billingAddress')) {
      this.setBillingAddress(data['billingAddress']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'riskMetadata')) {
      this.setRiskMetadata(data['riskMetadata']);
    }
  }


  get websiteId(): string {
    return this._fields['websiteId'];
  }
  
  getWebsiteId(): string {
      return this._fields['websiteId'];
  }

  setWebsiteId(value: string) {
    this._fields['websiteId'] = value;

    return this;
  }

  get items(): Array<any> {
    return this._fields['items'];
  }
  
  getItems(): Array<any> {
      return this._fields['items'];
  }

  setItems(value: Array<any>) {
    value = value.map(
      (value) => value instanceof ReadyToPayItemsItems ? value : new ReadyToPayItemsItems(value),
    );

    this._fields['items'] = value;

    return this;
  }

  get billingAddress(): ContactObject | null {
    return this._fields['billingAddress'] ?? null;
  }
  
  getBillingAddress(): ContactObject | null {
      return this._fields['billingAddress'] ?? null;
  }

  setBillingAddress(value: null | ContactObject | any) {
    if (value !== null && !(value instanceof ContactObject)) {
      value = new ContactObject(value);
    }

    this._fields['billingAddress'] = value;

    return this;
  }

  get riskMetadata(): RiskMetadata {
    return this._fields['riskMetadata'];
  }
  
  getRiskMetadata(): RiskMetadata {
      return this._fields['riskMetadata'];
  }

  setRiskMetadata(value: RiskMetadata | any) {
    if (!(value instanceof RiskMetadata)) {
      value = new RiskMetadata(value);
    }

    this._fields['riskMetadata'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteId')) {
      data['websiteId'] = this['websiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'items')) {
      data['items'] = this['items'].map(
          (readyToPayItemsItems: ReadyToPayItemsItems) => readyToPayItemsItems.jsonSerialize()
      );
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billingAddress')) {
      data['billingAddress'] = this['billingAddress']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'riskMetadata')) {
      data['riskMetadata'] = this['riskMetadata'].jsonSerialize();
    }

    return data;
  }
}

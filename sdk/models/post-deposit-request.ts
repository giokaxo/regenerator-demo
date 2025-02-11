import PostDepositRequestAmountLimits from '../models/post-deposit-request-amount-limits';
import PostDepositRequestCustomAmount from '../models/post-deposit-request-custom-amount';

export default class PostDepositRequest {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'websiteId')) {
      this.setWebsiteId(data['websiteId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'strategyId')) {
      this.setStrategyId(data['strategyId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'currency')) {
      this.setCurrency(data['currency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amounts')) {
      this.setAmounts(data['amounts']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amountLimits')) {
      this.setAmountLimits(data['amountLimits']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customAmount')) {
      this.setCustomAmount(data['customAmount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'redirectUrl')) {
      this.setRedirectUrl(data['redirectUrl']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'expirationTime')) {
      this.setExpirationTime(data['expirationTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customPropertySetId')) {
      this.setCustomPropertySetId(data['customPropertySetId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'notificationUrl')) {
      this.setNotificationUrl(data['notificationUrl']);
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

  get customerId(): string {
    return this._fields['customerId'];
  }
  
  getCustomerId(): string {
      return this._fields['customerId'];
  }

  setCustomerId(value: string) {
    this._fields['customerId'] = value;

    return this;
  }

  get strategyId(): string | null {
    return this._fields['strategyId'] ?? null;
  }
  
  getStrategyId(): string | null {
      return this._fields['strategyId'] ?? null;
  }

  setStrategyId(value: null | string) {
    this._fields['strategyId'] = value;

    return this;
  }

  get currency(): string {
    return this._fields['currency'];
  }
  
  getCurrency(): string {
      return this._fields['currency'];
  }

  setCurrency(value: string) {
    this._fields['currency'] = value;

    return this;
  }

  get amounts(): Array<any> | null {
    return this._fields['amounts'] ?? null;
  }
  
  getAmounts(): Array<any> | null {
      return this._fields['amounts'] ?? null;
  }

  setAmounts(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => typeof value === 'string' ? Number(value) : value,
    ) : null;

    this._fields['amounts'] = value;

    return this;
  }

  get amountLimits(): PostDepositRequestAmountLimits | null {
    return this._fields['amountLimits'] ?? null;
  }
  
  getAmountLimits(): PostDepositRequestAmountLimits | null {
      return this._fields['amountLimits'] ?? null;
  }

  setAmountLimits(value: null | PostDepositRequestAmountLimits | any) {
    if (value !== null && !(value instanceof PostDepositRequestAmountLimits)) {
      value = new PostDepositRequestAmountLimits(value);
    }

    this._fields['amountLimits'] = value;

    return this;
  }

  get customAmount(): PostDepositRequestCustomAmount | null {
    return this._fields['customAmount'] ?? null;
  }
  
  getCustomAmount(): PostDepositRequestCustomAmount | null {
      return this._fields['customAmount'] ?? null;
  }

  setCustomAmount(value: null | PostDepositRequestCustomAmount | any) {
    if (value !== null && !(value instanceof PostDepositRequestCustomAmount)) {
      value = new PostDepositRequestCustomAmount(value);
    }

    this._fields['customAmount'] = value;

    return this;
  }

  get redirectUrl(): string | null {
    return this._fields['redirectUrl'] ?? null;
  }
  
  getRedirectUrl(): string | null {
      return this._fields['redirectUrl'] ?? null;
  }

  setRedirectUrl(value: null | string) {
    this._fields['redirectUrl'] = value;

    return this;
  }

  get expirationTime(): Date | null {
    return this._fields['expirationTime'] ?? null;
  }
  
  getExpirationTime(): Date | null {
      return this._fields['expirationTime'] ?? null;
  }

  setExpirationTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['expirationTime'] = value;

    return this;
  }

  get customPropertySetId(): string | null {
    return this._fields['customPropertySetId'] ?? null;
  }
  
  getCustomPropertySetId(): string | null {
      return this._fields['customPropertySetId'] ?? null;
  }

  setCustomPropertySetId(value: null | string) {
    this._fields['customPropertySetId'] = value;

    return this;
  }

  get notificationUrl(): string | null {
    return this._fields['notificationUrl'] ?? null;
  }
  
  getNotificationUrl(): string | null {
      return this._fields['notificationUrl'] ?? null;
  }

  setNotificationUrl(value: null | string) {
    this._fields['notificationUrl'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'websiteId')) {
      data['websiteId'] = this['websiteId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'strategyId')) {
      data['strategyId'] = this['strategyId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'currency')) {
      data['currency'] = this['currency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amounts')) {
      data['amounts'] = this['amounts'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amountLimits')) {
      data['amountLimits'] = this['amountLimits']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customAmount')) {
      data['customAmount'] = this['customAmount']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'redirectUrl')) {
      data['redirectUrl'] = this['redirectUrl'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'expirationTime')) {
      data['expirationTime'] = this['expirationTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customPropertySetId')) {
      data['customPropertySetId'] = this['customPropertySetId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'notificationUrl')) {
      data['notificationUrl'] = this['notificationUrl'];
    }

    return data;
  }
}

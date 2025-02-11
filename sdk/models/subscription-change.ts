import SubscriptionChangeItems from '../models/subscription-change-items';

export default class SubscriptionChange {
  RENEWAL_POLICY_RESET = 'reset';

  RENEWAL_POLICY_RETAIN = 'retain';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'items')) {
      this.setItems(data['items']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'renewalPolicy')) {
      this.setRenewalPolicy(data['renewalPolicy']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'prorated')) {
      this.setProrated(data['prorated']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'effectiveTime')) {
      this.setEffectiveTime(data['effectiveTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'preview')) {
      this.setPreview(data['preview']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'keepTrial')) {
      this.setKeepTrial(data['keepTrial']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'ignoreRecurring')) {
      this.setIgnoreRecurring(data['ignoreRecurring']);
    }
  }


  get items(): Array<any> {
    return this._fields['items'];
  }
  
  getItems(): Array<any> {
      return this._fields['items'];
  }

  setItems(value: Array<any>) {
    value = value.map(
      (value) => value instanceof SubscriptionChangeItems ? value : new SubscriptionChangeItems(value),
    );

    this._fields['items'] = value;

    return this;
  }

  get renewalPolicy(): string {
    return this._fields['renewalPolicy'];
  }
  
  getRenewalPolicy(): string {
      return this._fields['renewalPolicy'];
  }

  setRenewalPolicy(value: string) {
    this._fields['renewalPolicy'] = value;

    return this;
  }

  get prorated(): boolean {
    return this._fields['prorated'];
  }
  
  getProrated(): boolean {
      return this._fields['prorated'];
  }

  setProrated(value: boolean) {
    this._fields['prorated'] = value;

    return this;
  }

  get effectiveTime(): Date | null {
    return this._fields['effectiveTime'] ?? null;
  }
  
  getEffectiveTime(): Date | null {
      return this._fields['effectiveTime'] ?? null;
  }

  setEffectiveTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['effectiveTime'] = value;

    return this;
  }

  get preview(): boolean | null {
    return this._fields['preview'] ?? null;
  }
  
  getPreview(): boolean | null {
      return this._fields['preview'] ?? null;
  }

  setPreview(value: null | boolean) {
    this._fields['preview'] = value;

    return this;
  }

  get keepTrial(): boolean | null {
    return this._fields['keepTrial'] ?? null;
  }
  
  getKeepTrial(): boolean | null {
      return this._fields['keepTrial'] ?? null;
  }

  setKeepTrial(value: null | boolean) {
    this._fields['keepTrial'] = value;

    return this;
  }

  get ignoreRecurring(): boolean | null {
    return this._fields['ignoreRecurring'] ?? null;
  }
  
  getIgnoreRecurring(): boolean | null {
      return this._fields['ignoreRecurring'] ?? null;
  }

  setIgnoreRecurring(value: null | boolean) {
    this._fields['ignoreRecurring'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'items')) {
      data['items'] = this['items'].map(
          (subscriptionChangeItems: SubscriptionChangeItems) => subscriptionChangeItems.jsonSerialize()
      );
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'renewalPolicy')) {
      data['renewalPolicy'] = this['renewalPolicy'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'prorated')) {
      data['prorated'] = this['prorated'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'effectiveTime')) {
      data['effectiveTime'] = this['effectiveTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'preview')) {
      data['preview'] = this['preview'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'keepTrial')) {
      data['keepTrial'] = this['keepTrial'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'ignoreRecurring')) {
      data['ignoreRecurring'] = this['ignoreRecurring'];
    }

    return data;
  }
}

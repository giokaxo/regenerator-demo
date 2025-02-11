import Money from '../models/money';
import ResourceLink from '../models/resource-link';

export default class RiskScoreSimulationTransaction {
  PRE_RESULT_CANCELED = 'canceled';

  PRE_RESULT_DECLINED = 'declined';

  PRE_RESULT_APPROVED = 'approved';

  RESULT_BLOCKED = 'blocked';

  RESULT_APPROVED = 'approved';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'transactionId')) {
      this.setTransactionId(data['transactionId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'customerId')) {
      this.setCustomerId(data['customerId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'simulationJobId')) {
      this.setSimulationJobId(data['simulationJobId']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'amount')) {
      this.setAmount(data['amount']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'preResult')) {
      this.setPreResult(data['preResult']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'result')) {
      this.setResult(data['result']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'date')) {
      this.setDate(data['date']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  get transactionId(): string | null {
    return this._fields['transactionId'] ?? null;
  }
  
  getTransactionId(): string | null {
      return this._fields['transactionId'] ?? null;
  }

  private setTransactionId(value: null | string) {
    this._fields['transactionId'] = value;

    return this;
  }

  get customerId(): string | null {
    return this._fields['customerId'] ?? null;
  }
  
  getCustomerId(): string | null {
      return this._fields['customerId'] ?? null;
  }

  private setCustomerId(value: null | string) {
    this._fields['customerId'] = value;

    return this;
  }

  get simulationJobId(): string | null {
    return this._fields['simulationJobId'] ?? null;
  }
  
  getSimulationJobId(): string | null {
      return this._fields['simulationJobId'] ?? null;
  }

  private setSimulationJobId(value: null | string) {
    this._fields['simulationJobId'] = value;

    return this;
  }

  get amount(): Money | null {
    return this._fields['amount'] ?? null;
  }
  
  getAmount(): Money | null {
      return this._fields['amount'] ?? null;
  }

  private setAmount(value: null | Money | any) {
    if (value !== null && !(value instanceof Money)) {
      value = new Money(value);
    }

    this._fields['amount'] = value;

    return this;
  }

  get preResult(): string | null {
    return this._fields['preResult'] ?? null;
  }
  
  getPreResult(): string | null {
      return this._fields['preResult'] ?? null;
  }

  private setPreResult(value: null | string) {
    this._fields['preResult'] = value;

    return this;
  }

  get result(): string | null {
    return this._fields['result'] ?? null;
  }
  
  getResult(): string | null {
      return this._fields['result'] ?? null;
  }

  private setResult(value: null | string) {
    this._fields['result'] = value;

    return this;
  }

  get date(): Date | null {
    return this._fields['date'] ?? null;
  }
  
  getDate(): Date | null {
      return this._fields['date'] ?? null;
  }

  private setDate(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['date'] = value;

    return this;
  }

  get links(): Array<any> | null {
    return this._fields['_links'] ?? null;
  }
  
  getLinks(): Array<any> | null {
      return this._fields['_links'] ?? null;
  }

  private setLinks(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ResourceLink ? value : new ResourceLink(value),
    ) : null;

    this._fields['_links'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'transactionId')) {
      data['transactionId'] = this['transactionId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'customerId')) {
      data['customerId'] = this['customerId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'simulationJobId')) {
      data['simulationJobId'] = this['simulationJobId'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'amount')) {
      data['amount'] = this['amount']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'preResult')) {
      data['preResult'] = this['preResult'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'result')) {
      data['result'] = this['result'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'date')) {
      data['date'] = this['date']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}

import ResourceLink from '../models/resource-link';

export default class GatewayAccountLimit {
  STATUS_MONITORING = 'monitoring';

  STATUS_REACHED = 'reached';

  FREQUENCY_DAILY = 'daily';

  FREQUENCY_MONTHLY = 'monthly';

  TYPE_MONEY = 'money';

  TYPE_COUNT = 'count';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'startTime')) {
      this.setStartTime(data['startTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'endTime')) {
      this.setEndTime(data['endTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'frequency')) {
      this.setFrequency(data['frequency']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'type')) {
      this.setType(data['type']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cap')) {
      this.setCap(data['cap']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'usage')) {
      this.setUsage(data['usage']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  get id(): string | null {
    return this._fields['id'] ?? null;
  }
  
  getId(): string | null {
      return this._fields['id'] ?? null;
  }

  private setId(value: null | string) {
    this._fields['id'] = value;

    return this;
  }

  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  private setStatus(value: null | string) {
    this._fields['status'] = value;

    return this;
  }

  get startTime(): Date | null {
    return this._fields['startTime'] ?? null;
  }
  
  getStartTime(): Date | null {
      return this._fields['startTime'] ?? null;
  }

  private setStartTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['startTime'] = value;

    return this;
  }

  get endTime(): Date | null {
    return this._fields['endTime'] ?? null;
  }
  
  getEndTime(): Date | null {
      return this._fields['endTime'] ?? null;
  }

  private setEndTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['endTime'] = value;

    return this;
  }

  get frequency(): string | null {
    return this._fields['frequency'] ?? null;
  }
  
  getFrequency(): string | null {
      return this._fields['frequency'] ?? null;
  }

  private setFrequency(value: null | string) {
    this._fields['frequency'] = value;

    return this;
  }

  get type(): string | null {
    return this._fields['type'] ?? null;
  }
  
  getType(): string | null {
      return this._fields['type'] ?? null;
  }

  private setType(value: null | string) {
    this._fields['type'] = value;

    return this;
  }

  get cap(): number {
    return this._fields['cap'];
  }
  
  getCap(): number {
      return this._fields['cap'];
  }

  setCap(value: number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['cap'] = value;

    return this;
  }

  get usage(): number | null {
    return this._fields['usage'] ?? null;
  }
  
  getUsage(): number | null {
      return this._fields['usage'] ?? null;
  }

  private setUsage(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['usage'] = value;

    return this;
  }

  get createdTime(): Date | null {
    return this._fields['createdTime'] ?? null;
  }
  
  getCreatedTime(): Date | null {
      return this._fields['createdTime'] ?? null;
  }

  private setCreatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['createdTime'] = value;

    return this;
  }

  get updatedTime(): Date | null {
    return this._fields['updatedTime'] ?? null;
  }
  
  getUpdatedTime(): Date | null {
      return this._fields['updatedTime'] ?? null;
  }

  private setUpdatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['updatedTime'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'startTime')) {
      data['startTime'] = this['startTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'endTime')) {
      data['endTime'] = this['endTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'frequency')) {
      data['frequency'] = this['frequency'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'type')) {
      data['type'] = this['type'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cap')) {
      data['cap'] = this['cap'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'usage')) {
      data['usage'] = this['usage'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}

import ResourceLink from '../models/resource-link';

export default class GatewayAccountDowntimeSchedule {
  STATUS_PENDING = 'pending';

  STATUS_ONGOING = 'ongoing';

  STATUS_FINISHED = 'finished';

  REASON_SCHEDULED_MAINTENANCE = 'scheduled-maintenance';

  REASON_DAILY_LIMIT_REACHED = 'daily-limit-reached';

  REASON_MONTHLY_LIMIT_REACHED = 'monthly-limit-reached';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'reason')) {
      this.setReason(data['reason']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'startTime')) {
      this.setStartTime(data['startTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'endTime')) {
      this.setEndTime(data['endTime']);
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

  get reason(): string | null {
    return this._fields['reason'] ?? null;
  }
  
  getReason(): string | null {
      return this._fields['reason'] ?? null;
  }

  private setReason(value: null | string) {
    this._fields['reason'] = value;

    return this;
  }

  get startTime(): Date {
    return this._fields['startTime'];
  }
  
  getStartTime(): Date {
      return this._fields['startTime'];
  }

  setStartTime(value: Date | string) {
    if (!(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['startTime'] = value;

    return this;
  }

  get endTime(): Date {
    return this._fields['endTime'];
  }
  
  getEndTime(): Date {
      return this._fields['endTime'];
  }

  setEndTime(value: Date | string) {
    if (!(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['endTime'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'reason')) {
      data['reason'] = this['reason'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'startTime')) {
      data['startTime'] = this['startTime'].toISOString();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'endTime')) {
      data['endTime'] = this['endTime'].toISOString();
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

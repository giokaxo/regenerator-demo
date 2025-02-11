import RuleAction from '../models/rule-action';

export default class Bind {
  STATUS_ACTIVE = 'active';

  STATUS_INACTIVE = 'inactive';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'name')) {
      this.setName(data['name']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'labels')) {
      this.setLabels(data['labels']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'filter')) {
      this.setFilter(data['filter']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'actions')) {
      this.setActions(data['actions']);
    }
  }


  get id(): string | null {
    return this._fields['id'] ?? null;
  }
  
  getId(): string | null {
      return this._fields['id'] ?? null;
  }

  setId(value: null | string) {
    this._fields['id'] = value;

    return this;
  }

  get name(): string {
    return this._fields['name'];
  }
  
  getName(): string {
      return this._fields['name'];
  }

  setName(value: string) {
    this._fields['name'] = value;

    return this;
  }

  get labels(): Array<any> | null {
    return this._fields['labels'] ?? null;
  }
  
  getLabels(): Array<any> | null {
      return this._fields['labels'] ?? null;
  }

  setLabels(value: null | Array<any>) {
    this._fields['labels'] = value;

    return this;
  }

  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  setStatus(value: null | string) {
    this._fields['status'] = value;

    return this;
  }

  get filter(): string | null {
    return this._fields['filter'] ?? null;
  }
  
  getFilter(): string | null {
      return this._fields['filter'] ?? null;
  }

  setFilter(value: null | string) {
    this._fields['filter'] = value;

    return this;
  }

  get actions(): Array<any> {
    return this._fields['actions'];
  }
  
  getActions(): Array<any> {
      return this._fields['actions'];
  }

  setActions(value: Array<any>) {
    value = value.map(
      (value) => value instanceof RuleAction ? value : new RuleAction(value),
    );

    this._fields['actions'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'name')) {
      data['name'] = this['name'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'labels')) {
      data['labels'] = this['labels'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'filter')) {
      data['filter'] = this['filter'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'actions')) {
      data['actions'] = this['actions'].map(
          (ruleAction: RuleAction) => ruleAction.jsonSerialize()
      );
    }

    return data;
  }
}

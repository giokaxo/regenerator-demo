import RulesEmailNotificationTemplates from '../models/rules-email-notification-templates';

export default class RulesEmailNotification {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'version')) {
      this.setVersion(data['version']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'weight')) {
      this.setWeight(data['weight']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'templates')) {
      this.setTemplates(data['templates']);
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

  get version(): string | null {
    return this._fields['version'] ?? null;
  }
  
  getVersion(): string | null {
      return this._fields['version'] ?? null;
  }

  setVersion(value: null | string) {
    this._fields['version'] = value;

    return this;
  }

  get weight(): number | null {
    return this._fields['weight'] ?? null;
  }
  
  getWeight(): number | null {
      return this._fields['weight'] ?? null;
  }

  setWeight(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['weight'] = value;

    return this;
  }

  get templates(): Array<any> {
    return this._fields['templates'];
  }
  
  getTemplates(): Array<any> {
      return this._fields['templates'];
  }

  setTemplates(value: Array<any>) {
    value = value.map(
      (value) => value instanceof RulesEmailNotificationTemplates ? value : new RulesEmailNotificationTemplates(value),
    );

    this._fields['templates'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'version')) {
      data['version'] = this['version'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'weight')) {
      data['weight'] = this['weight'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'templates')) {
      data['templates'] = this['templates'].map(
          (rulesEmailNotificationTemplates: RulesEmailNotificationTemplates) => rulesEmailNotificationTemplates.jsonSerialize()
      );
    }

    return data;
  }
}

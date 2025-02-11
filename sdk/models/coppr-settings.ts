
export default class CopprSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'rebillyPublishableKey')) {
      this.setRebillyPublishableKey(data['rebillyPublishableKey']);
    }
  }


  get rebillyPublishableKey(): string | null {
    return this._fields['rebillyPublishableKey'] ?? null;
  }
  
  getRebillyPublishableKey(): string | null {
      return this._fields['rebillyPublishableKey'] ?? null;
  }

  setRebillyPublishableKey(value: null | string) {
    this._fields['rebillyPublishableKey'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'rebillyPublishableKey')) {
      data['rebillyPublishableKey'] = this['rebillyPublishableKey'];
    }

    return data;
  }
}


export default class QuickBooksOnlineCustomerExternalServiceSettings {
  SYNC_MANUALLY = 'manually';

  SYNC_WHEN_USED = 'when-used';

  SYNC_ALWAYS = 'always';

  DISPLAY_NAME_ID = 'id';

  DISPLAY_NAME_FULL_NAME = 'full-name';

  DISPLAY_NAME_ORGANIZATION_NAME = 'organization-name';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'sync')) {
      this.setSync(data['sync']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'displayName')) {
      this.setDisplayName(data['displayName']);
    }
  }


  get sync(): string | null {
    return this._fields['sync'] ?? null;
  }
  
  getSync(): string | null {
      return this._fields['sync'] ?? null;
  }

  setSync(value: null | string) {
    this._fields['sync'] = value;

    return this;
  }

  get displayName(): string | null {
    return this._fields['displayName'] ?? null;
  }
  
  getDisplayName(): string | null {
      return this._fields['displayName'] ?? null;
  }

  setDisplayName(value: null | string) {
    this._fields['displayName'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sync')) {
      data['sync'] = this['sync'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'displayName')) {
      data['displayName'] = this['displayName'];
    }

    return data;
  }
}

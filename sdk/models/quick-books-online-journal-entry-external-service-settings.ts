
export default class QuickBooksOnlineJournalEntryExternalServiceSettings {
  SYNC_MANUALLY = 'manually';

  SYNC_ALWAYS = 'always';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'sync')) {
      this.setSync(data['sync']);
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

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sync')) {
      data['sync'] = this['sync'];
    }

    return data;
  }
}

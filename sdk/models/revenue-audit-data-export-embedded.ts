import File from '../models/file';
import User from '../models/user';

export default class RevenueAuditDataExportEmbedded {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'file')) {
      this.setFile(data['file']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'user')) {
      this.setUser(data['user']);
    }
  }


  get file(): File | null {
    return this._fields['file'] ?? null;
  }
  
  getFile(): File | null {
      return this._fields['file'] ?? null;
  }

  setFile(value: null | File | any) {
    if (value !== null && !(value instanceof File)) {
      value = new File(value);
    }

    this._fields['file'] = value;

    return this;
  }

  get user(): User | null {
    return this._fields['user'] ?? null;
  }
  
  getUser(): User | null {
      return this._fields['user'] ?? null;
  }

  setUser(value: null | User | any) {
    if (value !== null && !(value instanceof User)) {
      value = new User(value);
    }

    this._fields['user'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'file')) {
      data['file'] = this['file']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'user')) {
      data['user'] = this['user']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

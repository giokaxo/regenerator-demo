import AmlSettingsConfidenceDob from '../models/aml-settings-confidence-dob';
import AmlSettingsConfidenceNoDob from '../models/aml-settings-confidence-no-dob';
import AmlSettingsConfidenceYob from '../models/aml-settings-confidence-yob';
import AmlSettingsConfidenceInexactYob from '../models/aml-settings-confidence-inexact-yob';

export default class AmlSettingsConfidence {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'dob')) {
      this.setDob(data['dob']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'noDob')) {
      this.setNoDob(data['noDob']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'yob')) {
      this.setYob(data['yob']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'inexactYob')) {
      this.setInexactYob(data['inexactYob']);
    }
  }


  get dob(): AmlSettingsConfidenceDob | null {
    return this._fields['dob'] ?? null;
  }
  
  getDob(): AmlSettingsConfidenceDob | null {
      return this._fields['dob'] ?? null;
  }

  setDob(value: null | AmlSettingsConfidenceDob | any) {
    if (value !== null && !(value instanceof AmlSettingsConfidenceDob)) {
      value = new AmlSettingsConfidenceDob(value);
    }

    this._fields['dob'] = value;

    return this;
  }

  get noDob(): AmlSettingsConfidenceNoDob | null {
    return this._fields['noDob'] ?? null;
  }
  
  getNoDob(): AmlSettingsConfidenceNoDob | null {
      return this._fields['noDob'] ?? null;
  }

  setNoDob(value: null | AmlSettingsConfidenceNoDob | any) {
    if (value !== null && !(value instanceof AmlSettingsConfidenceNoDob)) {
      value = new AmlSettingsConfidenceNoDob(value);
    }

    this._fields['noDob'] = value;

    return this;
  }

  get yob(): AmlSettingsConfidenceYob | null {
    return this._fields['yob'] ?? null;
  }
  
  getYob(): AmlSettingsConfidenceYob | null {
      return this._fields['yob'] ?? null;
  }

  setYob(value: null | AmlSettingsConfidenceYob | any) {
    if (value !== null && !(value instanceof AmlSettingsConfidenceYob)) {
      value = new AmlSettingsConfidenceYob(value);
    }

    this._fields['yob'] = value;

    return this;
  }

  get inexactYob(): AmlSettingsConfidenceInexactYob | null {
    return this._fields['inexactYob'] ?? null;
  }
  
  getInexactYob(): AmlSettingsConfidenceInexactYob | null {
      return this._fields['inexactYob'] ?? null;
  }

  setInexactYob(value: null | AmlSettingsConfidenceInexactYob | any) {
    if (value !== null && !(value instanceof AmlSettingsConfidenceInexactYob)) {
      value = new AmlSettingsConfidenceInexactYob(value);
    }

    this._fields['inexactYob'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'dob')) {
      data['dob'] = this['dob']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'noDob')) {
      data['noDob'] = this['noDob']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'yob')) {
      data['yob'] = this['yob']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'inexactYob')) {
      data['inexactYob'] = this['inexactYob']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

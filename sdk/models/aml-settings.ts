import AmlSettingsConfidence from '../models/aml-settings-confidence';
import AmlSettingsPriority from '../models/aml-settings-priority';

export default class AmlSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'confidence')) {
      this.setConfidence(data['confidence']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'priority')) {
      this.setPriority(data['priority']);
    }
  }


  get confidence(): AmlSettingsConfidence | null {
    return this._fields['confidence'] ?? null;
  }
  
  getConfidence(): AmlSettingsConfidence | null {
      return this._fields['confidence'] ?? null;
  }

  setConfidence(value: null | AmlSettingsConfidence | any) {
    if (value !== null && !(value instanceof AmlSettingsConfidence)) {
      value = new AmlSettingsConfidence(value);
    }

    this._fields['confidence'] = value;

    return this;
  }

  get priority(): AmlSettingsPriority | null {
    return this._fields['priority'] ?? null;
  }
  
  getPriority(): AmlSettingsPriority | null {
      return this._fields['priority'] ?? null;
  }

  setPriority(value: null | AmlSettingsPriority | any) {
    if (value !== null && !(value instanceof AmlSettingsPriority)) {
      value = new AmlSettingsPriority(value);
    }

    this._fields['priority'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'confidence')) {
      data['confidence'] = this['confidence']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'priority')) {
      data['priority'] = this['priority']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

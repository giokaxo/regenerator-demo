import AmlCompoundConfidence from '../models/aml-compound-confidence';

export default class AmlSettingsConfidenceInexactYob {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'exactMatch')) {
      this.setExactMatch(data['exactMatch']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'inexactMatch')) {
      this.setInexactMatch(data['inexactMatch']);
    }
  }


  get exactMatch(): AmlCompoundConfidence | null {
    return this._fields['exactMatch'] ?? null;
  }
  
  getExactMatch(): AmlCompoundConfidence | null {
      return this._fields['exactMatch'] ?? null;
  }

  setExactMatch(value: null | AmlCompoundConfidence | any) {
    if (value !== null && !(value instanceof AmlCompoundConfidence)) {
      value = new AmlCompoundConfidence(value);
    }

    this._fields['exactMatch'] = value;

    return this;
  }

  get inexactMatch(): AmlCompoundConfidence | null {
    return this._fields['inexactMatch'] ?? null;
  }
  
  getInexactMatch(): AmlCompoundConfidence | null {
      return this._fields['inexactMatch'] ?? null;
  }

  setInexactMatch(value: null | AmlCompoundConfidence | any) {
    if (value !== null && !(value instanceof AmlCompoundConfidence)) {
      value = new AmlCompoundConfidence(value);
    }

    this._fields['inexactMatch'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'exactMatch')) {
      data['exactMatch'] = this['exactMatch']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'inexactMatch')) {
      data['inexactMatch'] = this['inexactMatch']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

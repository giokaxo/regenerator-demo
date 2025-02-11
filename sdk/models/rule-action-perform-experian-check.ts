import RuleAction from '../models/rule-action';

export default class RuleActionPerformExperianCheck extends RuleAction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'perform-experian-check',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'experianCredentialHash')) {
      this.setExperianCredentialHash(data['experianCredentialHash']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tagOnApprove')) {
      this.setTagOnApprove(data['tagOnApprove']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tagOnReject')) {
      this.setTagOnReject(data['tagOnReject']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tagOnUnknown')) {
      this.setTagOnUnknown(data['tagOnUnknown']);
    }
  }


  get experianCredentialHash(): string {
    return this._fields['experianCredentialHash'];
  }
  
  getExperianCredentialHash(): string {
      return this._fields['experianCredentialHash'];
  }

  setExperianCredentialHash(value: string) {
    this._fields['experianCredentialHash'] = value;

    return this;
  }

  get tagOnApprove(): string | null {
    return this._fields['tagOnApprove'] ?? null;
  }
  
  getTagOnApprove(): string | null {
      return this._fields['tagOnApprove'] ?? null;
  }

  setTagOnApprove(value: null | string) {
    this._fields['tagOnApprove'] = value;

    return this;
  }

  get tagOnReject(): string | null {
    return this._fields['tagOnReject'] ?? null;
  }
  
  getTagOnReject(): string | null {
      return this._fields['tagOnReject'] ?? null;
  }

  setTagOnReject(value: null | string) {
    this._fields['tagOnReject'] = value;

    return this;
  }

  get tagOnUnknown(): string | null {
    return this._fields['tagOnUnknown'] ?? null;
  }
  
  getTagOnUnknown(): string | null {
      return this._fields['tagOnUnknown'] ?? null;
  }

  setTagOnUnknown(value: null | string) {
    this._fields['tagOnUnknown'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'experianCredentialHash')) {
      data['experianCredentialHash'] = this['experianCredentialHash'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tagOnApprove')) {
      data['tagOnApprove'] = this['tagOnApprove'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tagOnReject')) {
      data['tagOnReject'] = this['tagOnReject'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tagOnUnknown')) {
      data['tagOnUnknown'] = this['tagOnUnknown'];
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

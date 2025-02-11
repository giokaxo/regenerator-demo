import RuleAction from '../models/rule-action';

export default class RuleActionTagOrUntagCustomer extends RuleAction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'tag-or-untag-customer',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'addingTags')) {
      this.setAddingTags(data['addingTags']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'removingTags')) {
      this.setRemovingTags(data['removingTags']);
    }
  }


  get addingTags(): Array<any> {
    return this._fields['addingTags'];
  }
  
  getAddingTags(): Array<any> {
      return this._fields['addingTags'];
  }

  setAddingTags(value: Array<any>) {
    this._fields['addingTags'] = value;

    return this;
  }

  get removingTags(): Array<any> {
    return this._fields['removingTags'];
  }
  
  getRemovingTags(): Array<any> {
      return this._fields['removingTags'];
  }

  setRemovingTags(value: Array<any>) {
    this._fields['removingTags'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'addingTags')) {
      data['addingTags'] = this['addingTags'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'removingTags')) {
      data['removingTags'] = this['removingTags'];
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

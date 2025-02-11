import AmlSettingsPriorityPep from '../models/aml-settings-priority-pep';
import AmlSettingsPriorityEnforcements from '../models/aml-settings-priority-enforcements';
import AmlSettingsPriorityStateOwnedEnterprise from '../models/aml-settings-priority-state-owned-enterprise';
import AmlSettingsPrioritySanctions from '../models/aml-settings-priority-sanctions';
import AmlSettingsPriorityAdverseMedia from '../models/aml-settings-priority-adverse-media';

export default class AmlSettingsPriority {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'pep')) {
      this.setPep(data['pep']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'enforcements')) {
      this.setEnforcements(data['enforcements']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'stateOwnedEnterprise')) {
      this.setStateOwnedEnterprise(data['stateOwnedEnterprise']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sanctions')) {
      this.setSanctions(data['sanctions']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'adverseMedia')) {
      this.setAdverseMedia(data['adverseMedia']);
    }
  }


  get pep(): AmlSettingsPriorityPep | null {
    return this._fields['pep'] ?? null;
  }
  
  getPep(): AmlSettingsPriorityPep | null {
      return this._fields['pep'] ?? null;
  }

  setPep(value: null | AmlSettingsPriorityPep | any) {
    if (value !== null && !(value instanceof AmlSettingsPriorityPep)) {
      value = new AmlSettingsPriorityPep(value);
    }

    this._fields['pep'] = value;

    return this;
  }

  get enforcements(): AmlSettingsPriorityEnforcements | null {
    return this._fields['enforcements'] ?? null;
  }
  
  getEnforcements(): AmlSettingsPriorityEnforcements | null {
      return this._fields['enforcements'] ?? null;
  }

  setEnforcements(value: null | AmlSettingsPriorityEnforcements | any) {
    if (value !== null && !(value instanceof AmlSettingsPriorityEnforcements)) {
      value = new AmlSettingsPriorityEnforcements(value);
    }

    this._fields['enforcements'] = value;

    return this;
  }

  get stateOwnedEnterprise(): AmlSettingsPriorityStateOwnedEnterprise | null {
    return this._fields['stateOwnedEnterprise'] ?? null;
  }
  
  getStateOwnedEnterprise(): AmlSettingsPriorityStateOwnedEnterprise | null {
      return this._fields['stateOwnedEnterprise'] ?? null;
  }

  setStateOwnedEnterprise(value: null | AmlSettingsPriorityStateOwnedEnterprise | any) {
    if (value !== null && !(value instanceof AmlSettingsPriorityStateOwnedEnterprise)) {
      value = new AmlSettingsPriorityStateOwnedEnterprise(value);
    }

    this._fields['stateOwnedEnterprise'] = value;

    return this;
  }

  get sanctions(): AmlSettingsPrioritySanctions | null {
    return this._fields['sanctions'] ?? null;
  }
  
  getSanctions(): AmlSettingsPrioritySanctions | null {
      return this._fields['sanctions'] ?? null;
  }

  setSanctions(value: null | AmlSettingsPrioritySanctions | any) {
    if (value !== null && !(value instanceof AmlSettingsPrioritySanctions)) {
      value = new AmlSettingsPrioritySanctions(value);
    }

    this._fields['sanctions'] = value;

    return this;
  }

  get adverseMedia(): AmlSettingsPriorityAdverseMedia | null {
    return this._fields['adverseMedia'] ?? null;
  }
  
  getAdverseMedia(): AmlSettingsPriorityAdverseMedia | null {
      return this._fields['adverseMedia'] ?? null;
  }

  setAdverseMedia(value: null | AmlSettingsPriorityAdverseMedia | any) {
    if (value !== null && !(value instanceof AmlSettingsPriorityAdverseMedia)) {
      value = new AmlSettingsPriorityAdverseMedia(value);
    }

    this._fields['adverseMedia'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'pep')) {
      data['pep'] = this['pep']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'enforcements')) {
      data['enforcements'] = this['enforcements']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'stateOwnedEnterprise')) {
      data['stateOwnedEnterprise'] = this['stateOwnedEnterprise']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sanctions')) {
      data['sanctions'] = this['sanctions']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'adverseMedia')) {
      data['adverseMedia'] = this['adverseMedia']?.jsonSerialize() ?? null;
    }

    return data;
  }
}

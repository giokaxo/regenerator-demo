import OrganizationSettingsDefaultTaxCalculator from '../models/organization-settings-default-tax-calculator';
import OrganizationSettingsBilling from '../models/organization-settings-billing';
import OrganizationSettingsNotifications from '../models/organization-settings-notifications';
import OrganizationSettingsTaxLocations from '../models/organization-settings-tax-locations';

export default class OrganizationSettings {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'defaultTaxCalculator')) {
      this.setDefaultTaxCalculator(data['defaultTaxCalculator']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'billing')) {
      this.setBilling(data['billing']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'taxLocations')) {
      this.setTaxLocations(data['taxLocations']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'notifications')) {
      this.setNotifications(data['notifications']);
    }
  }


  get defaultTaxCalculator(): OrganizationSettingsDefaultTaxCalculator | null {
    return this._fields['defaultTaxCalculator'] ?? null;
  }
  
  getDefaultTaxCalculator(): OrganizationSettingsDefaultTaxCalculator | null {
      return this._fields['defaultTaxCalculator'] ?? null;
  }

  setDefaultTaxCalculator(value: null | OrganizationSettingsDefaultTaxCalculator | any) {
    if (value !== null && !(value instanceof OrganizationSettingsDefaultTaxCalculator)) {
      value = new OrganizationSettingsDefaultTaxCalculator(value);
    }

    this._fields['defaultTaxCalculator'] = value;

    return this;
  }

  get billing(): OrganizationSettingsBilling | null {
    return this._fields['billing'] ?? null;
  }
  
  getBilling(): OrganizationSettingsBilling | null {
      return this._fields['billing'] ?? null;
  }

  setBilling(value: null | OrganizationSettingsBilling | any) {
    if (value !== null && !(value instanceof OrganizationSettingsBilling)) {
      value = new OrganizationSettingsBilling(value);
    }

    this._fields['billing'] = value;

    return this;
  }

  get taxLocations(): Array<any> | null {
    return this._fields['taxLocations'] ?? null;
  }
  
  getTaxLocations(): Array<any> | null {
      return this._fields['taxLocations'] ?? null;
  }

  setTaxLocations(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof OrganizationSettingsTaxLocations ? value : new OrganizationSettingsTaxLocations(value),
    ) : null;

    this._fields['taxLocations'] = value;

    return this;
  }

  get notifications(): OrganizationSettingsNotifications | null {
    return this._fields['notifications'] ?? null;
  }
  
  getNotifications(): OrganizationSettingsNotifications | null {
      return this._fields['notifications'] ?? null;
  }

  setNotifications(value: null | OrganizationSettingsNotifications | any) {
    if (value !== null && !(value instanceof OrganizationSettingsNotifications)) {
      value = new OrganizationSettingsNotifications(value);
    }

    this._fields['notifications'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'defaultTaxCalculator')) {
      data['defaultTaxCalculator'] = this['defaultTaxCalculator']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'billing')) {
      data['billing'] = this['billing']?.jsonSerialize() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'taxLocations')) {
      data['taxLocations'] = this['taxLocations'] !== null
          ? this._fields['taxLocations'].map((organizationSettingsTaxLocations: OrganizationSettingsTaxLocations) => organizationSettingsTaxLocations.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'notifications')) {
      data['notifications'] = this['notifications']?.jsonSerialize() ?? null;
    }

    return data;
  }
}


export default class OrganizationSettingsNotifications {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'notifyOnUserAccessChanges')) {
      this.setNotifyOnUserAccessChanges(data['notifyOnUserAccessChanges']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'notifyOnApiKeyAccessChanges')) {
      this.setNotifyOnApiKeyAccessChanges(data['notifyOnApiKeyAccessChanges']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'notificationEmailAddresses')) {
      this.setNotificationEmailAddresses(data['notificationEmailAddresses']);
    }
  }


  get notifyOnUserAccessChanges(): boolean | null {
    return this._fields['notifyOnUserAccessChanges'] ?? null;
  }
  
  getNotifyOnUserAccessChanges(): boolean | null {
      return this._fields['notifyOnUserAccessChanges'] ?? null;
  }

  setNotifyOnUserAccessChanges(value: null | boolean) {
    this._fields['notifyOnUserAccessChanges'] = value;

    return this;
  }

  get notifyOnApiKeyAccessChanges(): boolean | null {
    return this._fields['notifyOnApiKeyAccessChanges'] ?? null;
  }
  
  getNotifyOnApiKeyAccessChanges(): boolean | null {
      return this._fields['notifyOnApiKeyAccessChanges'] ?? null;
  }

  setNotifyOnApiKeyAccessChanges(value: null | boolean) {
    this._fields['notifyOnApiKeyAccessChanges'] = value;

    return this;
  }

  get notificationEmailAddresses(): Array<any> | null {
    return this._fields['notificationEmailAddresses'] ?? null;
  }
  
  getNotificationEmailAddresses(): Array<any> | null {
      return this._fields['notificationEmailAddresses'] ?? null;
  }

  setNotificationEmailAddresses(value: null | Array<any>) {
    this._fields['notificationEmailAddresses'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'notifyOnUserAccessChanges')) {
      data['notifyOnUserAccessChanges'] = this['notifyOnUserAccessChanges'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'notifyOnApiKeyAccessChanges')) {
      data['notifyOnApiKeyAccessChanges'] = this['notifyOnApiKeyAccessChanges'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'notificationEmailAddresses')) {
      data['notificationEmailAddresses'] = this['notificationEmailAddresses'];
    }

    return data;
  }
}

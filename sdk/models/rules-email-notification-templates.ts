import RulesEmailNotificationTemplatesAttachments from '../models/rules-email-notification-templates-attachments';

export default class RulesEmailNotificationTemplates {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'locale')) {
      this.setLocale(data['locale']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'from')) {
      this.setFrom(data['from']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'to')) {
      this.setTo(data['to']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'cc')) {
      this.setCc(data['cc']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'bcc')) {
      this.setBcc(data['bcc']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'subject')) {
      this.setSubject(data['subject']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'text')) {
      this.setText(data['text']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'html')) {
      this.setHtml(data['html']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'editor')) {
      this.setEditor(data['editor']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'attachments')) {
      this.setAttachments(data['attachments']);
    }
  }


  get locale(): string {
    return this._fields['locale'];
  }
  
  getLocale(): string {
      return this._fields['locale'];
  }

  setLocale(value: string) {
    this._fields['locale'] = value;

    return this;
  }

  get from(): string {
    return this._fields['from'];
  }
  
  getFrom(): string {
      return this._fields['from'];
  }

  setFrom(value: string) {
    this._fields['from'] = value;

    return this;
  }

  get to(): Array<any> {
    return this._fields['to'];
  }
  
  getTo(): Array<any> {
      return this._fields['to'];
  }

  setTo(value: Array<any>) {
    this._fields['to'] = value;

    return this;
  }

  get cc(): Array<any> | null {
    return this._fields['cc'] ?? null;
  }
  
  getCc(): Array<any> | null {
      return this._fields['cc'] ?? null;
  }

  setCc(value: null | Array<any>) {
    this._fields['cc'] = value;

    return this;
  }

  get bcc(): Array<any> | null {
    return this._fields['bcc'] ?? null;
  }
  
  getBcc(): Array<any> | null {
      return this._fields['bcc'] ?? null;
  }

  setBcc(value: null | Array<any>) {
    this._fields['bcc'] = value;

    return this;
  }

  get subject(): string {
    return this._fields['subject'];
  }
  
  getSubject(): string {
      return this._fields['subject'];
  }

  setSubject(value: string) {
    this._fields['subject'] = value;

    return this;
  }

  get text(): string {
    return this._fields['text'];
  }
  
  getText(): string {
      return this._fields['text'];
  }

  setText(value: string) {
    this._fields['text'] = value;

    return this;
  }

  get html(): string {
    return this._fields['html'];
  }
  
  getHtml(): string {
      return this._fields['html'];
  }

  setHtml(value: string) {
    this._fields['html'] = value;

    return this;
  }

  get editor(): string | null {
    return this._fields['editor'] ?? null;
  }
  
  getEditor(): string | null {
      return this._fields['editor'] ?? null;
  }

  setEditor(value: null | string) {
    this._fields['editor'] = value;

    return this;
  }

  get attachments(): Array<any> | null {
    return this._fields['attachments'] ?? null;
  }
  
  getAttachments(): Array<any> | null {
      return this._fields['attachments'] ?? null;
  }

  setAttachments(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof RulesEmailNotificationTemplatesAttachments ? value : new RulesEmailNotificationTemplatesAttachments(value),
    ) : null;

    this._fields['attachments'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'locale')) {
      data['locale'] = this['locale'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'from')) {
      data['from'] = this['from'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'to')) {
      data['to'] = this['to'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'cc')) {
      data['cc'] = this['cc'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'bcc')) {
      data['bcc'] = this['bcc'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'subject')) {
      data['subject'] = this['subject'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'text')) {
      data['text'] = this['text'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'html')) {
      data['html'] = this['html'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'editor')) {
      data['editor'] = this['editor'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'attachments')) {
      data['attachments'] = this['attachments'] !== null
          ? this._fields['attachments'].map((rulesEmailNotificationTemplatesAttachments: RulesEmailNotificationTemplatesAttachments) => rulesEmailNotificationTemplatesAttachments.jsonSerialize())
          : null;
    }

    return data;
  }
}

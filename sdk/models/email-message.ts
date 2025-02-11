import EmailMessageAttachments from '../models/email-message-attachments';
import ResourceLink from '../models/resource-link';

export default class EmailMessage {
  STATUS_DRAFT = 'draft';

  STATUS_OUTBOX = 'outbox';

  STATUS_SENDING = 'sending';

  STATUS_SENT = 'sent';

  STATUS_FAILED = 'failed';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'metadata')) {
      this.setMetadata(data['metadata']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'credentialHash')) {
      this.setCredentialHash(data['credentialHash']);
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
    if (Object.prototype.hasOwnProperty.call(data, 'attachments')) {
      this.setAttachments(data['attachments']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'responseCode')) {
      this.setResponseCode(data['responseCode']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'responseBody')) {
      this.setResponseBody(data['responseBody']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'initiatedTime')) {
      this.setInitiatedTime(data['initiatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'sentTime')) {
      this.setSentTime(data['sentTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'createdTime')) {
      this.setCreatedTime(data['createdTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'updatedTime')) {
      this.setUpdatedTime(data['updatedTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, '_links')) {
      this.setLinks(data['_links']);
    }
  }


  get id(): string | null {
    return this._fields['id'] ?? null;
  }
  
  getId(): string | null {
      return this._fields['id'] ?? null;
  }

  private setId(value: null | string) {
    this._fields['id'] = value;

    return this;
  }

  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  setStatus(value: null | string) {
    this._fields['status'] = value;

    return this;
  }

  get metadata(): Record<string, any> | null {
    return this._fields['metadata'] ?? null;
  }
  
  getMetadata(): Record<string, any> | null {
      return this._fields['metadata'] ?? null;
  }

  setMetadata(value: null | Record<string, any>) {
    this._fields['metadata'] = value;

    return this;
  }

  get credentialHash(): string | null {
    return this._fields['credentialHash'] ?? null;
  }
  
  getCredentialHash(): string | null {
      return this._fields['credentialHash'] ?? null;
  }

  setCredentialHash(value: null | string) {
    this._fields['credentialHash'] = value;

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

  get attachments(): Array<any> | null {
    return this._fields['attachments'] ?? null;
  }
  
  getAttachments(): Array<any> | null {
      return this._fields['attachments'] ?? null;
  }

  setAttachments(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof EmailMessageAttachments ? value : new EmailMessageAttachments(value),
    ) : null;

    this._fields['attachments'] = value;

    return this;
  }

  get responseCode(): number | null {
    return this._fields['responseCode'] ?? null;
  }
  
  getResponseCode(): number | null {
      return this._fields['responseCode'] ?? null;
  }

  private setResponseCode(value: null | number | string) {
    if (typeof value === 'string') {
      value = Number(value);
    }

    this._fields['responseCode'] = value;

    return this;
  }

  get responseBody(): string | null {
    return this._fields['responseBody'] ?? null;
  }
  
  getResponseBody(): string | null {
      return this._fields['responseBody'] ?? null;
  }

  private setResponseBody(value: null | string) {
    this._fields['responseBody'] = value;

    return this;
  }

  get initiatedTime(): Date | null {
    return this._fields['initiatedTime'] ?? null;
  }
  
  getInitiatedTime(): Date | null {
      return this._fields['initiatedTime'] ?? null;
  }

  private setInitiatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['initiatedTime'] = value;

    return this;
  }

  get sentTime(): Date | null {
    return this._fields['sentTime'] ?? null;
  }
  
  getSentTime(): Date | null {
      return this._fields['sentTime'] ?? null;
  }

  private setSentTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['sentTime'] = value;

    return this;
  }

  get createdTime(): Date | null {
    return this._fields['createdTime'] ?? null;
  }
  
  getCreatedTime(): Date | null {
      return this._fields['createdTime'] ?? null;
  }

  private setCreatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['createdTime'] = value;

    return this;
  }

  get updatedTime(): Date | null {
    return this._fields['updatedTime'] ?? null;
  }
  
  getUpdatedTime(): Date | null {
      return this._fields['updatedTime'] ?? null;
  }

  private setUpdatedTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['updatedTime'] = value;

    return this;
  }

  get links(): Array<any> | null {
    return this._fields['_links'] ?? null;
  }
  
  getLinks(): Array<any> | null {
      return this._fields['_links'] ?? null;
  }

  private setLinks(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof ResourceLink ? value : new ResourceLink(value),
    ) : null;

    this._fields['_links'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'metadata')) {
      data['metadata'] = this['metadata'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentialHash')) {
      data['credentialHash'] = this['credentialHash'];
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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'attachments')) {
      data['attachments'] = this['attachments'] !== null
          ? this._fields['attachments'].map((emailMessageAttachments: EmailMessageAttachments) => emailMessageAttachments.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'responseCode')) {
      data['responseCode'] = this['responseCode'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'responseBody')) {
      data['responseBody'] = this['responseBody'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'initiatedTime')) {
      data['initiatedTime'] = this['initiatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'sentTime')) {
      data['sentTime'] = this['sentTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'createdTime')) {
      data['createdTime'] = this['createdTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'updatedTime')) {
      data['updatedTime'] = this['updatedTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'links')) {
      data['_links'] = this['links'] !== null
          ? this._fields['_links'].map((resourceLink: ResourceLink) => resourceLink.jsonSerialize())
          : null;
    }

    return data;
  }
}

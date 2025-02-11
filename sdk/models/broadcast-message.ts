import BroadcastMessageMessages from '../models/broadcast-message-messages';
import ResourceLink from '../models/resource-link';

export default class BroadcastMessage {
  STATUS_DRAFT = 'draft';

  STATUS_SENDING = 'sending';

  STATUS_SENT = 'sent';

  STATUS_ARCHIVED = 'archived';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'filter')) {
      this.setFilter(data['filter']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'title')) {
      this.setTitle(data['title']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'messages')) {
      this.setMessages(data['messages']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'splitTestStartTime')) {
      this.setSplitTestStartTime(data['splitTestStartTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'startSendingTime')) {
      this.setStartSendingTime(data['startSendingTime']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'status')) {
      this.setStatus(data['status']);
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

  get filter(): string | null {
    return this._fields['filter'] ?? null;
  }
  
  getFilter(): string | null {
      return this._fields['filter'] ?? null;
  }

  setFilter(value: null | string) {
    this._fields['filter'] = value;

    return this;
  }

  get title(): string | null {
    return this._fields['title'] ?? null;
  }
  
  getTitle(): string | null {
      return this._fields['title'] ?? null;
  }

  setTitle(value: null | string) {
    this._fields['title'] = value;

    return this;
  }

  get messages(): Array<any> {
    return this._fields['messages'];
  }
  
  getMessages(): Array<any> {
      return this._fields['messages'];
  }

  setMessages(value: Array<any>) {
    value = value.map(
      (value) => value instanceof BroadcastMessageMessages ? value : new BroadcastMessageMessages(value),
    );

    this._fields['messages'] = value;

    return this;
  }

  get splitTestStartTime(): Date | null {
    return this._fields['splitTestStartTime'] ?? null;
  }
  
  getSplitTestStartTime(): Date | null {
      return this._fields['splitTestStartTime'] ?? null;
  }

  private setSplitTestStartTime(value: null | Date | string) {
    if (value !== null && !(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['splitTestStartTime'] = value;

    return this;
  }

  get startSendingTime(): Date {
    return this._fields['startSendingTime'];
  }
  
  getStartSendingTime(): Date {
      return this._fields['startSendingTime'];
  }

  setStartSendingTime(value: Date | string) {
    if (!(value instanceof Date)) {
      value = new Date(value);
    }

    this._fields['startSendingTime'] = value;

    return this;
  }

  get status(): string | null {
    return this._fields['status'] ?? null;
  }
  
  getStatus(): string | null {
      return this._fields['status'] ?? null;
  }

  private setStatus(value: null | string) {
    this._fields['status'] = value;

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
    if (Object.prototype.hasOwnProperty.call(this._fields, 'filter')) {
      data['filter'] = this['filter'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'title')) {
      data['title'] = this['title'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'messages')) {
      data['messages'] = this['messages'].map(
          (broadcastMessageMessages: BroadcastMessageMessages) => broadcastMessageMessages.jsonSerialize()
      );
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'splitTestStartTime')) {
      data['splitTestStartTime'] = this['splitTestStartTime']?.toISOString() ?? null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'startSendingTime')) {
      data['startSendingTime'] = this['startSendingTime'].toISOString();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'status')) {
      data['status'] = this['status'];
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

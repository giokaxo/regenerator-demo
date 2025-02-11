import { WebhookAuthorization } from '../models/webhook-authorization';

export default class WebhookAuthorizationOAuth1 implements WebhookAuthorization {
  get [WebhookAuthorization](): true {
    return true;
  }

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'consumerKey')) {
      this.setConsumerKey(data['consumerKey']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'consumerSecret')) {
      this.setConsumerSecret(data['consumerSecret']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'token')) {
      this.setToken(data['token']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'tokenSecret')) {
      this.setTokenSecret(data['tokenSecret']);
    }
  }


  public get type() {
    return 'oauth1';
  }

  public getType() {
    return 'oauth1';
  }

  get consumerKey(): string {
    return this._fields['consumerKey'];
  }
  
  getConsumerKey(): string {
      return this._fields['consumerKey'];
  }

  setConsumerKey(value: string) {
    this._fields['consumerKey'] = value;

    return this;
  }

  get consumerSecret(): string {
    return this._fields['consumerSecret'];
  }
  
  getConsumerSecret(): string {
      return this._fields['consumerSecret'];
  }

  setConsumerSecret(value: string) {
    this._fields['consumerSecret'] = value;

    return this;
  }

  get token(): string {
    return this._fields['token'];
  }
  
  getToken(): string {
      return this._fields['token'];
  }

  setToken(value: string) {
    this._fields['token'] = value;

    return this;
  }

  get tokenSecret(): string {
    return this._fields['tokenSecret'];
  }
  
  getTokenSecret(): string {
      return this._fields['tokenSecret'];
  }

  setTokenSecret(value: string) {
    this._fields['tokenSecret'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'oauth1',
    };
    if (Object.prototype.hasOwnProperty.call(this._fields, 'consumerKey')) {
      data['consumerKey'] = this['consumerKey'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'consumerSecret')) {
      data['consumerSecret'] = this['consumerSecret'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'token')) {
      data['token'] = this['token'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'tokenSecret')) {
      data['tokenSecret'] = this['tokenSecret'];
    }

    return data;
  }
}

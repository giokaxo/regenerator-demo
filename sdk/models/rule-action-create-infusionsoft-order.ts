import RuleActionCreateInfusionsoftOrderContactBody from '../models/rule-action-create-infusionsoft-order-contact-body';
import RuleActionCreateInfusionsoftOrderOrderBody from '../models/rule-action-create-infusionsoft-order-order-body';
import RuleAction from '../models/rule-action';

export default class RuleActionCreateInfusionsoftOrder extends RuleAction {
  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    super({
      ...data,
      name: 'create-keap-infusionsoft-order',
    });

    if (Object.prototype.hasOwnProperty.call(data, 'contactBody')) {
      this.setContactBody(data['contactBody']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'orderBody')) {
      this.setOrderBody(data['orderBody']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'credentialHash')) {
      this.setCredentialHash(data['credentialHash']);
    }
  }


  get contactBody(): RuleActionCreateInfusionsoftOrderContactBody {
    return this._fields['contactBody'];
  }
  
  getContactBody(): RuleActionCreateInfusionsoftOrderContactBody {
      return this._fields['contactBody'];
  }

  setContactBody(value: RuleActionCreateInfusionsoftOrderContactBody | any) {
    if (!(value instanceof RuleActionCreateInfusionsoftOrderContactBody)) {
      value = new RuleActionCreateInfusionsoftOrderContactBody(value);
    }

    this._fields['contactBody'] = value;

    return this;
  }

  get orderBody(): RuleActionCreateInfusionsoftOrderOrderBody {
    return this._fields['orderBody'];
  }
  
  getOrderBody(): RuleActionCreateInfusionsoftOrderOrderBody {
      return this._fields['orderBody'];
  }

  setOrderBody(value: RuleActionCreateInfusionsoftOrderOrderBody | any) {
    if (!(value instanceof RuleActionCreateInfusionsoftOrderOrderBody)) {
      value = new RuleActionCreateInfusionsoftOrderOrderBody(value);
    }

    this._fields['orderBody'] = value;

    return this;
  }

  get credentialHash(): string {
    return this._fields['credentialHash'];
  }
  
  getCredentialHash(): string {
      return this._fields['credentialHash'];
  }

  setCredentialHash(value: string) {
    this._fields['credentialHash'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'contactBody')) {
      data['contactBody'] = this['contactBody'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'orderBody')) {
      data['orderBody'] = this['orderBody'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'credentialHash')) {
      data['credentialHash'] = this['credentialHash'];
    }

    return {...super.jsonSerialize(), ...data} ;
  }
}

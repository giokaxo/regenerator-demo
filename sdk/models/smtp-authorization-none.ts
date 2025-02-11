import { SmtpAuthorization } from '../models/smtp-authorization';

export default class SmtpAuthorizationNone implements SmtpAuthorization {
  get [SmtpAuthorization](): true {
    return true;
  }

  constructor(data: any = {}) {
  }


  public get type() {
    return 'none';
  }

  public getType() {
    return 'none';
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {
      type: 'none',
    };

    return data;
  }
}

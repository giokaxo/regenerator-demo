import SmtpAuthorizationCramMd5 from '../models/smtp-authorization-cram-md-5';
import SmtpAuthorizationLogin from '../models/smtp-authorization-login';
import SmtpAuthorizationNone from '../models/smtp-authorization-none';
import SmtpAuthorizationPlain from '../models/smtp-authorization-plain';
import { SmtpAuthorization } from '../models/smtp-authorization';

export default class SmtpAuthorizationFactory {
  static from(data: any = {}): SmtpAuthorization {
    switch(data.type) {
      case 'cram-md5': return new SmtpAuthorizationCramMd5(data);
      case 'login': return new SmtpAuthorizationLogin(data);
      case 'none': return new SmtpAuthorizationNone(data);
      case 'plain': return new SmtpAuthorizationPlain(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

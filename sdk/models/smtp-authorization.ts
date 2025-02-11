import SmtpAuthorizationCramMd5 from '../models/smtp-authorization-cram-md-5';
import SmtpAuthorizationLogin from '../models/smtp-authorization-login';
import SmtpAuthorizationNone from '../models/smtp-authorization-none';
import SmtpAuthorizationPlain from '../models/smtp-authorization-plain';

export const SmtpAuthorization = Symbol('SmtpAuthorization');

export interface SmtpAuthorization {
  [SmtpAuthorization]: true;

  get type(): string;
  getType(): string;
  jsonSerialize(): Record<string, any>;
}

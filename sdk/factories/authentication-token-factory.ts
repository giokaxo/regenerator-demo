import AuthenticationTokenPasswordlessMode from '../models/authentication-token-passwordless-mode';
import AuthenticationTokenPasswordMode from '../models/authentication-token-password-mode';
import { AuthenticationToken } from '../models/authentication-token';

export default class AuthenticationTokenFactory {
  static from(data: any = {}): AuthenticationToken {
    switch(data.mode) {
      case 'passwordless': return new AuthenticationTokenPasswordlessMode(data);
      case 'password': return new AuthenticationTokenPasswordMode(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

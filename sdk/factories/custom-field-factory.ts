import ArrayCustomField from '../models/array-custom-field';
import BooleanCustomField from '../models/boolean-custom-field';
import DateCustomField from '../models/date-custom-field';
import DateTimeCustomField from '../models/date-time-custom-field';
import IntegerCustomField from '../models/integer-custom-field';
import MonetaryCustomField from '../models/monetary-custom-field';
import NumberCustomField from '../models/number-custom-field';
import StringCustomField from '../models/string-custom-field';
import { CustomField } from '../models/custom-field';

export default class CustomFieldFactory {
  static from(data: any = {}): CustomField {
    switch(data.type) {
      case 'array': return new ArrayCustomField(data);
      case 'boolean': return new BooleanCustomField(data);
      case 'date': return new DateCustomField(data);
      case 'datetime': return new DateTimeCustomField(data);
      case 'integer': return new IntegerCustomField(data);
      case 'monetary': return new MonetaryCustomField(data);
      case 'number': return new NumberCustomField(data);
      case 'string': return new StringCustomField(data);
      default: {
        const error = new Error('Unknown discriminator value');
        error.name = 'UnknownDiscriminatorValue';
        throw error;
      }
    };
  }
}

import ArrayCustomField from '../models/array-custom-field';
import BooleanCustomField from '../models/boolean-custom-field';
import DateCustomField from '../models/date-custom-field';
import DateTimeCustomField from '../models/date-time-custom-field';
import IntegerCustomField from '../models/integer-custom-field';
import MonetaryCustomField from '../models/monetary-custom-field';
import NumberCustomField from '../models/number-custom-field';
import StringCustomField from '../models/string-custom-field';

export const CustomField = Symbol('CustomField');

export interface CustomField {
  [CustomField]: true;

  get type(): string;
  getType(): string;

  get name(): string | null;
  getName(): string | null;

  get description(): string | null;
  getDescription(): string | null;
  setDescription(value: null | string): this;
  get links(): Array<any> | null;
  getLinks(): Array<any> | null;
  jsonSerialize(): Record<string, any>;
}

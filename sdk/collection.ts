import JsonSerializable from './types/json-serializable';

export default class Collection<T extends JsonSerializable = any> implements Iterable<T>, Array<T>, JsonSerializable{
  static HEADER_LIMIT = 'pagination-limit';

  static HEADER_OFFSET = 'pagination-offset';

  static HEADER_TOTAL = 'pagination-total';

  constructor(
    private items: Array<T>,
    private limit: number,
    private offset: number,
    private total: number,
  ) {}

  [Symbol.iterator](): IterableIterator<T> {
    return this.items[Symbol.iterator]();
  }

  count() {
    return this.items.length;
  }

  jsonSerialize() {
    return this.items.map(item => item.jsonSerialize());
  }

  has(offset: number): boolean {
    return offset in this.items;
  }

  get(offset: number): T | undefined {
    return this.items[offset];
  }

  set(offset: number, value: T): void {
    throw new Error('Operation not allowed');
  }

  delete(offset: number): void {
    throw new Error('Operation not allowed');
  }

  getOffset() {
    return this.offset;
  }

  getLimit() {
    return this.limit;
  }

  getTotalItems() {
    return this.total;
  }

  toArray() {
    return this.items;
  }
}

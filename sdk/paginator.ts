import Collection from './collection';

export default class Paginator {
  public DEFAULT_SIZE = 100;

  private limit: number;

  private offset: number;

  private total: number | null;

  public constructor(
      private currentSegment: Collection | null,
      private query: (limit: number, offset: number) =>  Collection,
  ) {
      this.limit = this.currentSegment?.getLimit() ?? this.DEFAULT_SIZE;
      this.offset = this.currentSegment?.getOffset() ?? 0;
      this.total = this.currentSegment?.getTotalItems() ?? null;
  }

  
  current() {
    if (this.currentSegment === null) {
      if (!this.valid()) {
        throw new Error('Cannot load segment, invalid offset');
      }

      this.load();
    }
    if (this.currentSegment === null) {
      throw new Error('Cannot load segment, invalid offset');
    }

    return this.currentSegment;
  }

  next() {
    this.currentSegment = null;
    this.offset += this.limit;
  }

  previous() {
    this.currentSegment = null;
    this.offset -= this.limit;
  }

  key(): number {
    return Math.ceil(this.offset / this.limit);
  }

  valid(): boolean {
    return this.offset >= 0 && (this.total === null || this.offset <= this.total);
  }

  rewind(){
    this.currentSegment = null;
    this.offset = 0;
  }

  count(): number {
    if (this.total === null) {
      throw new Error('Lazy paginator has no segments loaded yet');
    }

    return Math.ceil(this.total / this.limit);
  }

  isFirst(): boolean {
    return this.offset === 0;
  }

  isLast(): boolean {
    return this.total !== null && this.offset + this.limit >= this.total;
  }

  getTotal() {
    return this.total;
  }

  private load() {
    this.currentSegment = this.query(this.limit, this.offset);

    this.total = this.currentSegment.getTotalItems();
    this.offset = this.currentSegment.getOffset();
    this.limit = this.currentSegment.getLimit();
  }
}

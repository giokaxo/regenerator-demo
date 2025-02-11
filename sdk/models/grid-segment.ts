import GridSegmentOwner from '../models/grid-segment-owner';
import GridSegmentUsers from '../models/grid-segment-users';

export default class GridSegment {
  SCOPE_PRIVATE = 'private';

  SCOPE_PUBLIC = 'public';

  SCOPE_SHARED = 'shared';

  protected _fields: Record<string, any> = {};

  constructor(data: any = {}) {
    if (Object.prototype.hasOwnProperty.call(data, 'id')) {
      this.setId(data['id']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'owner')) {
      this.setOwner(data['owner']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'data')) {
      this.setData(data['data']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isStarred')) {
      this.setIsStarred(data['isStarred']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'isVisible')) {
      this.setIsVisible(data['isVisible']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'userIds')) {
      this.setUserIds(data['userIds']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'users')) {
      this.setUsers(data['users']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'scope')) {
      this.setScope(data['scope']);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'systemId')) {
      this.setSystemId(data['systemId']);
    }
  }


  get id(): string | null {
    return this._fields['id'] ?? null;
  }
  
  getId(): string | null {
      return this._fields['id'] ?? null;
  }

  private setId(value: null | string) {
    this._fields['id'] = value;

    return this;
  }

  get owner(): GridSegmentOwner {
    return this._fields['owner'];
  }
  
  getOwner(): GridSegmentOwner {
      return this._fields['owner'];
  }

  setOwner(value: GridSegmentOwner | any) {
    if (!(value instanceof GridSegmentOwner)) {
      value = new GridSegmentOwner(value);
    }

    this._fields['owner'] = value;

    return this;
  }

  get data(): Record<string, any> {
    return this._fields['data'];
  }
  
  getData(): Record<string, any> {
      return this._fields['data'];
  }

  setData(value: Record<string, any>) {
    this._fields['data'] = value;

    return this;
  }

  get isStarred(): boolean | null {
    return this._fields['isStarred'] ?? null;
  }
  
  getIsStarred(): boolean | null {
      return this._fields['isStarred'] ?? null;
  }

  setIsStarred(value: null | boolean) {
    this._fields['isStarred'] = value;

    return this;
  }

  get isVisible(): boolean | null {
    return this._fields['isVisible'] ?? null;
  }
  
  getIsVisible(): boolean | null {
      return this._fields['isVisible'] ?? null;
  }

  setIsVisible(value: null | boolean) {
    this._fields['isVisible'] = value;

    return this;
  }

  get userIds(): Array<any> | null {
    return this._fields['userIds'] ?? null;
  }
  
  getUserIds(): Array<any> | null {
      return this._fields['userIds'] ?? null;
  }

  setUserIds(value: null | Array<any>) {
    this._fields['userIds'] = value;

    return this;
  }

  get users(): Array<any> | null {
    return this._fields['users'] ?? null;
  }
  
  getUsers(): Array<any> | null {
      return this._fields['users'] ?? null;
  }

  private setUsers(value: null | Array<any>) {
    value = value !== null ? value.map(
      (value) => value instanceof GridSegmentUsers ? value : new GridSegmentUsers(value),
    ) : null;

    this._fields['users'] = value;

    return this;
  }

  get scope(): string {
    return this._fields['scope'];
  }
  
  getScope(): string {
      return this._fields['scope'];
  }

  setScope(value: string) {
    this._fields['scope'] = value;

    return this;
  }

  get systemId(): string | null {
    return this._fields['systemId'] ?? null;
  }
  
  getSystemId(): string | null {
      return this._fields['systemId'] ?? null;
  }

  setSystemId(value: null | string) {
    this._fields['systemId'] = value;

    return this;
  }

  jsonSerialize(): Record<string, any> {
    const data: Record<string, any> = {};
    if (Object.prototype.hasOwnProperty.call(this._fields, 'id')) {
      data['id'] = this['id'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'owner')) {
      data['owner'] = this['owner'].jsonSerialize();
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'data')) {
      data['data'] = this['data'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isStarred')) {
      data['isStarred'] = this['isStarred'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'isVisible')) {
      data['isVisible'] = this['isVisible'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'userIds')) {
      data['userIds'] = this['userIds'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'users')) {
      data['users'] = this['users'] !== null
          ? this._fields['users'].map((gridSegmentUsers: GridSegmentUsers) => gridSegmentUsers.jsonSerialize())
          : null;
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'scope')) {
      data['scope'] = this['scope'];
    }
    if (Object.prototype.hasOwnProperty.call(this._fields, 'systemId')) {
      data['systemId'] = this['systemId'];
    }

    return data;
  }
}

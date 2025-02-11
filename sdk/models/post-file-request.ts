import FileCreateFromInline from '../models/file-create-from-inline';
import FileCreateFromUrl from '../models/file-create-from-url';

export const PostFileRequest = Symbol('PostFileRequest');

export interface PostFileRequest {
  [PostFileRequest]: true;

  get isPublic(): boolean | null;
  getIsPublic(): boolean | null;
  setIsPublic(value: null | boolean): this;
  get name(): string | null;
  getName(): string | null;
  setName(value: null | string): this;
  get description(): string | null;
  getDescription(): string | null;
  setDescription(value: null | string): this;
  get sourceType(): string | null;
  getSourceType(): string | null;
  setSourceType(value: null | string): this;
  get tags(): Array<any> | null;
  getTags(): Array<any> | null;
  setTags(value: null | Array<any>): this;  jsonSerialize(): Record<string, any>;
}

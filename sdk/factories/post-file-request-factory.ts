import FileCreateFromInline from '../models/file-create-from-inline';
import FileCreateFromUrl from '../models/file-create-from-url';
import { PostFileRequest } from '../models/post-file-request';

export default class PostFileRequestFactory {
  static from(data: any = {}): PostFileRequest {
    if (Object.prototype.hasOwnProperty.call(data, 'file')) {
      return new FileCreateFromInline(data);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'url')) {
      return new FileCreateFromUrl(data);
    }
    const error = new Error('Unknown discriminator value');
    error.name = 'UnknownDiscriminatorValue';
    throw error;
  }
}

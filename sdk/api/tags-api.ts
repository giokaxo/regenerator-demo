import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import Tag from '../models/tag';
import PatchTagRequest from '../models/patch-tag-request';
import PostTagCustomerCollectionRequest from '../models/post-tag-customer-collection-request';
import DeleteTagCustomerCollectionRequest from '../models/delete-tag-customer-collection-request';
import PostTagKycDocumentCollectionRequest from '../models/post-tag-kyc-document-collection-request';
import DeleteTagKycDocumentCollectionRequest from '../models/delete-tag-kyc-document-collection-request';
import PostTagAmlCheckCollectionRequest from '../models/post-tag-aml-check-collection-request';
import DeleteTagAmlCheckCollectionRequest from '../models/delete-tag-aml-check-collection-request';


export default class TagsApi {
  constructor(private client: Client) {}
  async create({ 
    tag }: {
    tag: Tag
  })  {
    const uri = '/tags';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: tag.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Tag(response.data);
  }
  async delete({ 
    tag }: {
    tag: string
  })  {
    const pathParams = {tag: tag};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tags/{tag}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async get({ 
    tag }: {
    tag: string
  })  {
    const pathParams = {tag: tag};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tags/{tag}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new Tag(response.data);
  }
  async getAll({ 
    limit = null,
    offset = null,
    filter = null,
    q = null,
    sort = null }: {
    limit?: number | null,
    offset?: number | null,
    filter?: string | null,
    q?: string | null,
    sort?: Array<any> | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(q ? { q: q.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {})
    } as Record<string, string>;
    const uri = '/tags?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<Tag>(
      response.data.map((item: any) => new Tag(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async tagAmlCheck({ 
    tag,
    amlCheckId }: {
    tag: string,
    amlCheckId: string
  })  {
    const pathParams = {tag: tag,amlCheckId: amlCheckId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tags/{tag}/aml-checks/{amlCheckId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async tagAmlChecks({ 
    tag,
    postTagAmlCheckCollectionRequest }: {
    tag: string,
    postTagAmlCheckCollectionRequest: PostTagAmlCheckCollectionRequest
  })  {
    const pathParams = {tag: tag};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tags/{tag}/aml-checks'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      data: postTagAmlCheckCollectionRequest.jsonSerialize()
    };
    return this.client.send(requestConfig);
  }
  async tagCustomer({ 
    tag,
    customerId }: {
    tag: string,
    customerId: string
  })  {
    const pathParams = {tag: tag,customerId: customerId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tags/{tag}/customers/{customerId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async tagCustomers({ 
    tag,
    postTagCustomerCollectionRequest }: {
    tag: string,
    postTagCustomerCollectionRequest: PostTagCustomerCollectionRequest
  })  {
    const pathParams = {tag: tag};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tags/{tag}/customers'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      data: postTagCustomerCollectionRequest.jsonSerialize()
    };
    return this.client.send(requestConfig);
  }
  async tagKycDocument({ 
    tag,
    kycDocumentId }: {
    tag: string,
    kycDocumentId: string
  })  {
    const pathParams = {tag: tag,kycDocumentId: kycDocumentId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tags/{tag}/kyc-documents/{kycDocumentId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async tagKycDocuments({ 
    tag,
    postTagKycDocumentCollectionRequest }: {
    tag: string,
    postTagKycDocumentCollectionRequest: PostTagKycDocumentCollectionRequest
  })  {
    const pathParams = {tag: tag};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tags/{tag}/kyc-documents'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      data: postTagKycDocumentCollectionRequest.jsonSerialize()
    };
    return this.client.send(requestConfig);
  }
  async untagAmlCheck({ 
    tag,
    amlCheckId }: {
    tag: string,
    amlCheckId: string
  })  {
    const pathParams = {tag: tag,amlCheckId: amlCheckId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tags/{tag}/aml-checks/{amlCheckId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async untagAmlChecks({ 
    tag,
    deleteTagAmlCheckCollectionRequest }: {
    tag: string,
    deleteTagAmlCheckCollectionRequest: DeleteTagAmlCheckCollectionRequest
  })  {
    const pathParams = {tag: tag};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tags/{tag}/aml-checks'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri,
      data: deleteTagAmlCheckCollectionRequest.jsonSerialize()
    };
    return this.client.send(requestConfig);
  }
  async untagCustomer({ 
    tag,
    customerId }: {
    tag: string,
    customerId: string
  })  {
    const pathParams = {tag: tag,customerId: customerId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tags/{tag}/customers/{customerId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async untagCustomers({ 
    tag,
    deleteTagCustomerCollectionRequest }: {
    tag: string,
    deleteTagCustomerCollectionRequest: DeleteTagCustomerCollectionRequest
  })  {
    const pathParams = {tag: tag};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tags/{tag}/customers'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri,
      data: deleteTagCustomerCollectionRequest.jsonSerialize()
    };
    return this.client.send(requestConfig);
  }
  async untagKycDocument({ 
    tag,
    kycDocumentId }: {
    tag: string,
    kycDocumentId: string
  })  {
    const pathParams = {tag: tag,kycDocumentId: kycDocumentId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tags/{tag}/kyc-documents/{kycDocumentId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async untagKycDocuments({ 
    tag,
    deleteTagKycDocumentCollectionRequest }: {
    tag: string,
    deleteTagKycDocumentCollectionRequest: DeleteTagKycDocumentCollectionRequest
  })  {
    const pathParams = {tag: tag};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tags/{tag}/kyc-documents'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri,
      data: deleteTagKycDocumentCollectionRequest.jsonSerialize()
    };
    return this.client.send(requestConfig);
  }
  async update({ 
    tag,
    patchTagRequest }: {
    tag: string,
    patchTagRequest: PatchTagRequest
  })  {
    const pathParams = {tag: tag};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tags/{tag}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PATCH',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: patchTagRequest.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Tag(response.data);
  }}

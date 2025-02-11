import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import AuthenticationTokenFactory from '../factories/authentication-token-factory';
import AuthenticationOptions from '../models/authentication-options';
import AuthenticationTokenResponse from '../models/authentication-token-response';
import AuthenticationToken from '../models/authentication-token';
import CustomerJWT from '../models/customer-jwt';
import CustomerCredential from '../models/customer-credential';
import ResetPasswordToken from '../models/reset-password-token';


export default class CustomerAuthenticationApi {
  constructor(private client: Client) {}
  async createCredential({ 
    customerCredential }: {
    customerCredential: CustomerCredential
  })  {
    const uri = '/credentials';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: customerCredential.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new CustomerCredential(response.data);
  }
  async createResetPasswordToken({ 
    resetPasswordToken }: {
    resetPasswordToken: ResetPasswordToken
  })  {
    const uri = '/password-tokens';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: resetPasswordToken.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new ResetPasswordToken(response.data);
  }
  async deleteCredential({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/credentials/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async deleteResetPasswordToken({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/password-tokens/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async exchangeToken({ 
    token,
    customerJWT }: {
    token: string,
    customerJWT: CustomerJWT
  })  {
    const pathParams = {token: token};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/authentication-tokens/{token}/exchange'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: customerJWT.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new CustomerJWT(response.data);
  }
  async getAllAuthTokens({ 
    limit = null,
    offset = null }: {
    limit?: number | null,
    offset?: number | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
    const uri = '/authentication-tokens?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<AuthenticationTokenResponse>(
      response.data.map((item: any) => new AuthenticationTokenResponse(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getAllCredentials({ 
    limit = null,
    offset = null }: {
    limit?: number | null,
    offset?: number | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
    const uri = '/credentials?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<CustomerCredential>(
      response.data.map((item: any) => new CustomerCredential(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getAllResetPasswordTokens({ 
    limit = null,
    offset = null }: {
    limit?: number | null,
    offset?: number | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
    const uri = '/password-tokens?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<ResetPasswordToken>(
      response.data.map((item: any) => new ResetPasswordToken(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getAuthOptions({  }: {
  }= {})
   {
    const uri = '/authentication-options';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new AuthenticationOptions(response.data);
  }
  async getCredential({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/credentials/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new CustomerCredential(response.data);
  }
  async getResetPasswordToken({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/password-tokens/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ResetPasswordToken(response.data);
  }
  async login({ 
    authenticationToken }: {
    authenticationToken: AuthenticationToken
  })  {
    const uri = '/authentication-tokens';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: authenticationToken.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new AuthenticationTokenResponse(response.data);
  }
  async logout({ 
    token }: {
    token: string
  })  {
    const pathParams = {token: token};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/authentication-tokens/{token}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async updateAuthOptions({ 
    authenticationOptions }: {
    authenticationOptions: AuthenticationOptions
  })  {
    const uri = '/authentication-options';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: authenticationOptions.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new AuthenticationOptions(response.data);
  }
  async updateCredential({ 
    id,
    customerCredential }: {
    id: string,
    customerCredential: CustomerCredential
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/credentials/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: customerCredential.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new CustomerCredential(response.data);
  }
  async verify({ 
    token }: {
    token: string
  })  {
    const pathParams = {token: token};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/authentication-tokens/{token}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new AuthenticationTokenResponse(response.data);
  }}

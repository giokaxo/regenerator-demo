import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import ApplicationInstance from '../models/application-instance';
import ApplicationInstanceConfiguration from '../models/application-instance-configuration';


export default class ApplicationInstancesApi {
  constructor(private client: Client) {}
  async delete({ 
    applicationId }: {
    applicationId: string
  })  {
    const pathParams = {applicationId: applicationId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/application-instances/{applicationId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async get({ 
    applicationId }: {
    applicationId: string
  })  {
    const pathParams = {applicationId: applicationId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/application-instances/{applicationId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ApplicationInstance(response.data);
  }
  async getConfiguration({ 
    applicationId }: {
    applicationId: string
  })  {
    const pathParams = {applicationId: applicationId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/application-instances/{applicationId}/configuration'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ApplicationInstanceConfiguration(response.data);
  }
  async upsert({ 
    applicationId,
    applicationInstance }: {
    applicationId: string,
    applicationInstance: ApplicationInstance
  })  {
    const pathParams = {applicationId: applicationId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/application-instances/{applicationId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: applicationInstance.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new ApplicationInstance(response.data);
  }
  async upsertConfiguration({ 
    applicationId,
    applicationInstanceConfiguration }: {
    applicationId: string,
    applicationInstanceConfiguration: ApplicationInstanceConfiguration
  })  {
    const pathParams = {applicationId: applicationId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/application-instances/{applicationId}/configuration'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: applicationInstanceConfiguration.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new ApplicationInstanceConfiguration(response.data);
  }}

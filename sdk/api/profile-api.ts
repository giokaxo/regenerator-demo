import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import PostPermissionsEmulationRequest from '../models/post-permissions-emulation-request';
import Session from '../models/session';
import Profile from '../models/profile';
import ProfileMfa from '../models/profile-mfa';


export default class ProfileApi {
  constructor(private client: Client) {}
  async deleteMfa({  }: {
  }= {})
   {
    const uri = '/profile/mfa';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async get({  }: {
  }= {})
   {
    const uri = '/profile';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new Profile(response.data);
  }
  async getMfa({  }: {
  }= {})
   {
    const uri = '/profile/mfa';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ProfileMfa(response.data);
  }
  async startPermissionsEmulation({ 
    postPermissionsEmulationRequest }: {
    postPermissionsEmulationRequest: PostPermissionsEmulationRequest
  })  {
    const uri = '/permissions-emulation';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: postPermissionsEmulationRequest.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Session(response.data);
  }
  async stopPermissionsEmulation({  }: {
  }= {})
   {
    const uri = '/permissions-emulation';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new Session(response.data);
  }
  async update({ 
    profile }: {
    profile: Profile
  })  {
    const uri = '/profile';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: profile.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Profile(response.data);
  }
  async updateMfa({  }: {
  }= {})
   {
    const uri = '/profile/mfa';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ProfileMfa(response.data);
  }}

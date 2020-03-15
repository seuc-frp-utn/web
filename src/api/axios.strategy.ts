import { Strategy } from './strategy';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import store from '../store';

export class AxiosStrategy<T> implements Strategy<T> {
  private readonly instance: AxiosInstance;
  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  public getInstance(): AxiosInstance {
    return this.instance;
  }

  public async getAll(endpoint: string): Promise<T[]> {
    return new Promise<T[]>((resolve, reject) => {
      this.instance.get<T[]>(`/${endpoint}/`)
      .then((response: AxiosResponse<T[]>) => {
        resolve(response.data);
      })
      .catch((reason: string) => {
        reject(reason);
      });
    });
  }

  public async get(endpoint: string, uuid: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.instance.get<T>(`/${endpoint}/${uuid}/`)
      .then((response: AxiosResponse<T>) => {
        resolve(response.data);
      })
      .catch((reason: string) => {
        reject(reason);
      });
    });
  }

  public async post(endpoint: string, data: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.instance.post<T>(`/${endpoint}/`, data)
      .then((response: AxiosResponse<T>) => {
        resolve(response.data);
      })
      .catch((reason: string) => {
        reject(reason);
      });
    });
  }

  public async put(endpoint: string, uuid: string, data: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.instance.put<T>(`/${endpoint}/${uuid}/`, data)
      .then((response: AxiosResponse<T>) => {
        resolve(response.data);
      })
      .catch((reason: string) => {
        reject(reason);
      });
    });
  }

  public async remove(endpoint: string, uuid: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.instance.delete<T>(`/${endpoint}/${uuid}/`)
      .then((response: AxiosResponse<T>) => {
        resolve(response.data);
      })
      .catch((reason: string) => {
        reject(reason);
      });
    });
  }
}

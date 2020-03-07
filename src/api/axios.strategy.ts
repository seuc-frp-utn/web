import { Strategy } from './strategy';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import store from '../store';

export class AxiosStrategy<T> implements Strategy<T> {
  private readonly instance: AxiosInstance;
  constructor() {
    this.instance = axios.create();
    this.instance.defaults.baseURL = process.env.VUE_APP_API_IP;
    this.instance.defaults.headers.post['Content-Type'] = 'application/json';
    this.instance.defaults.timeout = 2500;
  }

  public async getAll(endpoint: string): Promise<T[]> {
    return new Promise<T[]>((resolve, reject) => {
      this.instance.get<T[]>(`/${endpoint}`)
      .then((response: AxiosResponse<T[]>) => {
        resolve(response.data);
      })
      .catch((reason: string) => {
        reject(reason);
      });
    });
  }

  public async get(endpoint: string, id: number): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.instance.get<T>(`/${endpoint}/${id}`)
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
      this.instance.post<T>(`/${endpoint}`, data)
      .then((response: AxiosResponse<T>) => {
        resolve(response.data);
      })
      .catch((reason: string) => {
        reject(reason);
      });
    });
  }

  public async patch(endpoint: string, id: number, data: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.instance.patch<T>(`/${endpoint}/${id}`, data)
      .then((response: AxiosResponse<T>) => {
        resolve(response.data);
      })
      .catch((reason: string) => {
        reject(reason);
      });
    });
  }

  public async remove(endpoint: string, id: number): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.instance.delete<T>(`/${endpoint}/${id}`)
      .then((response: AxiosResponse<T>) => {
        resolve(response.data);
      })
      .catch((reason: string) => {
        reject(reason);
      });
    });
  }
}

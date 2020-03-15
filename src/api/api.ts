import { Course } from '@/models/course.model';
import { AxiosStrategy } from './axios.strategy';
import { Strategy } from './strategy';
import { AxiosInstance } from 'axios';
import axios from 'axios';

export class API {
  private httpClient: AxiosInstance;
  private resources: Record<string, Strategy<any>>;
  constructor() {
    this.httpClient = axios.create();
    this.httpClient.defaults.baseURL = process.env.VUE_APP_API_IP;
    this.httpClient.defaults.headers.post['Content-Type'] = 'application/json';
    this.httpClient.defaults.timeout = 2500;
    this.resources = {};
    this.registerStrategies();
  }

  public async getInstance(): Promise<AxiosInstance> {
    return this.httpClient;
  }

  public async getResource<T>(endpoint: string, uuid: string): Promise<T> {
    return this.resources[endpoint].get(endpoint, uuid);
  }

  public async getAllResources<T>(endpoint: string): Promise<T[]> {
    return this.resources[endpoint].getAll(endpoint);
  }

  public async createResource<T>(endpoint: string, entity: T): Promise<T> {
    return this.resources[endpoint].post(endpoint, entity);
  }

  public async updateResource<T>(endpoint: string, uuid: string, entity: T): Promise<T> {
    return this.resources[endpoint].put(endpoint, uuid, entity);
  }

  public async removeResource<T>(endpoint: string, uuid: string): Promise<T> {
    return this.resources[endpoint].remove(endpoint, uuid);
  }

  private registerStrategies() {
    this.resources = {
      courses: new AxiosStrategy<Course>(this.httpClient),
    };
  }
}


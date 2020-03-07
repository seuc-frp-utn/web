import { Course } from '@/models/course.model';
import { AxiosStrategy } from './axios.strategy';
import { Strategy } from './strategy';
import { Category } from '@/models/category.model';

export class API {
  private resources: Record<string, Strategy<any>>;
  constructor() {
    this.resources = {};
    this.registerStrategies();
  }

  public async getResource<T>(endpoint: string, id: number): Promise<T> {
    return this.resources[endpoint].get(endpoint, id);
  }

  public async getAllResources<T>(endpoint: string): Promise<T[]> {
    return this.resources[endpoint].getAll(endpoint);
  }

  public async createResource<T>(endpoint: string, entity: T): Promise<T> {
    return this.resources[endpoint].post(endpoint, entity);
  }

  public async updateResource<T>(endpoint: string, id: number, entity: T): Promise<T> {
    return this.resources[endpoint].patch(endpoint, id, entity);
  }

  public async removeResource<T>(endpoint: string, id: number): Promise<T> {
    return this.resources[endpoint].remove(endpoint, id);
  }

  private registerStrategies() {
    this.resources = {
      courses: new AxiosStrategy<Course>(),
      categories: new AxiosStrategy<Category>(),
    };
  }
}


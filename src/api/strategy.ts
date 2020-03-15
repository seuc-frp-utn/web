export interface Strategy<T> {
  getInstance(): any;
  getAll(endpoint: string): Promise<T[]>;
  get(endpoint: string, uuid: string): Promise<T>;
  post(endpoint: string, data: any): Promise<T>;
  put(endpoint: string, uuid: string, data: any): Promise<T>;
  remove(endpoint: string, uuid: string): Promise<T>;
}

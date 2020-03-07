export interface Strategy<T> {
  getAll(endpoint: string): Promise<T[]>;
  get(endpoint: string, id: number): Promise<T>;
  post(endpoint: string, data: any): Promise<T>;
  patch(endpoint: string, id: number, data: any): Promise<T>;
  remove(endpoint: string, id: number): Promise<T>;
}

export class Storage {
  private storage: any;
  constructor(storage: any) {
    this.storage = storage;
  }
  public setItem(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  public getItem(key: string) {
    this.storage.getItem(key);
  }

  public removeItem(key: string) {
    this.storage.removeItem(key);
  }

  public clear() {
    this.storage.clear();
  }
}

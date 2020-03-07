export class Course {
  public id?: number;
  public name: string;
  public description: string;
  public image: string;
  public started: boolean;
  public finished: boolean;
  public hours: number;
  public totalPrice: number;
  public monthlyPrice: number;
  public numberPayments: number;
  public signUpLink: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(json: any) {
    this.id = json.id!;
    this.name = json.name;
    this.description = json.description;
    this.image = json.image;
    this.started = json.started;
    this.finished = json.finished;
    this.hours = json.hours;
    this.totalPrice = json.totalPrice;
    this.monthlyPrice = json.monthlyPrice;
    this.numberPayments = json.numberPayments;
    this.signUpLink = json.signUpLink;
    this.createdAt = json.createdAt!;
    this.updatedAt = json.updatedAt!;
  }
}

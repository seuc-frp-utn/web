import { Course } from './course.model';

export class Category {
  public id?: string;
  public name: string;
  public icon: string;
  public courses: Course[];
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(json: any) {
    this.id = json.id!;
    this.name = json.name;
    this.icon = json.icon;
    this.courses = json.courses;
    this.createdAt = json.createdAt!;
    this.updatedAt = json.updatedAt!;
  }
}

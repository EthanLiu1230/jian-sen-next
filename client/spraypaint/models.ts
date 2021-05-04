import { SpraypaintBase, Model, Attr, HasMany, BelongsTo } from "spraypaint";

@Model()
export class ApplicationRecord extends SpraypaintBase {
  static baseUrl = "http://localhost:3000";
  static apiNamespace = "/api/v1";
}

@Model()
export class Category extends ApplicationRecord {
  static jsonapiType = "categories";

  @Attr() name: string;
  @Attr({ persist: false }) createdAt: string;
  @Attr({ persist: false }) updatedAt: string;

  @HasMany() children: Category[];
  @BelongsTo() parent: Category;
}

const models = {
  categories: Category,
};

export default models;

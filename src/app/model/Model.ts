export class Template {
  id!: string;
  name!: string;
  imageUrl!: string;
  videoUrl!: string;
  detail!: string;
  top!: number;
  show!: boolean;
  versionRequired!: number;
  category!: Category;
}

export class Item {
  id!: string;
  imageUrl!: string;
  name!: string;
  detail!: string;
}

export class Category {
  id!: string;
  name!: string;
}

export class Animation {
  id!: string;
  creatAt!: number;
  name!: string;
  thumb!: string;
  image!: string;
  category!: Category;
}

export class Category {
  id!: string;
  creatAt!: number;
  name!: string;
  type!: string;
}

export class WallPaper {
  id!: string;
  creatAt!: number;
  name!: string;
  image!: string;
  thumb!: string;
  category!: Category;
}


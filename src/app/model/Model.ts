export class Animation {
  id!: string;
  creatAt!: number;
  name!: string;
  thumb!: string;
  image!: string;
  category!: Category;
  versionRequired!:number;
  premium!:boolean
}

export class Category {
  id!: string;
  creatAt!: number;
  name!: string;
  type!: string;
  url! : string;
  versionRequired!:number;
}

export class WallPaper {
  id!: string;
  creatAt!: number;
  name!: string;
  image!: string;
  thumb!: string;
  category!: Category;
  versionRequired!:number;
}


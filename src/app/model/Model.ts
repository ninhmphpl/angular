export class Sticker {
  constructor(category : Category) {
    this.category = category
  }

  id!: number;
  images!: string[];
  name!: string;
  premium!: boolean;
  trending! :boolean;
  rank!: number;
  category!: Category;
}

export class Category {
  id!: number;
  name!: string;
  image!: string;
  rank! : number;
  versionRequired! : number;
  show!: boolean;
}

export class Style {
  id!: number;
  name!: string;
  image!: string;
  detail!: string;
  premium!: boolean;
}

export class Gif{
  constructor(url? : string) {
    if(url != null) {
      this.url = url;
    }
  }
  id!: number;
  url!: string;
}


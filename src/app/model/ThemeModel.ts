export class CallIcon {
  id!: string;
  url!: string;
  createAt!: number;

}

export class Category {
  url!:string
  id!: string;
  name!: string;
  type!: string;
  priority!:number;
  createAt!: number;

}

export class AiPoster {
  id!: string;
  name!: string;
  prompt!: string;
  url!: string;
  createAt!: number;

}
export class StyleHome{
  style! : AiPoster[]
  suggest! : AiPosterOption[]
  tricks! : AiPosterOption[]
}

export class AiProfile {
  id!: string;
  name!: string;
  url!: string;
  thumb!: string;
  object!: string;
  avatarFilePrompt!: string;
  gender!: string;
  createAt!: number;
  category!: Category
}
export class Template {
  id!: string;
  name!: string;
  url!: string;
  thumb!: string;
  object!: string;
  avatarFilePrompt!: string;
  createAt!: number;
  priority!:number;
  category!: Category
}

export class Home {
  male!: AiProfile[];
  female!: AiProfile[];
}
export class AiPosterOption {
  id!: string;
  name!: string;
  type!: string;
  createAt!: number;
}

export class Theme {
  id!: string;
  url!: string;
  thumb!: string;
  type!: string;
  callIcon!: CallIcon;
  category!: Category;
  priority!:number;
  createAt!: number;
}

export class CallIcon {
  id!: string;
  url!: string;
  createAt!: number;

}

export class Category {
  id!: string;
  name!: string;
  type!: string;
  createAt!: number;

}

export class Style {
  id!: string;
  name!: string;
  prompt!: string;
  url!: string;
  createAt!: number;

}
export class StyleHome{
  style! : Style[]
  suggest! : StyleOption[]
  tricks! : StyleOption[]
}

export class Template {
  id!: string;
  name!: string;
  url!: string;
  avatarFilePrompt!: string;
  gender!: string;
  createAt!: number;


}

export class Home {
  male!: Template[];
  female!: Template[];
}
export class StyleOption {
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
  createAt!: number;
}

export class Template {
  id!: number;

  name!: string;

  thumb!: string;

  url!: string;

  type!: string;

  group!: Group;

  femaleLeft: boolean = false;

  femaleImage!: string;

  maleImage!: string;

  premium: boolean = false;

  version: number = 0;

  rank: number = 0;
}

export class Group {

  id!: number;

  name!: string;

  version: number = 0;

  rank: number = 0;

}

export class Template {
  id!: number;

  name!: string;

  thumb!: string;

  url!: string;

  images! : string[];

  type!: string;

  group!: Group;

  music!: Music;

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

export class Music {

  id!: number;

  name!: string;

  url!: string;

}


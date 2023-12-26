export class Image {
  id!: string;

  url!: string;
  type!: string;
}

export class Music {
  id!: string;

  name!: string;

  url!: string;

  description!: string;

  thumb!: string;

  show!: boolean;

  top!: number;
}

export class Style {
  id!: string;

  text!: string[];

  images!: Image[];
  type!: string;
}

export class Trending {
  id!: string;

  name!: string;

  url!: string;

  description!: string;

  thumb!: string;

  show!: boolean;

  trendingType!: TrendingType;

  top!: number;

  group!: string;

  like!: string;

  music!: Music;
}

export class TrendingType {
  id!: string;

  name!: string;

  value!: number;

  url!: string;

  show!: boolean;

  musics!: Music[];

  premium!: boolean;

  top!: number;

  banner!: string;
  requiredVersion!:number;
}

export class FormIcon {
  id !: string;
  alphabets! : Alphabet[];
  name!: string;
}

export class Question {
  id!: number;
  question!: string;
}
export class Alphabet{
  id !: number;
  name! : string;
  url! : string;
}


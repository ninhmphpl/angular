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
}

export class FormIcon {
  id !: string;
  image: string[] = [];
  name!: string;
}


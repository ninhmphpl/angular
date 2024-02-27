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
  requiredVersion!: number;
  icons! : string[]
}

export class PopupTrending {
  id!: number;
  name!: string;
  detail!: string;
  trendingTarget!: Trending;
  image!: string;
}
export class Item {
  id!: number;
  name!: string;
  detail!: string;
  image!: string;
  lock!: boolean;
  type!: string;
  createAt!: number;
  versionRequired!: number;
  show!: number;
  top!: number;
}


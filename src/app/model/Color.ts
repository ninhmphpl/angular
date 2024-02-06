export class Audio {
  id!: number;
  audio!: string;
  thumb!: string;
  duration!: number;
  name!: string;
  author!: string;
}


export class Filter {
  id!: number;
  type!: string;
  name!: string;
  resultImage!: string;
  suggestImage!: string[];
}

export class Model {
  id!: number;
  videoUrl!: string;
  thumb!: string;
  name!: string;
  description!: string;
  filter!: Filter
  type!: Type;
  like!: number;
  priority!: number;
  session! : Session;
  show!:boolean;
  versionRequired!: number;
}

export class Type {
  id!: number;
  name!: string;
  priority!: number;
}

export class Session {
  id!: number;
  name!: string;
}

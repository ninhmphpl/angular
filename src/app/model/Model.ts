export class Alphabet {
  id!: string;
  name!: string;
  image!: string;
  json!:string;
  colors!: Color[];
}

export class Template {
  id!: string;
  name!: string;
  thumb!: string;
  video!: string;
  show!: boolean;
  top!: number;
  like!:number;
  author!:string;
  versionRequired!: number;
  alphabet!: Alphabet; // Giả sử bạn đã định nghĩa export class Alphabet như trước
  sound!: Sound; // Giả sử bạn đã định nghĩa export class Alphabet như trước
  type!:TemplateType
}

export class Sound{
  id!: string;
  name!: string;
  soundUrl!:string;
  thumb!:string;
  author!:string;
}
export class TemplateType{
  id!:string;
  name!:string;
  thumb!:string;
}


export class Color {
  x!: number;
  y!: number;
  url!: string;
}

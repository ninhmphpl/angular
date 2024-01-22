export class Alphabet {
  id!: string;
  name!: string;
  image!: string;
  colors!: Color[];
}

export class Template {
  id!: string;
  name!: string;
  thumb!: string;
  video!: string;
  show!: boolean;
  top!: number;
  versionRequired!: number;
  alphabet!: Alphabet; // Giả sử bạn đã định nghĩa export class Alphabet như trước

}

export class Color {
  x!: number;
  y!: number;
  url!: string;
}

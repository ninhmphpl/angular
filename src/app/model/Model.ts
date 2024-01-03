export class Sticker {
  id!: number;
  images!: string[];
  name!: string;
  premium!: boolean;
}

export class Category {
  id!: number;
  name!: string;
  image!: string;
  stickers!: Sticker[]; // Assuming Sticker is another TypeScript class
}

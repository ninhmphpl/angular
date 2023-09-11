export class Home {

  constructor() {
    this.banner = [];
    this.artis = new Painting("NONE");
    this.magicPainting = new Painting("NONE");
    this.features = [];
    this.aiRemover = [];
  }

  banner: Painting[]
  artis: Painting
  magicPainting: Painting
  features: Painting[]
  aiRemover: Painting[]

}

export class Painting {
  constructor(type : string) {
    this.styles = [];
    this.keyWord = [];
    this.type = type
  }
  id: any
  name: any
  type: any
  description: any
  coverImgUrl: any
  afterImgUrl: any
  beforeImgUrl: any
  styles: Style[]
  keyWord: string[]
}

export class Style {
  constructor() {
    this.name = "new Name";
    this.description = "new Description";
  }
  name: string
  description: string
}

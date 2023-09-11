export interface Home{
  banner: Painting[]
  artis : Painting
  magicPainting: Painting
  features: Painting[]
  aiRemover: Painting[]

}

export interface Painting{
  id : any
  name : any
  type : any
  description : any
  coverImgUrl : any
  afterImgUrl : any
  beforeImgUrl : any
  styles : {name:string, description : string}[]
  keyWord : string[]
}

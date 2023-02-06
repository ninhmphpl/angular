export class Product {
    public id? : number;
    public name = '';
    public price = 0;
    public category = new Category(0, '')
    constructor(){}
}
export class Category {
    public id? : number;
    public name : string = ''
    constructor(id : number , name : string){
        this.id = id;
        this.name = name;
    }
}
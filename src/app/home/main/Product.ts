export interface ProductLite{
    id: number;
    name: string;
    img: string;
    price: number;
    sold: number;
}
export interface ProductDetail{
    name : string;
    rate : number;
    ratings : number;
    img : string;
    imgs : Img[];
    sold: number;
    oldPrice: number;
    newPrice: number;
    voucher: Voucher[];
    color: Color[];
    available: number;
    category: Category;
    brand: Brand;
    shipForm: ShipFrom;
    description: string;
}

export interface Img{
    id : number;
    name: string;
}
export interface Voucher{
    id : number;
    value: number;
    min : number;
}
export interface Color{
    id : number;
    name : string;
}
export interface Category{
    id : number;
    name : string;
}
export interface Brand{
    id : number;
    url : string;
    name : string;
}
export interface ShipFrom{
    id : number;
    name : string;
}



// export let PRODUCT : ProductLite[]= [
//     {name: "ninh",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 123, sold: 23},
//     {name: "game",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 52345, sold: 11},
//     {name: "haha",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 1221233, sold: 324},
//     {name: "iphone",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 1155523, sold: 4210},
//     {name: "lap top",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12233, sold: 20},
//     {name: "may tinh",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 1523, sold: 10},
//     {name: "do choi",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12663, sold: 120},
//     {name: "bong da",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12773, sold: 30},
//     {name: "haha",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 1221233, sold: 324},
//     {name: "iphone",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 1155523, sold: 4210},
//     {name: "lap top",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12233, sold: 20},
//     {name: "may tinh",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 1523, sold: 10},
//     {name: "do choi",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12663, sold: 120},
//     {name: "bong da",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12773, sold: 30},
//     {name: "haha",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 1221233, sold: 324},
//     {name: "iphone",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 1155523, sold: 4210},
//     {name: "lap top",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12233, sold: 20},
//     {name: "may tinh",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 1523, sold: 10},
//     {name: "do choi",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12663, sold: 120},
//     {name: "bong da",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12773, sold: 30},
//     {name: "bong bau duc",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12553, sold: 440},
//     {name: "ninh",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 123, sold: 23},
//     {name: "game",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 52345, sold: 11},
//     {name: "haha",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 1221233, sold: 324},
//     {name: "iphone",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 1155523, sold: 4210},
//     {name: "lap top",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12233, sold: 20},
//     {name: "may tinh",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 1523, sold: 10},
//     {name: "do choi",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12663, sold: 120},
//     {name: "bong da",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12773, sold: 30},
//     {name: "bong bau duc",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12553, sold: 440},
//     {name: "ninh",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 123, sold: 23},
//     {name: "game",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 52345, sold: 11},
//     {name: "haha",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 1221233, sold: 324},
//     {name: "iphone",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 1155523, sold: 4210},
//     {name: "lap top",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12233, sold: 20},
//     {name: "may tinh",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 1523, sold: 10},
//     {name: "do choi",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12663, sold: 120},
//     {name: "bong da",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12773, sold: 30},
//     {name: "bong bau duc",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12553, sold: 440},
//     {name: "ninh",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 123, sold: 23},
//     {name: "game",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 52345, sold: 11},
//     {name: "haha",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 1221233, sold: 324},
//     {name: "iphone",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 1155523, sold: 4210},
//     {name: "lap top",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12233, sold: 20},
//     {name: "may tinh",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 1523, sold: 10},
//     {name: "do choi",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12663, sold: 120},
//     {name: "bong da",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12773, sold: 30},
//     {name: "bong bau duc",img: "https://th.bing.com/th?id=ORMS.ad7c0e8d8e8c0ed007e01cb81f2971ef&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0", price: 12553, sold: 440},
// ]
    

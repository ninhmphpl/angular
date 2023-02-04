import { ProductLite } from "./Product";

// {
//     "content": [
//         {
//             "id": 19,
//             "name": "Tai nghe bluetooth không dây I7S TWS có micro hỗ trợ tập thể thao thích hợp cho Apple IPhone",
//             "img": "https://cdn4.buysellads.net/uu/1/127419/1670532177-Stock.jpg",
//             "price": 1000.0,
//             "sold": 1234
//         }
//     ],
//     "pageable": {
//         "sort": {
//             "empty": false,
//             "sorted": true,
//             "unsorted": false
//         },
//         "offset": 0,
//         "pageNumber": 0,
//         "pageSize": 3,
//         "paged": true,
//         "unpaged": false
//     },
//     "last": false,
//     "totalElements": 18,
//     "totalPages": 6,
//     "size": 3,
//     "number": 0,
//     "sort": {
//         "empty": false,
//         "sorted": true,
//         "unsorted": false
//     },
//     "numberOfElements": 3,
//     "first": true,
//     "empty": false
// }
export interface Page{
    content : ProductLite[];
    pageable : Pageable;
    last : boolean;
    totalElements : number;
    totalPages : number;
    size : number;
    number : number;
    sort : Sort;
    numberOfElements : number;
    first : boolean;
    empty : boolean;
}
export interface Sort{
    empty : boolean;
    sorted : boolean;
    unsorted : boolean;
}
export interface Pageable{
    sort : Sort;
    offset : number;
    pageNumber : number;
    pageSize : number;
    paged : boolean;
    unpaged : boolean;
}
export interface ProductLite{
    id?: number;
    name?: string;
    img?: string;
    price?: number;
    sold?: number;
}
export interface ProductDetail{
    name ?: string;
    rate ?: number;
    ratings ?: number;
    img ?: string;
    imgs ?: Img[];
    sold ?: number;
    oldPrice ?: number;
    newPrice ?: number;
    voucher ?: Voucher[];
    color ?: Color[];
    available ?: number;
    category ?: Category;
    brand ?: Brand;
    shipForm ?: ShipFrom;
    description ?: string;
}
export class Image implements Img{
}
export interface Img{
    id ?: number;
    name?: string;
    url ?: string;
}
export interface Voucher{
    id ?: number;
    value?: number;
    min ?: number;
}
export interface Color{
    id ?: number;
    name ?: string;
}
export interface Category{
    id ?: number;
    name ?: string;
}
export interface Brand{
    id ?: number;
    url ?: string;
    name ?: string;
}
export interface ShipFrom{
    id ?: number;
    name ?: string;
}

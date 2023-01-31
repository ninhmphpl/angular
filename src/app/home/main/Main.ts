import { ProductLite } from "./Product";

interface Page {
    pageNow: number;
    products: ProductLite[];
    numberPageTolal: number;
}

export class RenderPage {

    private productOrigin!: ProductLite[];
    private products!: ProductLite[][];
    private page: Page;

    constructor(productOrigin: ProductLite[]) {
        this.productOrigin = productOrigin;
        this.products = [];
        this.page = {
            pageNow: 0,
            products: [],
            numberPageTolal: 0,
        };
        this.renderPage(this.productOrigin)
    }

    public renderPage(products: ProductLite[]) {
        let NUMBER_PRODUCT_DEFAUT = 8;
        let page = 0;
        let nowRender;
        while ((nowRender = page * NUMBER_PRODUCT_DEFAUT) < products.length) {
            let arr = [];
            for (let i = nowRender; i < (nowRender + NUMBER_PRODUCT_DEFAUT); i++) {
                arr.push(products[i])
            }
            this.products.push(arr)
            page++
        }
        if (this.products.length > 0) {
            this.page.products = this.products[0]
        }
        this.page.numberPageTolal = this.products.length
    }

    public getPageNow() : number{
        return this.page.pageNow
    }
    public getPageTolal() : number{
        return this.page.numberPageTolal
    }

    public setPageNow(page : number) : ProductLite[]{
        this.page.pageNow = page
        return this.page.products= this.products[page]
    }





}
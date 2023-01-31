import { Injectable } from "@angular/core";
import { ProductLite } from "../home/main/Product";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
  })
export class ProductServiceLite extends ApiService<ProductLite>{

}
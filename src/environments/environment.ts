// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HttpHeaders } from "@angular/common/http"
import { HttpOptions } from "./Api"

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAunDHJ-xdqfOP75d5FZrWKFXpvRHyKw84",
    authDomain: "product-2023.firebaseapp.com",
    projectId: "product-2023",
    storageBucket: "product-2023.appspot.com",
    messagingSenderId: "110504742968",
    appId: "1:110504742968:web:face4d722781780f6f16cd",
    measurementId: "G-Y5TVVQ4178"
  },
  url : "http://localhost:8080"
};


export const httpOptions : HttpOptions = {
    headers : new HttpHeaders({
        
    })
}

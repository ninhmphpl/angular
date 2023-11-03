import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Style} from "./model/style";
import {Painting} from "./model/painting";
import {environment} from "./environment";
import {LoginService} from "./login/login.service";
import {Category} from "./model/Category";


@Injectable({
  providedIn: 'root'
})
export class PaintingService {
  url = environment.url
  styles: Style[] = []
  banner: Painting[] = []
  artisAndMagic: Painting[] = []
  features: Painting[] = []
  aiRemove: Painting[] = []
  key: string[] = []

  constructor(private http: HttpClient,private login : LoginService) {
  }

  get(painting ? : (pain : PaintingService)=> any) {
    this.getStyle()
    this.getPainting(painting)
    this.getKey()
  }



  getPainting(get? : (get : any) => any) {
    this.http.get(this.url + "/pain/home").subscribe((payload: any) => {
      this.banner = payload.data.banner;
      this.aiRemove = payload.data.aiRemover;
      this.features = payload.data.features;
      this.artisAndMagic = []
      this.artisAndMagic.push(payload.data.magicPainting, payload.data.artis)
      if(get) get(this)
    }, error => {
      alert(error.error.detail)
    })
  }

  savePain(pain: Painting, getPain: (pain: Painting) => any) {
    this.http.post(this.url + "/pain", pain, this.login.getHeader()).subscribe((payload: any) => {
      getPain(payload.data)
    }, error => {
      alert(error.error.detail)
    })
  }

  deletePain(id: string, result: () => any) {
    if(confirm("Delete ?")){
      this.http.delete(this.url + "/pain/" + id, this.login.getHeader()).subscribe((payload: any) => {
        result()
      }, error => {
        alert(error.error.detail)
      })
    }
  }

  getStyle() {
    console.log(this.url + "/style" + ((this.categorySelect)?("?category_id=" + this.categorySelect.id):("")))
    this.http.get(this.url + "/style" + ((this.categorySelect)?("?category_id=" + this.categorySelect.id):(""))).subscribe((payload: any) => {
      this.styles = payload.data
    }, error => {
      alert(error.error.detail)
    })
  }

  saveStyle(style: Style, getStyle: (style: Style) => any) {
    this.http.post(this.url + "/style", style, this.login.getHeader()).subscribe((payload: any) => {
      getStyle(payload.data)
    }, error => {
      alert(error.error.detail)
    })
  }

  deleteStyle(style: Style, result: () => any) {
    if(confirm("Delete ?")){
      this.http.delete(this.url + "/style/" + style.id, this.login.getHeader()).subscribe((payload: any) => {
        result()
      }, error => {
        alert(error.error.detail)
      })
    }
  }

  getKey() {
    this.http.get(this.url + "/key").subscribe((payload: any) => {
      this.key = payload.data
      this.key.sort((a, b) => a.localeCompare(b))
    }, error => {
      alert(error.error.detail)
    })
  }

  saveKey(key: string, action : ()=> any) {
    this.http.post(this.url + "/key", {name: key}, this.login.getHeader()).subscribe((payload: any) => {
      if (this.key.indexOf(payload.data.name) == -1) this.key.push(payload.data.name)
      this.key.sort((a, b) => a.localeCompare(b))
      action()
    }, error => {
      alert(error.error.detail)
    })
  }

  deleteKey(key: string, action : ()=> any) {
    if(confirm("Delete ?")){
      this.http.delete(this.url + "/key/" + key, this.login.getHeader()).subscribe((payload: any) => {
        this.key.splice(this.key.indexOf(key), 1)
        action()
      }, error => {
        alert(error.error.detail)
      })
    }
  }
// ======================= Category ============================
  categories : Category[] = []
  categorySelect!:Category
  getCategory() {
    this.http.get(this.url + "/now/category").subscribe((payload: any) => {
      this.categories = payload.data
    }, error => {
      alert(error.error.detail)
    })
  }

  createCategory(){
    this.http.post(this.url + "/now/category", new Category(), this.login.getHeader()).subscribe((payload: any) => {
      this.categories.unshift(payload.data)
    }, error => {
      alert(error.error.detail)
    })
  }

  saveCategory(i : number) {
    this.http.post(this.url + "/now/category", this.categories[i], this.login.getHeader()).subscribe((payload: any) => {
      this.categories[i] = payload.data
    }, error => {
      alert(error.error.detail)
    })
  }

  deleteCategory(i : number) {
    if(confirm("Delete ?")){
      this.http.delete(this.url + "/now/category/" + this.categories[i].id, this.login.getHeader()).subscribe((payload: any) => {
        this.categories.splice(i,1)
      }, error => {
        alert(error.error.detail)
      })
    }
  }

}

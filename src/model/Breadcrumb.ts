export class Breadcrumb{

  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }

  name! : string;
  url! : string;
}

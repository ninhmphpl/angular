import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Image} from "../model/Model";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-style-image',
  templateUrl: './style-image.component.html',
  styleUrls: ['./style-image.component.scss']
})
export class StyleImageComponent {
  constructor(public api: ApiService) {
  }

  @Output() dataEvent = new EventEmitter<Image[]>();
  @Input() images!: Image[];

  create() {
    if (this.images == null) {
      this.images = []
    }
    this.api.createImage(image => {
      this.images.push(image)
      this.dataEvent.emit(this.images)
    })
  }

  update(i: number) {
    this.api.updateImage(this.images[i], image => {
      this.images[i] = image
      this.dataEvent.emit(this.images)
    })
  }

  delete(i: number) {
    this.images.splice(i, 1)
    this.dataEvent.emit(this.images)
    for (let i = 0; i < this.images.length; i++) {
      this.api.deleteImage(this.images[i].id, () => this.dataEvent.emit(this.images))
    }
  }


}

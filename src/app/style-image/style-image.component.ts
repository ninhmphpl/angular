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

  @Output() dataEvent = new EventEmitter<undefined>();
  @Input() images!: Image[];

  create() {
    if (this.images == null) {
      this.images = []
    }
    this.api.createImage(null, image => {
      this.images.push(image)
      this.dataEvent.emit()
    })
  }

  update(i: number) {
    this.api.updateImage(this.images[i], image => {
      this.images[i] = image
      this.dataEvent.emit()
    })
  }

  delete(i: number) {
    this.api.deleteImage(this.images[i].id, () => {
      this.images.splice(i,1)
      this.dataEvent.emit()
    })
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { image } from '../_models/image';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {

  @Input() images!: image[];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { PhotosService } from "../photos.service";

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.scss']
})
export class PhotoShowComponent implements OnInit {
  photoUrl!: string;

  constructor(private photosService: PhotosService) {
    this.fetchPhoto();
  }

  ngOnInit(){
  }

  randomPhoto() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photosService.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
      console.log(response.urls.regular);
    });
  }
}

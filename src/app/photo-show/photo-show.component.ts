import { Component } from '@angular/core';
import { RandomPhotoService } from '../random-photo.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})

export class PhotoShowComponent {
  photoUrl: string = '';
  photoDescription: string = '';

  constructor( private photosService: RandomPhotoService ){
    this.fetchPhoto();
  }

  onClick(){
    this.fetchPhoto();
  }

  fetchPhoto(){
    this.photosService.getPhoto().subscribe( ( response ) => {
      console.log( response.alt_description )
      this.photoUrl = response.urls.regular
      this.photoDescription = response.alt_description
    })
  }
}

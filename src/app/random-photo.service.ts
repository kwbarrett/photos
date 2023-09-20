import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse{
  alt_description: string,
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class RandomPhotoService {

  constructor( private http: HttpClient ) { }

  public getPhoto(){
    return this.http.get<UnsplashResponse>( 'https://api.unsplash.com/photos/random/',{
      params: {
        client_id: 'uhtKBNbC_-ZXdtfLgkF0Wi8dZ-FfpC1tX0i2gNs9VAY'
      }/*
      headers: {
        Authorization: 'Client-ID uhtKBNbC_-ZXdtfLgkF0Wi8dZ-FfpC1tX0i2gNs9VAY'
      }*/
    } )
  }
}

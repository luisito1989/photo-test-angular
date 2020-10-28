import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageServicesService {

  URI = 'https://jsonplaceholder.typicode.com/albums';
  uriP = 'https://jsonplaceholder.typicode.com/photos';
  uriPost = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getAlbums(){
    return this.http.get(this.URI);
  }

  getPhotos(id: String){
    return this.http.get(`${this.URI}/${id}/photos`);
  }

  getPosts(){
    return this.http.get(this.uriPost);
  }
}

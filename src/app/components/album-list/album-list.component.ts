import { Component, OnInit } from '@angular/core';
import { ImageServicesService } from 'src/app/services/image-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  Albums = [];

  constructor(private ImageService: ImageServicesService, private router: Router) { }

  ngOnInit(){
    this.ImageService.getAlbums().subscribe((res: any) =>{
      //console.log(res);
      this.Albums = res;
    });
  }

  showPhotos(id: string){
    //console.log(id);
    this.router.navigate(['/album', id]);

  }

}

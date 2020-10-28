import { Component, OnInit } from '@angular/core';
import { ImageServicesService } from '../../services/image-services.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  Photos = [];
  id: string;
  constructor( 
    private imageService: ImageServicesService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.imageService.getPhotos(this.id).subscribe((res: any) => {
        this.Photos = res;
      })
    });
    
  }

}

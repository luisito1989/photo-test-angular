import { Component, OnInit } from '@angular/core';
import { ImageServicesService } from '../../services/image-services.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor( private ImageService: ImageServicesService ) { }

  Posts = [];

  ngOnInit(): void {
    this.ImageService.getPosts().subscribe((res: any)=>{
      this.Posts = res;
    });
  }

}

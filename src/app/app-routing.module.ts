import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { Page404Component } from './page404/page404.component'

const routes: Routes = [
  {
    path: 'albums',
    component: AlbumListComponent
  },
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: 'album/:id',
    component: PhotoListComponent
  },
  {
    path: 'photo/:id',
    component: PhotoPreviewComponent
  },
  {
    path: '',
    redirectTo: 'albums',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

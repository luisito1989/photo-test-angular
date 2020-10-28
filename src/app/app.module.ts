import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ImgListComponent } from './components/img-list/img-list.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    PhotoListComponent,
    PhotoPreviewComponent,
    PostListComponent,
    NavigationComponent,
    ImgListComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

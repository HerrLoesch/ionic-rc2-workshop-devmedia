import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { DetailsPage } from '../pages/details/details';
import { HomePage } from '../pages/home/home';
import { FavoritePage } from '../pages/favorite/favorite';
import { AboutPage } from '../pages/about/about';

import {Movies} from '../providers/movies';
import {AddFavoritePage} from "../pages/add-favorite/add-favorite";

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    DetailsPage,
    HomePage,
    FavoritePage,
    AboutPage,
    AddFavoritePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    DetailsPage,
    HomePage,
    FavoritePage,
    AboutPage,
    AddFavoritePage
  ],
  providers: [Movies]
})
export class AppModule {}

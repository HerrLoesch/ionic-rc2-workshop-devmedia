import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { DetailsPage } from '../pages/details/details';

import {Movies} from '../providers/movies';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    DetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    DetailsPage
  ],
  providers: [Movies]
})
export class AppModule {}

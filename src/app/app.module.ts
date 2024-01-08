import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import {HttpClientModule} from '@angular/common/http';
import { ListAnnoncesComponent } from './list-annonces/list-annonces.component';
import { EstimationCoutComponent } from './estimation-cout/estimation-cout.component';
import { FormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnoncesComponent,
    ListAnnoncesComponent,
    EstimationCoutComponent,
    PageComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

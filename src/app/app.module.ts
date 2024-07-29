import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './user-panel/shared/navbar/navbar.component';
import { FooterComponent } from './user-panel/shared/footer/footer.component';
import { HomeComponent } from './user-panel/home/home.component';
import { Router } from '@angular/router';
import { MoviesComponent } from './user-panel/movies/movies.component';
import { MoviesopenComponent } from './user-panel/moviesopen/moviesopen.component';
import { SupportComponent } from './user-panel/support/support.component';
import { SubscriptionsComponent } from './user-panel/subscriptions/subscriptions.component';
import {HttpClientModule} from '@angular/common/http';
import { GenresComponent } from './user-panel/genres/genres.component';
import { GenresopenComponent } from './user-panel/genresopen/genresopen.component';
import { RecommendedFilmsComponent } from './recommended-films/recommended-films.component';
import { RecommendFilmModalComponent } from './recommend-film-modal/recommend-film-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    MoviesopenComponent,
    SupportComponent,
    SubscriptionsComponent,
    GenresComponent,
    GenresopenComponent,
    RecommendedFilmsComponent,
    RecommendFilmModalComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

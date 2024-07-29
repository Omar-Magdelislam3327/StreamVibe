import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user-panel/home/home.component';
import { MoviesComponent } from './user-panel/movies/movies.component';
import { MoviesopenComponent } from './user-panel/moviesopen/moviesopen.component';
import { SupportComponent } from './user-panel/support/support.component';
import { GenresComponent } from './user-panel/genres/genres.component';
import { GenresopenComponent } from './user-panel/genresopen/genresopen.component';
import { RecommendedFilmsComponent } from './recommended-films/recommended-films.component';


const routes: Routes = [
  {
    path: 'home', component:HomeComponent,title:"StreamVibe / Home"
  },
  {
    path:"" , redirectTo : "home", pathMatch:"full"
  },
  {
    path: 'movies',component:MoviesComponent , title:"StreamVibe / Movies"
  },
  {
    path: 'show/:id', component:MoviesopenComponent,title:"StreamVibe / Movies"
  },
  {
    path: 'support', component:SupportComponent,title:"StreamVibe / Support"
  },
  {
    path: 'subscriptions', component:HomeComponent,title:"StreamVibe / Subscriptions"
  },
  {
    path:"genres" , component:GenresComponent , title:"StreamVibe / Genres"
  },
  {
    path:"genre/:id" , component:GenresopenComponent , title:"StreamVibe / Genres"
  },
  {
    path: 'recommended-films', component: RecommendedFilmsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

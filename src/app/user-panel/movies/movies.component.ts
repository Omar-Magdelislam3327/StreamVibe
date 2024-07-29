import { Component, OnInit } from '@angular/core';
import { FilmsApiService } from 'src/app/controllers/films-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  films: any[] = [];
  newReleaseFilms: any[] = [];

  constructor(private api: FilmsApiService) {}

  ngOnInit() {
    this.api.get().subscribe((data: any) => {
      this.films = data;
      this.filterNewReleases();
      console.log('API Response:', data);
    });
  }

  filterNewReleases() {
    this.newReleaseFilms = this.films.filter(film => film.isNewRelease).slice(0, 4);
    console.log('Filtered New Releases:', this.newReleaseFilms);
  }
}

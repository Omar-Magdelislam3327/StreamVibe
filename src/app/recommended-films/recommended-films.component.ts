import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { films } from 'src/app/modules/films';
import { FilmsApiService } from '../controllers/films-api.service';

@Component({
  selector: 'app-recommended-films',
  templateUrl: './recommended-films.component.html',
  styleUrls: ['./recommended-films.component.css']
})
export class RecommendedFilmsComponent implements OnInit {
  films: films[] = [];
  category1: string = '';
  category2: string = '';

  constructor(private route: ActivatedRoute, private filmsApiService: FilmsApiService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.category1 = params['category1'];
      this.category2 = params['category2'];
      this.getRecommendedFilms();
    });
  }

  getRecommendedFilms() {
    this.filmsApiService.getAllFilms().subscribe((allFilms: films[]) => {
      this.films = allFilms.filter(film =>
        film.type.includes(this.category1) && film.type.includes(this.category2)
      );
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsApiService } from 'src/app/controllers/films-api.service';
import { GenresApiService } from 'src/app/controllers/genres-api.service';
import { genres } from 'src/app/modules/genres';

@Component({
  selector: 'app-genresopen',
  templateUrl: './genresopen.component.html',
  styleUrls: ['./genresopen.component.css']
})
export class GenresopenComponent implements OnInit {
  id!: any;
  film: any[] = [];
  genre = new genres();
  selectedType: string = '';
  filteredFilms: any[] = [];

  constructor(
    private api: GenresApiService,
    private activ: ActivatedRoute,
    private filmapi: FilmsApiService
  ) {}

  ngOnInit(): void {
    // Fetch the genre by ID
    this.id = this.activ.snapshot.params['id'];
    this.api.getById(this.id).subscribe((data: any) => {
      this.genre = data;
    });

    // Fetch all films
    this.filmapi.get().subscribe((data: any) => {
      this.film = data;
      this.filterFilms();
    });

    // Read the selected type from query parameters
    this.activ.queryParams.subscribe(params => {
      if (params['type']) {
        this.selectedType = params['type'];
        this.filterFilms();
      }
    });
  }

  // Filter films based on the selected type
  filterFilms(): void {
    if (this.selectedType) {
      this.filteredFilms = this.film.filter(film => film.type.includes(this.selectedType));
    } else {
      this.filteredFilms = this.film;
    }
  }
}

import { Component } from '@angular/core';
import { GenresApiService } from 'src/app/controllers/genres-api.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent {
  genres!:any;
  constructor(private api: GenresApiService){
    this.api.get().subscribe((data:any)=>{
      this.genres = data;
    })
  }
}

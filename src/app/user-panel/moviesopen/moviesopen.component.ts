import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsApiService } from 'src/app/controllers/films-api.service';
import { films } from 'src/app/modules/films';

@Component({
  selector: 'app-moviesopen',
  templateUrl: './moviesopen.component.html',
  styleUrls: ['./moviesopen.component.css']
})
export class MoviesopenComponent {
  id: any;
  film = new films();
  constructor(private api:FilmsApiService , private ActivatedRoute: ActivatedRoute){
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.api.getById(this.id).subscribe((data:any)=>{
      console.log(data);
      this.film = data;
    })
  }
}

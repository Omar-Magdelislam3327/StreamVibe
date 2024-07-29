import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecommendFilmModalComponent } from 'src/app/recommend-film-modal/recommend-film-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  genres = [
    { id: 1, name: 'Action', image: 'assets\\vendors\\imgs\\action.png' },
    { id: 2, name: 'Drama', image: 'assets\\vendors\\imgs\\drama.png' },
    { id: 3, name: 'Horror', image: 'assets\\vendors\\imgs\\horror.png' },
    { id: 4, name: 'Comedy', image: 'assets\\vendors\\imgs\\comdey.png' },
    { id: 5, name: 'Adventure', image: 'assets\\vendors\\imgs\\adventure.png' }
  ];

  constructor(private modalService: NgbModal) {}

  openRecommendFilmModal() {
    const modalRef = this.modalService.open(RecommendFilmModalComponent, { centered: true });
    modalRef.componentInstance.genres = this.genres;
  }
}

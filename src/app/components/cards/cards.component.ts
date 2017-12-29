import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  names: Names[];
  profPics: ProfPics[];
  rel: '';

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getNames().subscribe((names) => {
      this.names = names;
    });
    this.dataService.getProfPic().subscribe((profPics) => {
      this.profPics = profPics;
    });
  }


}

interface Names {
  id: number;
  first_name: string;
  last_name: string;

}

interface ProfPics {
  id: number;
  profile_id: number;
  image_path: string;
}

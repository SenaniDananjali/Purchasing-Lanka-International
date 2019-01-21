import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {BsModalService} from 'ngx-bootstrap';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  prefLocations: PrefLocations[];
  names: Names[];
  allLocs: AllLocs[];

  constructor(private dataService: DataService) {
  }

  radioData = 'name';

  selected: boolean;
  search = '';

  ngOnInit() {
    this.selected = true;

    this.dataService.getPrefferedLocations().subscribe((prefLocations) => {
      this.prefLocations = prefLocations;
    });

    this.dataService.getLocations().subscribe((allLocs) => {
      this.allLocs = allLocs;
      console.log(this.allLocs);
    });

    this.dataService.getNames().subscribe((names) => {
      this.names = names;
    });

  }


  onSearch() {
    console.log(this.search);

  }

  advancedSearch() {
  }

}

interface PrefLocations {
  dp_id: number;
  loc: string;
}

interface AllLocs {
  city: string;
}

interface Names {
  id: number;
  first_name: string;
  last_name: string;
}

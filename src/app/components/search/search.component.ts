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
  dpForLocation: DpForLocation[];
  nump: number;
  numl: number;

  count:number=0;

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

    // console.log(this.names[1].)
  }


  onSearch() {
    console.log(this.search);

  }

  advancedSearch() {
  }

  // filterDpForLocation(num) {
  //
  //   for (this.numl = 0; this.numl < this.allLocs.length; numl++) {
  //     for(nump=0;nump<this.prefLocations;nump++){
  //       if (this.allLocs[numl].city == this.prefLocations[nump].loc) {
  //         this.dpForLocation[this.count].loc=this.allLocs[numl].city;
  //
  //         this.dpForLocation[this.count].dp.push();
  //       }
  //     }
  //
  //   }
  // }

}

interface DpForLocation {
  loc: string;
  dp: Names[];

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

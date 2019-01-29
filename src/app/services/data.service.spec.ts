import {TestBed, inject, async} from '@angular/core/testing';
import {DataService} from './data.service';
import {HttpModule} from '@angular/http';

describe('DataService', () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [DataService]
    });

  });
  beforeEach(inject([DataService], s => {
    service = s;
  }));

  it('should return available names', async(() => {
    service.getNames().subscribe(x => {
      expect(x).toContain(
        Object({
          id: '1',
          first_name: 'Emma',
          last_name: 'Olivia',
          description: 'We were all very young and were just doing what we loved.'
        }));
      expect(x).toContain(
        Object({
          'id': '2',
          'first_name': 'Emma',
          'last_name': 'Isabella',
          'description': 'We were all very young and were just doing what we loved.'
        }));
      expect(x).toContain(
        Object({'id': '3', 'first_name': 'Jacob', 'last_name': 'William', 'description': 'We were just working and doing what we loved '}));

      expect(x).toContain(
        Object({
          'id': '4',
          'first_name': 'James',
          'last_name': 'Alexander',
          'description': 'Famous for styling the tresses of Kate Moss, Sienna Miller and Emma Watson\r\n'
        }));
      console.log('getNames() success');
    });

  }));
  it('should return available slots', async(() => {
    service.getBusyDates().subscribe(x => {
      expect(x).toContain({'dp': '1', 'busy': '2019-01-17', 'slot': '8AM - 12PM'});
      expect(x).toContain({'dp': '2', 'busy': '2019-01-18', 'slot': '1PM - 5PM'});
      expect(x).toContain({'dp': '1', 'busy': '2018-01-10', 'slot': '1PM - 5PM'});
      expect(x).toContain({'dp': '3', 'busy': '2019-01-23', 'slot': '1PM - 5PM'});
      expect(x).toContain({'dp': '2', 'busy': '2019-01-29', 'slot': '8AM - 12PM'});
      expect(x).toContain({'dp': '2', 'busy': '2019-01-28', 'slot': '1PM - 5PM'});
      expect(x).toContain({'dp': '3', 'busy': '2019-01-17', 'slot': '8AM - 12PM'});
      expect(x).toContain({'dp': '2', 'busy': '2019-01-30', 'slot': '8AM - 12PM'});
      expect(x).toContain({'dp': '3', 'busy': '2019-01-22', 'slot': '8AM - 12PM'});
      console.log('getbusydates() success');

    });
  }));
  it('should return available locations', async(() => {
    service.getLocations().subscribe(x => {
      expect(x).toContain({'dp_id': '1', 'loc': 'Badulla'});
      expect(x).toContain({'dp_id': '1', 'loc': 'Bandarawela'});
      expect(x).toContain({'dp_id': '1', 'loc': 'Welimada'});
      expect(x).toContain({'dp_id': '2', 'loc': 'Colombo1'});
      expect(x).toContain({'dp_id': '2', 'loc': 'Colombo2'});
      expect(x).toContain({'dp_id': '2', 'loc': 'Gampaha'});
      expect(x).toContain({'dp_id': '3', 'loc': 'Matara'});
      expect(x).toContain({'dp_id': '3', 'loc': 'Galle'});
      expect(x).toContain({'dp_id': '3', 'loc': 'Weligama'});
      expect(x).toContain({'dp_id': '4', 'loc': 'Gampaha'});
      expect(x).toContain({'dp_id': '4', 'loc': 'Kelaniya'});
      console.log('getLocations() success');

    });
  }));
  it('should return available jobs', async(() => {
    service.getJob().subscribe(x => {
      expect(x).toContain({'job': 'DeliveryPerson'});
      expect(x).toContain({'job': 'Customer'});

      console.log('getJobs() success');

    });

  }));
  it('should return available locations for search', async(() => {
    service.getLocationsForSearch().subscribe(x => {
      expect(x).toContain({'city': 'Badulla'});
      expect(x).toContain({'city': 'Bandarawela'});
      expect(x).toContain({'city': 'Welimada'});
      expect(x).toContain({'city': 'Colombo1'});
      expect(x).toContain({'city': 'Colombo2'});
      expect(x).toContain({'city': 'Gampaha'});
      expect(x).toContain({'city': 'Kelaniya'});
      expect(x).toContain({'city': 'Matara'});
      expect(x).toContain({'city': 'Weligama'});
      expect(x).toContain({'city': 'Weligama'});


      console.log('getLocsForSearch() success');

    });

  }));

  it('should return available preffered locations', async(() => {
    service.getPrefferedLocations().subscribe(x => {
      expect(x).toContain({"dp_id":"1","loc":"Badulla"});
      expect(x).toContain({"dp_id":"1","loc":"Bandarawela"});
      expect(x).toContain({"dp_id":"1","loc":"Welimada"});
      expect(x).toContain({"dp_id":"2","loc":"Colombo1"});
      expect(x).toContain({"dp_id":"2","loc":"Colombo2"});
      expect(x).toContain({"dp_id":"2","loc":"Gampaha"});



      console.log('getPrefferedLocations() success');

    });

  }));
});

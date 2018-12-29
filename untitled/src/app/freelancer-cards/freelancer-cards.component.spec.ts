import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerCardsComponent } from './freelancer-cards.component';

describe('FreelancerCardsComponent', () => {
  let component: FreelancerCardsComponent;
  let fixture: ComponentFixture<FreelancerCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

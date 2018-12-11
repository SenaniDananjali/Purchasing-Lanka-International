import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelacerPageComponent } from './freelacer-page.component';
import {describe, expect} from "@angular/core/testing/src/testing_internal";

describe('FreelacerPageComponent', () => {
  let component: FreelacerPageComponent;
  let fixture: ComponentFixture<FreelacerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelacerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelacerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

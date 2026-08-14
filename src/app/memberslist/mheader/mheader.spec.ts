import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mheader } from './mheader';

describe('Mheader', () => {
  let component: Mheader;
  let fixture: ComponentFixture<Mheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mheader],
    }).compileComponents();

    fixture = TestBed.createComponent(Mheader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

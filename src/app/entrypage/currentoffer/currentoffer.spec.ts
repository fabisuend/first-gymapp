import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Currentoffer } from './currentoffer';

describe('Currentoffer', () => {
  let component: Currentoffer;
  let fixture: ComponentFixture<Currentoffer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Currentoffer],
    }).compileComponents();

    fixture = TestBed.createComponent(Currentoffer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

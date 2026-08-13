import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondaryofferadd } from './secondaryofferadd';

describe('Secondaryofferadd', () => {
  let component: Secondaryofferadd;
  let fixture: ComponentFixture<Secondaryofferadd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secondaryofferadd],
    }).compileComponents();

    fixture = TestBed.createComponent(Secondaryofferadd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

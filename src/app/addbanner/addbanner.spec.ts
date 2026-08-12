import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addbanner } from './addbanner';

describe('Addbanner', () => {
  let component: Addbanner;
  let fixture: ComponentFixture<Addbanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addbanner],
    }).compileComponents();

    fixture = TestBed.createComponent(Addbanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

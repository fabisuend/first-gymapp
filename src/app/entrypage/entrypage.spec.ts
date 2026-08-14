import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entrypage } from './entrypage';

describe('Entrypage', () => {
  let component: Entrypage;
  let fixture: ComponentFixture<Entrypage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Entrypage],
    }).compileComponents();

    fixture = TestBed.createComponent(Entrypage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

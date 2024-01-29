import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHomePageTypeFormationComponent } from './card-home-page-type-formation.component';

describe('CardHomePageTypeFormationComponent', () => {
  let component: CardHomePageTypeFormationComponent;
  let fixture: ComponentFixture<CardHomePageTypeFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHomePageTypeFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardHomePageTypeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

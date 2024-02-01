import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormationPresentationComponent } from './card-formation-presentation.component';

describe('CardFormationPresentationComponent', () => {
  let component: CardFormationPresentationComponent;
  let fixture: ComponentFixture<CardFormationPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFormationPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardFormationPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

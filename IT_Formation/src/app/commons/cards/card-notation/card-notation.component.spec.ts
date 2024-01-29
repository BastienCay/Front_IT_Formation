import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNotationComponent } from './card-notation.component';

describe('CardNotationComponent', () => {
  let component: CardNotationComponent;
  let fixture: ComponentFixture<CardNotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNotationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardNotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

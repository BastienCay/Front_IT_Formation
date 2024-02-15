import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMesFormationsComponent } from './card-mes-formations.component';

describe('CardMesFormationsComponent', () => {
  let component: CardMesFormationsComponent;
  let fixture: ComponentFixture<CardMesFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMesFormationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMesFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

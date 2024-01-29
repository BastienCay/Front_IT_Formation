import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPartenersComponent } from './card-parteners.component';

describe('CardPartenersComponent', () => {
  let component: CardPartenersComponent;
  let fixture: ComponentFixture<CardPartenersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPartenersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPartenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

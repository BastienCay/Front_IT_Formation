import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPartenerComponent } from './card-partener.component';

describe('CardPartenerComponent', () => {
  let component: CardPartenerComponent;
  let fixture: ComponentFixture<CardPartenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPartenerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPartenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

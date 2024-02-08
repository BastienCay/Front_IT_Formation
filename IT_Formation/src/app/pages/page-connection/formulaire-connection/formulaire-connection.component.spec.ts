import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireConnectionComponent } from './formulaire-connection.component';

describe('FormulaireConnectionComponent', () => {
  let component: FormulaireConnectionComponent;
  let fixture: ComponentFixture<FormulaireConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireConnectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireEvaluationComponent } from './formulaire-evaluation.component';

describe('FormulaireEvaluationComponent', () => {
  let component: FormulaireEvaluationComponent;
  let fixture: ComponentFixture<FormulaireEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireEvaluationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

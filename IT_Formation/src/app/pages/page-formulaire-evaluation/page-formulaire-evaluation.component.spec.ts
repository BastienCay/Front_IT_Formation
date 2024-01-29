import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormulaireEvaluationComponent } from './page-formulaire-evaluation.component';

describe('PageFormulaireEvaluationComponent', () => {
  let component: PageFormulaireEvaluationComponent;
  let fixture: ComponentFixture<PageFormulaireEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFormulaireEvaluationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageFormulaireEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

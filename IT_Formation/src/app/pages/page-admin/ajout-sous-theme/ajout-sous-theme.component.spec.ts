import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSousThemeComponent } from './ajout-sous-theme.component';

describe('AjoutSousThemeComponent', () => {
  let component: AjoutSousThemeComponent;
  let fixture: ComponentFixture<AjoutSousThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutSousThemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutSousThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

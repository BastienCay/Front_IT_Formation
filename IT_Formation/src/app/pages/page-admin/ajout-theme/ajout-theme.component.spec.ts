import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutThemeComponent } from './ajout-theme.component';

describe('AjoutThemeComponent', () => {
  let component: AjoutThemeComponent;
  let fixture: ComponentFixture<AjoutThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutThemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

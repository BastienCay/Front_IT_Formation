import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAdresseComponent } from './ajout-adresse.component';

describe('AjoutAdresseComponent', () => {
  let component: AjoutAdresseComponent;
  let fixture: ComponentFixture<AjoutAdresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutAdresseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

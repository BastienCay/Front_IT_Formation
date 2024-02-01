import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerMenuNavComponent } from './burger-menu-nav.component';

describe('BurgerMenuNavComponent', () => {
  let component: BurgerMenuNavComponent;
  let fixture: ComponentFixture<BurgerMenuNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerMenuNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BurgerMenuNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

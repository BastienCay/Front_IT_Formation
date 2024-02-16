import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSessionFormationComponent } from './page-session-formation.component';

describe('PageSessionFormationComponent', () => {
  let component: PageSessionFormationComponent;
  let fixture: ComponentFixture<PageSessionFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSessionFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageSessionFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

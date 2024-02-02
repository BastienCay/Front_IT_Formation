import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNosFormationsComponent } from './page-nos-formations.component';

describe('PageNosFormationsComponent', () => {
  let component: PageNosFormationsComponent;
  let fixture: ComponentFixture<PageNosFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNosFormationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageNosFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

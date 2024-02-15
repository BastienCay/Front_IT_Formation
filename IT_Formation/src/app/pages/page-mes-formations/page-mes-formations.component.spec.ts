import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMesFormationsComponent } from './page-mes-formations.component';

describe('PageMesFormationsComponent', () => {
  let component: PageMesFormationsComponent;
  let fixture: ComponentFixture<PageMesFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMesFormationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageMesFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

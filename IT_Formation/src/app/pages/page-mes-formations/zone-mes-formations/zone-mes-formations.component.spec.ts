import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneMesFormationsComponent } from './zone-mes-formations.component';

describe('ZoneMesFormationsComponent', () => {
  let component: ZoneMesFormationsComponent;
  let fixture: ComponentFixture<ZoneMesFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneMesFormationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoneMesFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

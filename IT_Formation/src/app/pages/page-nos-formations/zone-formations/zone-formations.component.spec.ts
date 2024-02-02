import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneFormationsComponent } from './zone-formations.component';

describe('ZoneFormationsComponent', () => {
  let component: ZoneFormationsComponent;
  let fixture: ComponentFixture<ZoneFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneFormationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoneFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

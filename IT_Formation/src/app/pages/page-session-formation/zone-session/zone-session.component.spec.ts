import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneSessionComponent } from './zone-session.component';

describe('ZoneSessionComponent', () => {
  let component: ZoneSessionComponent;
  let fixture: ComponentFixture<ZoneSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneSessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoneSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

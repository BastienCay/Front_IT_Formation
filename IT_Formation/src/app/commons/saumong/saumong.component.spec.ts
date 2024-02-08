import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaumongComponent } from './saumong.component';

describe('SaumongComponent', () => {
  let component: SaumongComponent;
  let fixture: ComponentFixture<SaumongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaumongComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaumongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

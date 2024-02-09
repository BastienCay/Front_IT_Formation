import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConnectionComponent } from './page-connection.component';

describe('PageConnectionComponent', () => {
  let component: PageConnectionComponent;
  let fixture: ComponentFixture<PageConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageConnectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

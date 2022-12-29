import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressComponent } from './in-progress.component';

describe('InProgressComponent', () => {
  let component: InProgressComponent;
  let fixture: ComponentFixture<InProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

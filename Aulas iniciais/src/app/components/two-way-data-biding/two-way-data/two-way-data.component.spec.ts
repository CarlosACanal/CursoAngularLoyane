import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDataComponent } from './two-way-data.component';

describe('TwoWayDataComponent', () => {
  let component: TwoWayDataComponent;
  let fixture: ComponentFixture<TwoWayDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFunctionalityComponent } from './all-functionality.component';

describe('AllFunctionalityComponent', () => {
  let component: AllFunctionalityComponent;
  let fixture: ComponentFixture<AllFunctionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFunctionalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

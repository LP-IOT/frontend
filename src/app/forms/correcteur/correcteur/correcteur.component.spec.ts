import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrecteurComponent } from './correcteur.component';

describe('CorrecteurComponent', () => {
  let component: CorrecteurComponent;
  let fixture: ComponentFixture<CorrecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

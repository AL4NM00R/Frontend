import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BisoteriaComponent } from './bisoteria.component';

describe('BisoteriaComponent', () => {
  let component: BisoteriaComponent;
  let fixture: ComponentFixture<BisoteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BisoteriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BisoteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
